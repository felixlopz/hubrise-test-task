![](https://github.com/hubrise/website/workflows/spec/badge.svg)

# Development cycle

First install Docker for your platform. Then follow the platform specific instructions below.

The server runs on: http://localhost:8000

## Windows or Linux

In console, `cd` to the project root then type:

```
docker-compose -f docker-compose.yml up --build
```

## Mac OS

Initial setup (to be done only once):
```
brew install rbenv ruby-build
gem install docker-sync
```

In console, `cd` to the project root then type:

```
docker-sync start
docker-compose -f docker-compose.mac.yml up --build
```

# Run the test suite

In interactive mode - could not make it work inside a Docker container.
Safe bet is to install the yarn dependencies and cypress on the host and run:

```
cypress run
```

The non-interactive, continuous integration version can run in a Docker container however:

```shell
docker-compose -f docker-compose-test.yml up --build
```

# Run the production image locally

Runs on: http://localhost:8001

SSR (Server Side Rendering) enabled, no page auto-reload.

```shell
docker-compose -f docker-compose-prod.yml up --build
```

# Production deployment

Same process as a the other apps (see cluster/doc/build_deploy_app.md)
