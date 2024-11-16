import axios from "axios";
import { dataStorage } from "./dataStorage";

const apiKey = "7RDWKENV7HXYWBZZBXKG6DUG5J7T5U4KKX";// "YOUR_ETHERSCAN_API_KEY";
const walletAddress = "0x9bAF1Bea960d0f4476bc38b2a34594f6A16dF2a5"; // "0xYourWalletAddress";

// Specify the output file path
//const filePath = './simpleNFT/data.json';
const filePath = './data.json';

export async function getTransactionHistory() {
    //const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;
  //  const url = `https://api-metadata.etherscan.io/v1/api.ashx?module=nametag&action=getaddresstag&address=0x9bAF1Bea960d0f4476bc38b2a34594f6A16dF2a5&apikey=7RDWKENV7HXYWBZZBXKG6DUG5J7T5U4KKX`;
   
    const url = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=0x9bAF1Bea960d0f4476bc38b2a34594f6A16dF2a5&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=7RDWKENV7HXYWBZZBXKG6DUG5J7T5U4KKX`; 
    const response = await axios.get(url);
    const tnx_data = response.data.result;
    //console.log(tnx_data);

    // Convert data to JSON string format
    const jsonData = JSON.stringify(tnx_data, null, 2);
    dataStorage.jsonData = jsonData
    console.log(dataStorage.jsonData)

    return jsonData



// Write the JSON data to a file
// fs.writeFile(filePath, jsonData, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log('Data successfully written to file:', filePath);
//     }
// });

}

//getTransactionHistory();

