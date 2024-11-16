const nftsMetadata = [
  {
    description: "Song 1",
    external_url: "https://crimson-past-swordfish-588.mypinata.cloud/ipfs/QmVyWY5eHW5bc6kqCysDE34e47KiuV5yq4rZHTX6ZiwoeN", // <-- this can link to a page for the specific file too
    image: "https://austingriffith.com/images/paintings/buffalo.jpg",
    name: "song 1",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "green",
      },
      {
        trait_type: "Eyes",
        value: "googly",
      },
      {
        trait_type: "Stamina",
        value: 42,
      },
    ],
  },
  {
    description: "Song 2",
    external_url: "https://crimson-past-swordfish-588.mypinata.cloud/ipfs/QmVyWY5eHW5bc6kqCysDE34e47KiuV5yq4rZHTX6ZiwoeN", // <-- this can link to a page for the specific file too
    image: "https://austingriffith.com/images/paintings/zebra.jpg",
    name: "song 2",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "blue",
      },
      {
        trait_type: "Eyes",
        value: "googly",
      },
      {
        trait_type: "Stamina",
        value: 38,
      },
    ],
  },
  {
    description: "Song 3",
    external_url: "https://crimson-past-swordfish-588.mypinata.cloud/ipfs/QmVyWY5eHW5bc6kqCysDE34e47KiuV5yq4rZHTX6ZiwoeN", // <-- this can link to a page for the specific file too
    image: "https://austingriffith.com/images/paintings/rhino.jpg",
    name: "song 3",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "pink",
      },
      {
        trait_type: "Eyes",
        value: "googly",
      },
      {
        trait_type: "Stamina",
        value: 22,
      },
    ],
  },
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
