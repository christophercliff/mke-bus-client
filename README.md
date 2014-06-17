# mke-bus-client

[![Build Status](https://travis-ci.org/christophercliff/mke-bus-client.png?branch=master)](https://travis-ci.org/christophercliff/mke-bus-client)

A JavaScript client for the [mke-bus][mke-bus] service.

## Usage

In node.js or a web browser:

```js
var client = require('mke-bus').create()

client.getAllRoutes()
    .catch(function(err){  })
    .then(function(routes){  })

// or...

client.getAllRoutes(function(err, routes){  })
```

## Installation

```
$ npm install mke-bus
```

## API

See [REFERENCE][api] for details.

## Contributing

See [CONTRIBUTING][contributing] for details.

## License

MIT, see [LICENSE][license] for details.

[mke-bus]: https://github.com/christophercliff/mke-bus
[api]: https://github.com/christophercliff/mke-bus-client/blob/master/docs/REFERENCE.md
[contributing]: https://github.com/christophercliff/mke-bus-client/blob/master/CONTRIBUTING.md
[license]: https://github.com/christophercliff/mke-bus-client/blob/master/LICENSE.md
