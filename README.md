![](https://github.com/hubrise/website/workflows/spec/badge.svg)

# Development cycle

First install Docker for your platform. Then follow the platform specific instructions below.

The server runs on: http://localhost:8000

__Windows or Linux:__

In console, `cd` to the project root then type:

```
docker-compose -f docker-compose.yml up --build website_dev
```

__Mac OS:__

Initial setup (to be done only once):
```
brew install rbenv ruby-build
gem install docker-sync
```

In console, `cd` to the project root then type:

```
docker-sync start
docker-compose -f docker-compose.mac.yml up --build website_dev
docker exec website_dev rm -rf public .cache
```

# Run the test suite

In interactive mode - could not make it work inside a Docker container.
Safe bet is to install the yarn dependencies and cypress on the host and run:

```
cypress run
```

The non-interactive, continuous integration version can run in a Docker container however:

__Windows or Linux:__

```shell
docker-compose -f docker-compose.yml up --build website_test
```

__Mac OS:__

```shell
docker-compose -f docker-compose.mac.yml up --build website_test
```

# Run the production image locally

Runs on: http://localhost:8001

This runs the server with Server Side Rendering (SSR) enabled. Pages are not reloaded on code change.

__Windows or Linux:__

```shell
docker-compose -f docker-compose.yml up --build website_prod
```

__Mac OS:__

```shell
docker-compose -f docker-compose.mac.yml up --build website_prod
```

# Production deployment

For HubRise system administrators.

Use the same process as a the other apps (see cluster/doc/build_deploy_app.md)


# Test email-sending forms locally

1. Create file `.env.development` in the root directory with env variable `RECAPTCHA_SITE_KEY=`
2. Go to `/server` directory, create file `.env` and specify the same variables as in `/server/.env.example`
3. Install dependencies in `/server` directory via `yarn`
4. Run server via `cd server; node index.js`
5. From a separate terminal, run gatsby via `yarn start:dev`
