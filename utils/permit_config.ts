import { ChainId } from "@aave/contract-helpers";

export const permitByChainAndToken: {
  [chainId: number]: Record<string, boolean>;
} = {
  [ChainId.arbitrum_one]: {
    "0xf97f4df75117a78c1a5a0dbb814af92458539fb4": true,
    "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8": true,
    "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f": true,
    "0x82af49447d8a07e3bd95bd0d56f35241523fbab1": true,
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": true,
    "0xba5ddd1f9d7f570dc94a51479a000e3bce967196": true,
    "0xd22a58f79e9481d1a88e00c343885a588b34b68b": false, // eurs
  },

  [ChainId.mainnet]: {
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": false,
    "0x514910771af9ca656af840dff83e8264ecf986ca": false,
    "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": true,
    "0xbe9895146f7af43049ca1c1ae358b0541ea49704": false,
    "0x5f98805a4e8be255a32880fdec7f6728c6568ba0": false,
    "0xd533a949740bb3306d119cc777fa900ba034cd52": false,
    "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": false,
    "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": false,
    "0xba100000625a3754423978a60c9317c58a424e3d": false,
    "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": false,
    "0x5a98fcbea516cf06857215779fd812ca3bef1b32": false,
    "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72": false,
    "0x111111111117dc0aa78b770fa6a738034120c302": false,
    "0x853d955acef822db058eb8505911ed77f175b99e": false,
    "0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f": false,
    "0xd33526068d116ce69f19a9ee46f0bd304f21a51f": false,
    "0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6": false,
    "0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202": false,
  },

  [100]: {
    "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1": false,
    "0x6c76971f98945ae98dd7d4dfca8711ebea946ea6": false,
    "0x9c58bacc331c9aa871afd802db6379a98e80cedb": false,
    "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83": false,
    "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d": false,
    "0xcb444e90d8198415266c6a2724b7900fb12fc56e": false,
    "0xaf204776c7245bf4147c2612bf6e5972ee483701": false,
  },

  [ChainId.base]: {
  },

  [ChainId.optimism]: {
  },

  [ChainId.polygon]: {
    "0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c": true,
  },

  [1088]: {
  },

  [ChainId.avalanche]: {
  },

};
