const test = require('ava');
const { join } = require('path');
const unwrap = require('../');

const payloads = require('require-all')(join(__dirname, '__fixtures__'));

for (const [name, payload] of Object.entries(payloads)) {
  test(name, (t) => {
    t.snapshot(unwrap(payload));
  });
}
