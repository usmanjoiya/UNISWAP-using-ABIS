import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x92908e8b1d9832cd46d4116393a71145a23f6bea"; 
export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/HKrNWRhzXvk7HMZJESoQd97w8D03s4Ci",
  },
};