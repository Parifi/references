import { Chain } from '.';

export const chainIdByName: Record<string, Chain> = {
  'arbitrum-one': Chain.ARBITRUM,
  'arbitrum-goerli': Chain.ARBITRUM_GOERLI,
  polygon: Chain.POLYGON,
  base: Chain.BASE,
  'arbitrum-sepolia': Chain.ARBITRUM_SEPOLIA,
};

export const chainNameById: Record<Chain, string> = {
  [Chain.ARBITRUM]: 'arbitrum-one',
  [Chain.ARBITRUM_GOERLI]: 'arbitrum-goerli',
  [Chain.POLYGON]: 'polygon',
  [Chain.BASE]: 'base',
  [Chain.ARBITRUM_SEPOLIA]: 'arbitrum-sepolia',
};
