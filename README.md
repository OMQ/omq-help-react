<br>

<div align="center">
  <a href="https://omq.ai/products/help/">
    <img width="96" height="96" src="https://omq.ai/images/icons/products/help_96x96.svg" alt="">
  </a>
</div>

<br>

# OMQ Help for React

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

OMQ Help is an auto-searching help page similar to FAQ. The intelligent knowledge database reacts to ongoing changes in
customer behavior. The order of displayed solutions in your self service portal depends on the current request
frequency. Automatic auto-completion guides your customers to the right solution in real time.

<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save @omq.ai/omq-help-react
```

<h2 align="center">Usage</h2>

```js
import { OmqHelp }  from '@omq.ai/omq-help-react';

function App() {
    return (
        <div className="my-app">
            <OmqHelp account="OMQ_ACCOUNT_NAME"  apiKey="OMQ_HELP_API_KEY" />
        </div>
    );
}

export default App;
```

<h2 align="center">Options</h2>

|               Name                |         Type          | Description                              |
| :-------------------------------: | :-------------------: | :--------------------------------------- |
|          [`account`](#account)    |      `{String}`       | OMQ account name/URL                     |
|           [`apiKey`](#apiKey)     |      `{String}`       | OMQ Help API key                         |



#### `account`

Type: `String`

Name/URL of your OMQ account.

#### `apiKey`

Type: `String`

The API key for OMQ Help. You can add/check your API keys in your OMQ account
`https://{account}.omq.io`

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/@omq.ai/omq-help-react.svg
[npm-url]: https://www.npmjs.com/package/@omq.ai/omq-help-react
[node]: https://img.shields.io/node/v/@omq.ai/omq-help-react.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=@omq.ai/omq-help-react
[size-url]: https://packagephobia.now.sh/result?p=@omq.ai/omq-help-react
[deps]: https://david-dm.org/OMQ/omq-help-react.svg
[deps-url]: https://david-dm.org/OMQ/omq-help-react

