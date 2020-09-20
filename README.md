# www_tfgrid
In this repo we will put the code for the new ThreeFold Grid website.

You can see development updates at
https://www2.threefold.io/



### Local development with tfweb

If you already have `tfweb` binary, you can simply use the config file at `config/tfgrid.toml`, which has all required static and data sites configured:

```bash
tfweb -c config/tfgrid.toml
```

It's better to have the production/testing code at `~/code_production/github/threefoldfoundation/www_tfgrid` and `~/code_testing/github/threefoldfoundation/www_tfgrid` to be able to push/pull manually before running this command, as `tfweb` will do a shallow clone if not found there.
