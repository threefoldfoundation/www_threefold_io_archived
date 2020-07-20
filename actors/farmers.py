from Jumpscale import j


REPO = "https://github.com/threefoldfoundation/data_farmers/tree/master/farmers"


def get_data(path):
    data = []
    
    for directory in j.sal.fs.listDirsInDir(path):
        farmer_data = {}
        name = j.sal.fs.getBaseName(directory)
        for filepath in j.sal.fs.listFilesInDir(directory):
            basename = j.sal.fs.getBaseName(filepath)
            extname = j.sal.fs.getFileExtension(filepath)
            if basename.lower().startswith("info") and extname == "toml":
                farmer_data.update(j.data.serializers.toml.load(filepath))
            elif extname.lower() in ("png", "jpg", "jpeg", "svg"):
                farmer_data["logo"] = j.sal.fs.joinPaths(name, basename)

        if farmer_data:
            data.append(farmer_data)

    return data


class farmers(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.path = None

    def clone_repo(self):
        self.path = j.clients.git.getContentPathFromURLorPath(REPO, pull=True)

    def list_farmers(self, user_session=None):
        """
        """
        
        def get_farmers():
            if not self.path:
                try:
                    self.clone_repo()
                except j.exceptions.Base as e:
                    j.errorhandler.exception_handle(e, die=False)
                    return "{}"

            data = get_data(self.path)
            return j.data.serializers.json.dumps(data)

        key = f"farmers_actor"
        # cache for 5 mins
        return self._cache.get(key, method=get_farmers, expire=300)
