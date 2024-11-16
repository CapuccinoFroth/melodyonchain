import { useState } from "react";
import { getTransactionHistory } from "./etherscanData";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const Givememusic = (address: any) => {
  const myAddress = address.address;
  const { writeContractAsync: writeYourContractAsyncMint, data: dataMint, isMining } = useScaffoldWriteContract("XNFT");
  const { writeContractAsync: writeYourContractAsyncBridge, data: dataBridge } = useScaffoldWriteContract("XNFT");
  const { data: totalNFT } = useScaffoldReadContract({
    contractName: "XNFT",
    functionName: "balanceOf",
    args: [myAddress],
  });
  const [nftMinted, setNftMinted] = useState(false);
  const [inputValue, setInputValue] = useState<number | "">("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Accept only numbers
    if (value === "" || /^\d+$/.test(value)) {
      setInputValue(value === "" ? "" : parseInt(value, 10));
    }
  };

  // Handle button click
  const handleButtonClick = () => {
    if (inputValue !== "") {
      console.log("Number set:", inputValue);
    } else {
      console.log("No number entered");
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <p className="text-center text-lg mt-8">🎫 Create a simple Music NFT based on your on-chain activity.🚀</p>

      <button className="btn btn-secondary mt-4" onClick={getTransactionHistory}>
        Get Ethereum Sepolia on-chain transactions
      </button>

      <p className="text-center text-lg mt-4">🌟</p>

      <button className="btn btn-secondary mt-4" onClick={() => console.log("get mp3")}>
        Create Music Track using AI API based on on-chain transactions
      </button>

      <p className="text-center text-lg mt-4">🌟🌟🌟🌟</p>

      <button
        className="btn btn-primary mt-4"
        onClick={async () => {
          try {
            await writeYourContractAsyncMint({ functionName: "mint" });
            setNftMinted(true);
          } catch (e) {
            console.error("Error setting greeting:", e);
          }
        }}
      >
        Mint Track NFT on Arbitrum Sepolia
      </button>

      {nftMinted && !isMining && (
        <>
          <h1 className="text-center mt-8">My Audio Player</h1>
          <audio controls className="mt-4">
            <source src="/song.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}

      <div className="mt-4">Tx-hash mint: {dataMint}</div>
      <p className="text-center text-lg mt-4">🌟</p>

      <div className="text-xl font-semibold text-gray-800 text-center mb-6">Set token id</div>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
        className="w-full border border-gray-300 rounded-md p-3 mb-6 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      <button
        className="btn btn-primary mt-4"
        disabled={!inputValue}
        onClick={async () => {
          try {
            await writeYourContractAsyncBridge({
              functionName: "crossChainTransferFrom",
              // TokenId hardcoded, adjust manually as needed
              args: [myAddress, myAddress, BigInt(inputValue), BigInt("16015286601757825753"), 1],
            });
          } catch (e) {
            console.error("Error setting greeting:", e);
          }
        }}
      >
        Cross-Chain Transfer Music NFT to Ethereum Sepolia
      </button>

      <div className="mt-4"> Tx hash for ccip explorer {dataBridge}</div>
      <p className="text-center text-lg mt-4">🌟</p>
    </div>
  );
};
