# 🎶🎻🎺 ChainMelody  

### Creating Music from On-Chain Transaction Activity Using Chainlink CCIP


In phase 1 the project generates personalized music using on-chain transaction activity while leveraging Chainlink’s products like CCIP.  In phase 2, the project will combine the worlds of DeFi, cross-chain interoperability, and AI-generated music to create a unique user experience and we will use  Functions and Automation.


<img width="880" alt="Screenshot 2024-11-17 at 4 28 52 AM" src="https://github.com/user-attachments/assets/dc5d3078-47df-4e7b-8f8c-1fd177008441">


## How It Works: Concept Overview
ChainMelody will use on-chain data (like transaction volume, frequency, gas fees, token swaps, etc.) to generate musical patterns, melodies, and rhythms. By leveraging Chainlink CCIP, users can pull data from multiple blockchains, ensuring that the generated music reflects their entire crypto journey, even if they use different networks.


Step 1: Get data from one or various networks.
In this case we get it from Ethereum Sepolia using Etherscan API with a key .

Step 2: Upload that data to an AI API to generate music with the input being the data collected from on-chain and returns an mp3. [This is for phase 2]

Step 3: We upload the mp3 to IPFS and generate a music NFT to mint.  [This is for phase 2]

Step 4: The music NFT is minted on a blockchain, in this case Arbitrum. The Token ID needs to be entered in the input field text box.

Step 5: The music NFT can be sent out to the other chains via CCIP. 

Step 6: The tnx hash can be confirmed in CCIP Explorer.

Use-case:
Yearly wrap up music compilation of your activity onchain.
Listen to DeFi Summer.
Gift your loved ones their personalized music address as sounds. 





# 🏗 Scaffold-ETH 2

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd my-dapp-example
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contracts in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
