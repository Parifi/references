import ARBITRUM_MAINNET_TOKENS from '../constants/tokens';
import { Chain, Collateral } from '../types';

export const collateralByNetwork: {
  [chain in Chain]: { [key: string]: `0x${string}` };
} = {
  [Chain.ARBITRUM_MAINNET]: {
    [Collateral.USDC]: ARBITRUM_MAINNET_TOKENS.USDC,
    [Collateral.ETH]: ARBITRUM_MAINNET_TOKENS.ETH,
  },
};

type ReverseMapping = {
  [chain in Chain]: { [key: `0x${string}`]: string };
};

export const collateralByAddress: ReverseMapping = {
  [Chain.ARBITRUM_MAINNET]: {
    [ARBITRUM_MAINNET_TOKENS.USDC]: Collateral.USDC,
    [ARBITRUM_MAINNET_TOKENS.ETH]: Collateral.ETH,
  },
};
