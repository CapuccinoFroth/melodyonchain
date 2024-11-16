// scripts/enableChainArbitrum.ts

import { ethers, network } from "hardhat";
import { Wallet } from "ethers";
import { XNFT, XNFT__factory } from "../typechain-types";

async function main() {
  if (network.name !== `arbitrumSepolia`) {
    console.error(`Must be called from Arbitrum Sepolia`);
    return 1;
  }

  const privateKey = process.env.DEPLOYER_PRIVATE_KEY!;
  //const rpcProviderUrl = process.env.AVALANCHE_FUJI_RPC_URL;
  const rpcProviderUrl = `https://sepolia-rollup.arbitrum.io/rpc`;

  const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
  const wallet = new Wallet(privateKey);
  const signer = wallet.connect(provider);

  const xNftAddressArbitrumSepolia = `0x63BCa8AF88E720C4769AA2c4cA9ED37B64a89625`;
  const xNftAddressEthereumSepolia = `0xB79dfd169AD282D5b4dd594d581623B88f1ed32d`;
  const chainSelectorEthereumSepolia = `16015286601757825753`;
  const ccipExtraArgs = `0x97a657c90000000000000000000000000000000000000000000000000000000000030d40`;

  const xNft: XNFT = XNFT__factory.connect(xNftAddressArbitrumSepolia, signer);

  const tx = await xNft.enableChain(
      chainSelectorEthereumSepolia,
      xNftAddressEthereumSepolia,
      ccipExtraArgs
  );

  console.log(`Transaction hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});