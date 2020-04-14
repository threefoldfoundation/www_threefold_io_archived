import gevent
from Jumpscale import j


THREEFOLD_IO = "https://github.com/threefoldfoundation/www_threefold.io_new"
REPOS = {
    "team": "https://github.com/threefoldfoundation/data_team/tree/master/team",
    "community": "https://github.com/threefoldfoundation/data_partners/tree/master/partners",
}


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

    def prepare(self):
        """
        called when the 3bot starts
        :return:
        """

        server = self.openresty
        server.install()
        server.configure()

        website = server.get_from_port(80)
        website.ssl = False
        locations = website.locations.get("threefold.io")

        website_path, team_path, community_path = self.clone_repos()

        website_location = locations.locations_static.new()
        website_location.name = "threefold"
        website_location.path_url = "/"
        website_location.path_location = website_path

        data_team_location = locations.locations_static.new()
        data_team_location.name = "team"
        data_team_location.path_url = "/team_data"
        data_team_location.path_location = team_path

        data_community_location = locations.locations_static.new()
        data_community_location.name = "partners"
        data_community_location.path_url = "/partners_data"
        data_community_location.path_location = community_path

        locations.configure()
        website.configure()

    def start(self):
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

    def uninstall(self):
        """
        called when the package is no longer needed and will be removed from the threebot
        :return:
        """
        pass
