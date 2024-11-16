import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
import { ethers, network } from "hardhat";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const ccipRouterAddressEthereumSepolia = `0x0bf3de8c5d3e8a2b34d2beeb17abfcebaf363a59`;
  const linkTokenAddressEthereumSepolia = `0x779877A7B0D9E8603169DdbD7836e478b4624789`;
  const chainIdEthereumSepolia = `16015286601757825753`;

  // deploy xNFT on eth sepolias

  await deploy("XNFT", {
    from: deployer,
    // Contract constructor arguments
    args: [ccipRouterAddressEthereumSepolia, linkTokenAddressEthereumSepolia, chainIdEthereumSepolia],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  const xNFTContract = await hre.ethers.getContract<Contract>("XNFT", deployer);
  console.log(`XNFT deployed on ${network.name} with address ${xNFTContract.target}`);

  // deploy xNFT on arbitrum sepolia

  // await deploy("YourContract", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [deployer],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // // Get the deployed contract to interact with it after deploying.
  // const yourContract = await hre.ethers.getContract<Contract>("YourContract", deployer);
  // console.log("👋 Initial greeting:", await yourContract.greeting());
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];
