import { useState } from "react";

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);

  const fetchNFTs = async () => {
    let nfts;
    console.log("Fetching NFTs");
    const api_key = "j4mtMyHHXPxOy8_D6hswF2Z7VGnI2Bno";
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: "GET",
    };

    if (!collection.length) {
      const fetchURL = `${baseURL}?owner=${wallet}`;
      nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    }

    if (nfts) {
      console.log("NFTS: ", nfts);
      setNFTs(nfts.ownedNfts);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input type={"text"} placeholder="Add your wallet address"></input>
        <input type={"text"} placeholder="Add the collection address"></input>
        <label className="text-gray-600 ">
          <input type={"checkbox"} className="mr-2"></input>Fetch for collection
        </label>
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {}}
        >
          Let's go!{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
