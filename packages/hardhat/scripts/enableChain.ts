// scripts/enableChain.ts

import { ethers, network } from "hardhat";
import { Wallet } from "ethers";
import { XNFT, XNFT__factory } from "../typechain-types";

async function main() {
  if (network.name !== `sepolia`) {
    console.error(`Must be called from Ethereum Sepolia`);
    return 1;
  }

  const privateKey = process.env.DEPLOYER_PRIVATE_KEY!;
  //const rpcProviderUrl = process.env.AVALANCHE_FUJI_RPC_URL;
  const rpcProviderUrl = `https://sepolia.drpc.org`;
 //console.log(privateKey);
  const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
  const wallet = new Wallet(privateKey);
  const signer = wallet.connect(provider);

  const xNftAddressEthereumSepolia = `0xB79dfd169AD282D5b4dd594d581623B88f1ed32d`;
  const xNftAddressArbitrumSepolia = `0x63BCa8AF88E720C4769AA2c4cA9ED37B64a89625`;
  const chainSelectorArbitrumSepolia = `3478487238524512106`;
  const ccipExtraArgs = `0x97a657c90000000000000000000000000000000000000000000000000000000000030d40`;

  const xNft: XNFT = XNFT__factory.connect(xNftAddressEthereumSepolia, signer);

  const tx = await xNft.enableChain(
      chainSelectorArbitrumSepolia,
      xNftAddressArbitrumSepolia,
      ccipExtraArgs
  );

  console.log(`Transaction hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});