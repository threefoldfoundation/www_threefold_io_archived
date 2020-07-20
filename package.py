import gevent
from Jumpscale import j


THREEFOLD_IO = "https://github.com/threefoldfoundation/www_tfgrid"
REPOS = {
    "team": "https://github.com/threefoldfoundation/data_team/tree/master/team",
    "community": "https://github.com/threefoldfoundation/data_partners/tree/master/partners",
    "farmers": "https://github.com/threefoldfoundation/data_farmers/tree/master/farmers"
}

DOMAIN = "www.threefold.io"


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        self.branch = kwargs["package"].branch or "development"

        self.auto_update_greetlet = None
        # disable auto updates in production
        self.disable_auto_update = self.branch == "master"

    def clone_repos(self, pull=False):
        # clone website
        self._log_debug("Pulling threefold.io...")
        yield j.clients.git.getContentPathFromURLorPath(THREEFOLD_IO, branch=self.branch, pull=pull)

        # all the rest is from master
        for name, url in REPOS.items():
            self._log_debug(f"Pulling {name}")
            yield j.clients.git.getContentPathFromURLorPath(url, pull=pull)

    def auto_pull_worker(self):
        while True:
            try:
                for path in self.clone_repos(pull=True):
                    self._log_debug(f"Successfully pulled to {path}")
            except j.exceptions.Base as e:
                j.errorhandler.exception_handle(e, die=False)

            gevent.sleep(200)

    def start(self):
        """
        called when the 3bot starts
        :return:
        """

        server = self.openresty
        server.configure()

        _, team_path, community_path, farmers_path = self.clone_repos()

        for port in (80, 443):
            website = server.websites.get(f"threefold_me_{port}")
            website.domain = DOMAIN
            website.port = port
            website.ssl = port == 443
            locations = website.locations.get(f"threefold_me_locations_{port}")

            include_location = locations.get_location_custom(f"threefold_io_include_{port}")
            # default website locations include wiki and other related locations
            # so include them
            # also, add rewrite, as a default static location is created for html directory
            # but, not on /
            default_website_name = self.openresty.get_from_port(port).name
            include_location.config = f"""include {website.path_cfg_dir}/{default_website_name}_locations/*.conf;"""

            website_location = locations.get_location_static("website_location")
            website_location.path_url = "/"
            website_location.path_location = f"{self._dirpath}/html"
            website_location.force_https = True
            
            data_team_location = locations.get_location_static("team_data_location")
            data_team_location.path_url = "/team_data"
            data_team_location.path_location = team_path

            data_community_location = locations.get_location_static("partners_data_location")
            data_community_location.path_url = "/partners_data"
            data_community_location.path_location = community_path

            data_community_location = locations.get_location_static("farmers_data_location")
            data_community_location.path_url = "/farmers_data"
            data_community_location.path_location = farmers_path

            stellar_location = locations.get_location_custom(f"stellarcors_{port}")
            stellar_location.path_url = "/.well-known/stellar.toml"
            stellar_location.config = """
                location /.well-known/stellar.toml {
                add_header 'Access-Control-Allow-Origin' '*';
                alias /sandbox/code/github/threefoldfoundation/www_tffoundation/html/.well-known/stellar.toml;
                }
            """            
            
            
            locations.configure()
            website.configure()

        self.start_auto_pull()

    def start_auto_pull(self):
        """
        called when the 3bot starts
        :return:
        """
        if not self.disable_auto_update:
            self.auto_update_greetlet = gevent.spawn(self.auto_pull_worker)

    def stop(self):
        """
        called when the 3bot stops
        :return:
        """
        if self.auto_update_greetlet:
            self.auto_update_greetlet.kill()
