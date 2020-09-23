# data-api-unwrap

Unwrap AWS RDS Data API responses. Taken out of [jeremydaly/data-api-client](https://github.com/jeremydaly/data-api-client).

## install

```bash
yarn add --dev data-api-unwrap
```

```bash
npm install --save-dev data-api-unwrap
```

## usage

```js
const UnWrap = require('data-api-unwrap');

const rds = new RDSDataService({
  httpOptions: {
    agent: sslAgent,
  },
});

UnWrap(
  await rds
    .executeStatement({
      sql: 'SELECT * FROM users',
      includeResultMetadata: true,
    })
    .promise(),
);
```

## license

BSD-3-Clause
