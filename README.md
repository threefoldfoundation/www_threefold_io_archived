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
- `npm install`

### Running

- Make sure to have caddy server
- `npm run dev`  to generate development build
- `caddy -conf Caddyfile_dev`


### Production build

Before deploying to production, the latest bundle need to be built, so make sure you push the latest build when modify svelte app.

```
npm install
npm run build
```


## Deployment

### Jumpscale instructions

#### Installing server and node dependecies

```
kosmos 'j.builders.apps.threebot.install()'
```

#### Running the packag:

This will start threebot server, and also a worker to auto-pull related repositories in case it's not a production build (master branch).

`kosmos -p 'j.threebot.package.threefold_io.start(branch="development", ssl=True)'`

**No need to do any npm related commands, as the output of the build is already tracked in `/public` directory**
