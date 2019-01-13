# 모던 자바스크립트 과외

[![Build Status](https://camo.githubusercontent.com/9d65f4f3b984ce840d5965aa36ec898c232273f8/68747470733a2f2f7472617669732d63692e6f72672f6d616b657264616f2f65785f74657374636861696e2e7376673f6272616e63683d6d6173746572)](https://travis-ci.org/makerdao/ex_testchain)

This is Elixir MVP implementation of Testchain as a Service.

Right now it implements this features:

- Start/stop new chain (`geth|ganache`)
- Start/Stop mining process
- Take/revert snapshot

Other documentation:

- [Docker support](https://github.com/makerdao/ex_testchain/blob/master/docs/DOCKER_SERVICE.md)
- [Websocket API](https://github.com/makerdao/ex_testchain/blob/master/docs/WS_API.md)

## Requirements

- Elixir 1.7+
- Erlang 21+

## Installation

As for now project requires Elixir installed + chain you want to work with.

[**Installing Elixir**](https://elixir-lang.org/install.html)

For NixOS you will also need to install Erlang R21 to make `escript` available

```
$ nix-env -iA nixos.erlangR21
```

Installing project dependencies is easy:

```
$ make deps
```

Will install, compile all elixir dependencies and node.js for ganache

## Docker support

For people who don't want to install everything on local machine there is Docker image provided.

All details are [here](https://github.com/makerdao/ex_testchain/blob/master/docs/DOCKER_SERVICE.md)

### Geth

ExTestchain uses `geth` installed in your system.

[**Installation**](https://github.com/ethereum/go-ethereum/wiki/Installing-Geth)

After this `geth` should be available in your system.

### Ganache

ExTestchain uses local ganache-cli installation.

And `ganache-cli` added as git module to the project and you have to check it out.

```
$ git submodule init
$ git submodule update
```

After fetching it locally you have to install dependencies (if you didn't run `make deps`):

```
$ cd priv/presets/ganache-cli
$ npm install
```

## How it's working

[![How it's working](https://github.com/makerdao/ex_testchain/raw/master/how_works.png)](https://github.com/makerdao/ex_testchain/blob/master/how_works.png)

## Building

First you need to install dependencies. For elixir project it's done using command:

```
$ mix do deps.get, deps.compile
```

To build project you can use:

```
$ mix compile
```

To run it locally:

```
$ iex -S mix phx.server
```

This command will start project locally and spawn a HTTP/WS server on port `4000`

And it will become accesible from anywhere you need.

## Logging

For now ExTestchain uses logger in debug mode and all messages will be printed to your CLI. To omit this uncomment logger level in `apps/chain/config/config.ex`

```
config :logger, level: :info
```

And recompile your project

Happy testing ! 👻