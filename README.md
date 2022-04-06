# node-quites-lib
Official library for working with [API Quites](http://quites.site/)
# Install
```
npm init 

npm i node-quites-lib
```
# Basic Usage
```js
const Quites = require("node-quites-lib");

const client = new Quites();

client.getList().then(data => console.log(data));

client.on("message", message => {
  console.log(message);
});
```
# Methods

- __client.getQuotes(param);__
  - Get quotes for a specific cryptocurrency pair.
  - Options:
    - param (Any available cryptocurrency in our API)

- __client.convert(from, to, amount);__
  - Convert from one cryptocurrency to another.
  - Options:
    - from (What cryptocurrency to convert from)
    - to (What cryptocurrency to convert to)
    - amount (Optional. The amount of received cryptocurrency)

- __client.getList(pair, above, below);__
  - Get a list of available cryptocurrency pairs.  
  - Options:
    - above (Optional. Sorting cryptocurrencies by a price higher than the specified one)
    - below (Optional. Sorting cryptocurrencies at a price below the specified one)   

# Examples
```js
client.getQuotes("BTC", "eth", "xrp").then(data => console.log(data));

client.convert("BTC", "ETH", 100).then(data => console.log(data));

client.getList("USD", 10, 20).then(data => console.log(data));
```
