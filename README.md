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

const rds = new RDSDataService();

console.log(
  UnWrap(
    await rds
      .executeStatement({
        sql: 'SELECT * FROM categories',
        includeResultMetadata: true,
      })
      .promise(),
  ),
);
```

```json
[
  {
    "created": "2019-11-12 22:00:11",
    "deleted": null,
    "description": null,
    "id": 1,
    "modified": "2019-11-12 22:15:25",
    "name": "Category 1"
  },
  {
    "created": "2019-11-12 22:17:11",
    "deleted": null,
    "description": "Description of Category 2",
    "id": 2,
    "modified": "2019-11-12 22:21:36",
    "name": "Category 2"
  }
]
```

## license

BSD-3-Clause
