import { Chain } from './chain';

export const isChainTestnet: Record<Chain, boolean> = {
  [Chain.ARBITRUM_GOERLI]: true,
  [Chain.ARBITRUM]: false,
  [Chain.POLYGON]: false,
  [Chain.BASE]: false,
  [Chain.ARBITRUM_SEPOLIA]: true,
};
