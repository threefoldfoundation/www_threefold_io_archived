from Jumpscale import j


REPO = "https://github.com/threefoldfoundation/data_partners/tree/master/partners"


def get_data(path):
    data = []
    for directory in j.sal.fs.listDirsInDir(path):
        partner_data = {}
        name = j.sal.fs.getBaseName(directory)
        for filepath in j.sal.fs.listFilesInDir(directory):
            basename = j.sal.fs.getBaseName(filepath).lower()
            extname = j.sal.fs.getFileExtension(filepath)
            if basename.startswith("info") and extname == "toml":
                partner_data.update(j.data.serializers.toml.load(filepath))
            elif extname in ("png", "jpg", "jpeg", "svg"):
                partner_data["logo"] = j.sal.fs.joinPaths(name, basename)

        if partner_data:
            data.append(partner_data)

    return data


class community(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.path = None

    def clone_repo(self):
        self.path = j.clients.git.getContentPathFromURLorPath(REPO, pull=True)

    def list_partners(self, user_session):
        """
        """

        def get_partners():
            if not self.path:
                try:
                    self.clone_repo()
                except j.exceptions.Base as e:
                    j.errorhandler.exception_handle(e, die=False)
                    return "{}"

            data = get_data(self.path)
            return j.data.serializers.json.dumps(data)

        key = f"community_actor"
        # cache for 5 mins
        return self._cache.get(key, method=get_partners, expire=300)
