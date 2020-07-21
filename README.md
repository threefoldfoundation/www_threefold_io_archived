# www_threefold.io_new
In this repo we will put the code for the new ThreeFold Network website.

You can see development updates at
https://www2.threefold.io/


## Svelte app
We use a svelte app in some pages, and is served directly under `/public`.



## UI workflow

### Initial setup

- `git clone https://github.com/threefoldfoundation/www_threefold.io_new`
- `git clone https://github.com/threefoldfoundation/data_partners`
- `git clone https://github.com/threefoldfoundation/data_team`
- `cd www_threefold.io_new && git clone https://github.com/threefoldtech/jumpscaleX_weblibs`
- `cd html && npm install`

### Running

- Make sure to have caddy server
- `npm run dev`  to generate development build
- `caddy -conf Caddyfile_dev`


### Production build

Before deploying to production, the latest bundle need to be built, so make sure you push the latest build when modify svelte app.

```
cd html
npm install
npm run build
```


## Deployment

### Jumpscale instructions

You need to start 3bot:

`kosmos -p "j.servers.threebot.start()"`


Then you need to register this package, for more on how to load/register a package, see [threebot documentation](https://github.com/threefoldtech/jumpscaleX_threebot/blob/development/docs/packages.md#registering-package).

**No need to do any npm related commands, as the output of the build is already tracked in `/public` directory**
