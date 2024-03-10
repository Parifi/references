import { Chain } from '.';

export const chainIdByName: Record<string, Chain> = {
  'arbitrum-sepolia': Chain.ARBITRUM_SEPOLIA,
};

export const chainNameById: Record<Chain, string> = {
  [Chain.ARBITRUM_SEPOLIA]: 'arbitrum-sepolia',
};
