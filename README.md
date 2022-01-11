# hardhat-verify-deployments

_Verify smart contracts deployed by hardhat-deploy_

## Installation

```shell
npm install -D @cartesi/hardhat-verify-deployments @nomiclabs/hardhat-etherscan hardhat-deploy
```

```shell
yarn add --dev @cartesi/hardhat-verify-deployments @nomiclabs/hardhat-etherscan hardhat-deploy
```

Import the plugin in your `hardhat.config.js`:

```js
require("@cartesi/hardhat-verify-deployments");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@cartesi/hardhat-verify-deployments";
```

## Required plugins

-   [@nomiclabs/hardhat-etherscan](https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-etherscan)
-   [hardhat-deploy](https://github.com/wighawag/hardhat-deploy)

## Tasks

This plugin provides a single task, with no args:

```shell
npx hardhat verify:deployments
```

This will verify on etherscan all the contracts deployed by hardhat-deploy.

## Configuration

You must have both `@nomiclabs/hardhat-etherscan` and `hardhat-deploy` configured. Check their documentation for more information on how to do that.

# Contributing

Thank you for your interest in Cartesi! Head over to our [Contributing Guidelines](CONTRIBUTING.md) for instructions on how to sign our Contributors Agreement and get started with
Cartesi!

Please note we have a [Code of Conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

# Authors

-   _Danilo Tuler_

# License

The repository and all contributions are licensed under
[APACHE 2.0](https://www.apache.org/licenses/LICENSE-2.0). Please review our [LICENSE](LICENSE) file.
