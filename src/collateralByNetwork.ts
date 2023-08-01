import { Chain, Collateral } from '.';

export const collateralByNetwork: {
  [key: string]: { [key: string]: `0x${string}` };
} = {
  [Chain.POLYGON]: {
    [Collateral.USDC]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    [Collateral.ETH]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  [Chain.ARBITRUM]: {
    [Collateral.USDC]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    [Collateral.ETH]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  },
  [Chain.ARBITRUM_GOERLI]: {
    [Collateral.USDC]: '0x442186eeC60b09cF68A026A9cbF840c6E9Abdb1A',
    [Collateral.ETH]: '0x128eCB61c2750b185e924cef31d42B4593F5fABC',
  },
};
