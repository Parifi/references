import { Chain } from "../types";

export const chainIdByName: Record<string, Chain> = {
  'arbitrum-one': Chain.ARBITRUM_MAINNET,
};

export const chainNameById: Record<Chain, string> = {
  [Chain.ARBITRUM_MAINNET]: 'arbitrum-one',
};
