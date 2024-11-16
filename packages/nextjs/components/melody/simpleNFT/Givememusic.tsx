import { useState } from "react";
import { getTransactionHistory } from "./etherscanData";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const Givememusic = (address: any) => {
  const myAddress = address.address;
  const { writeContractAsync: writeYourContractAsyncMint, data: dataMint } = useScaffoldWriteContract("XNFT");
  const { writeContractAsync: writeYourContractAsyncBridge, data: dataBridge } = useScaffoldWriteContract("XNFT");
  const { data: totalNFT } = useScaffoldReadContract({
    contractName: "XNFT",
    functionName: "balanceOf",
    args: [myAddress],
  });
  const [nftMinted, setNftMinted] = useState(false);

  function getMP3() {
    var myAudio = document.getElementById("myAudio");
    if (myAudio) {
      if (myAudio.style.display === "none") {
        myAudio.style.display = "block";
      } else {
        myAudio.style.display = "none";
      }
    }
  }

  return (
    <div className="max-w-3xl">
      <p className="text-center text-lg mt-8">🎫 Create a simple Music NFT based on your onchain activity.🚀</p>
      <button className={`btn btn-secondary mt-4`} onClick={getTransactionHistory}>
        Get Ethereum Sepolia on chain transactions
      </button>
      <p className="text-center text-lg"> 🌟 </p>
      <button className={`btn btn-secondary mt-4`} onClick={getMP3}>
        Create Music Track using AI API based on on-chain tnxs
      </button>

      <p className="text-center text-lg"> 🌟🌟🌟🌟 </p>
      <button
        className="btn btn-primary"
        onClick={async () => {
          try {
            await writeYourContractAsyncMint({
              functionName: "mint",
            });
            setNftMinted(true);
          } catch (e) {
            console.error("Error setting greeting:", e);
          }
        }}
      >
        Mint Track NFT on Arbitrum Sepolia
      </button>
      {nftMinted && (
        <>
          <h1>My Audio Player</h1>
          <audio controls>
            <source src="/song.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
      <div>Tx-hash mint: {dataMint}</div>
      <p className="text-center text-lg"> 🌟 </p>

      <button
        className="btn btn-primary"
        onClick={async () => {
          try {
            await writeYourContractAsyncBridge({
              functionName: "crossChainTransferFrom",
              //   TokenId hardcoded!!!! needs to be adjusted before send manually (NFT contract must inherit enumberable)
              args: [myAddress, myAddress, BigInt("1"), BigInt("16015286601757825753"), 1],
            });
          } catch (e) {
            console.error("Error setting greeting:", e);
          }
        }}
      >
        Cross-Chain trasnfer Music NFT to Ethreum Sepolia
      </button>
      <div>{dataBridge}</div>
      <p className="text-center text-lg"> 🌟 </p>
    </div>
  );
};
