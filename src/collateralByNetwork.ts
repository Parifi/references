import { Chain, Collateral } from '.';

export const collateralByNetwork: {
  [chain in Chain]: { [key: string]: `0x${string}` };
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
  [Chain.BASE]: {
    [Collateral.USDC]: '0x01',
    [Collateral.ETH]: '0x02',
  },
  [Chain.ARBITRUM_SEPOLIA]: {
    [Collateral.USDC]: '0x746621aAccf189A28d7eC61DeE084d06B0417a07',
    [Collateral.ETH]: '0x0299f136593C7D7A14eF69CDb9Bc894449b5674f',
  },
};

type ReverseMapping = {
  [chain in Chain]: { [key: `0x${string}`]: string };
};

export const collateralByAddress: ReverseMapping = {
  [Chain.POLYGON]: {
    '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174': Collateral.USDC,
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': Collateral.ETH,
  },
  [Chain.ARBITRUM]: {
    '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8': Collateral.USDC,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1': Collateral.ETH,
  },
  [Chain.ARBITRUM_GOERLI]: {
    '0x442186eeC60b09cF68A026A9cbF840c6E9Abdb1A': Collateral.USDC,
    '0x128eCB61c2750b185e924cef31d42B4593F5fABC': Collateral.ETH,
  },
  [Chain.BASE]: {
    '0x01': Collateral.USDC,
    '0x02': Collateral.ETH,
  },
  [Chain.ARBITRUM_SEPOLIA]: {
    '0x746621aAccf189A28d7eC61DeE084d06B0417a07': Collateral.USDC,
    '0x0299f136593C7D7A14eF69CDb9Bc894449b5674f': Collateral.ETH,
  },
};
