import { Chain } from '.';

export const chainIdByName: Record<string, Chain> = {
  'arbitrum-sepolia': Chain.ARBITRUM_SEPOLIA,
  'arbitrum-one': Chain.ARBITRUM_MAINNET,
};

export const chainNameById: Record<Chain, string> = {
  [Chain.ARBITRUM_SEPOLIA]: 'arbitrum-sepolia',
  [Chain.ARBITRUM_MAINNET]: 'arbitrum-one',
};
