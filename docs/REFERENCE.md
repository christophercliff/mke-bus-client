# v0.1.x API Reference

- [`Client.create([options])`](#clientcreateoptions)
- [`Client` methods](#client-methods)
    - [`client.getAllAlertsWhere(options[, callback])`](#clientgetallalertswhereoptions-callback)
    - [`client.getAllDirectionsWhere(options[, callback])`](#clientgetalldirectionswhereoptions-callback)
    - [`client.getAllPatternsWhere(options[, callback])`](#clientgetallpatternswhereoptions-callback)
    - [`client.getAllPredictionsWhere(options[, callback])`](#clientgetallpredictionswhereoptions-callback)
    - [`client.getAllRoutes([callback])`](#clientgetallroutescallback)
    - [`client.getAllStopsWhere(options[, callback])`](#clientgetallstopswhereoptions-callback)
    - [`client.getAllVehiclesWhere(options[, callback])`](#clientgetallvehicleswhereoptions-callback)
    - [`client.getPatternCalled(id[, callback])`](#clientgetpatterncalledid-callback)
    - [`client.getTime([callback])`](#clientgettimecallback)
    - [`client.getVehicleCalled(id[, callback])`](#clientgetvehiclecalledid-callback)

## `Client.create([options])`

Creates the client.

```js
var client = Client.create(options)
```

#### `options`

- **`location`** `String location`

    The server location. Default `https://mke-bus.herokuapp.com`.

## `Client` methods

All methods return promises and accept an optional callback parameter. Errors are [Boom][boom] objects.

```js
client.getAllRoutes()
    .catch(function(err){})
    .then(function(routes){})

// or...

client.getAllRoutes(function(err, routes){})
```

### `client.getAllAlertsWhere(options[, callback])`

Gets the alerts.

```js
client
    .getAllAlertsWhere(options)
    .then(function(alerts){})
```

#### `options`

- **`route_id`** `String route_id`

    The route ID. Required.

- **`direction`** `String direction`

    The direction. Required.

### `client.getAllDirectionsWhere(options[, callback])`

Gets the directions.

```js
client
    .getAllDirectionsWhere(options)
    .then(function(directions){})
```

#### `options`

- **`route_id`** `String route_id`

    The route ID. Required.

### `client.getAllPatternsWhere(options[, callback])`

Gets the patterns.

```js
client
    .getAllPatternsWhere(options)
    .then(function(patterns){})
```

#### `options`

- **`route_id`** `String route_id`

    The route ID. Required.

### `client.getAllPredictionsWhere(options[, callback])`

Gets the predictions.

```js
client
    .getAllPredictionsWhere(options)
    .then(function(predictions){})
```

#### `options`

- **`stop_id`** `String stop_id`

    The stop ID. Required.

- **`route_id`** `String route_id`

    The route ID. Required.

- **`take`** `Number take`

    The number of prediections to return. Default `5`.

### `client.getAllRoutes([callback])`

Gets the routes.

```js
client
    .getAllRoutes()
    .then(function(routes){})
```

### `client.getAllStopsWhere(options[, callback])`

Gets the stops.

```js
client
    .getAllStopsWhere(options)
    .then(function(stops){})
```

#### `options`

- **`route_id`** `String route_id`

    The route ID. Required.

- **`direction`** `String direction`

    The direction. Required.

### `client.getAllVehiclesWhere(options[, callback])`

Gets the vehicles.

```js
client
    .getAllVehiclesWhere(options)
    .then(function(vehicles){})
```

#### `options`

- **`route_id`** `String route_id`

    The route ID. Required.

### `client.getPatternCalled(id[, callback])`

Gets the pattern.

```js
client
    .getPatternCalled(id)
    .then(function(pattern){})
```

#### **`id`** `String id`

The pattern ID.

### `client.getTime([callback])`

Gets the system time.

```js
client
    .getTime()
    .then(function(time){})
```

### `client.getVehicleCalled(id[, callback])`

Gets the vehicle.

```js
client
    .getVehicleCalled(id)
    .then(function(pattern){})
```

#### **`id`** `String id`

The vehicle ID.

[boom]: https://github.com/spumko/boom
