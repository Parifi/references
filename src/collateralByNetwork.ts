import { Chain, Collateral } from '.';
import ARBITRUM_SEPOLIA_TOKENS from './address/arb-sepolia/tokens';

export const collateralByNetwork: {
  [chain in Chain]: { [key: string]: `0x${string}` };
} = {
  [Chain.ARBITRUM_SEPOLIA]: {
    [Collateral.USDC]: ARBITRUM_SEPOLIA_TOKENS.USDC,
    [Collateral.ETH]: ARBITRUM_SEPOLIA_TOKENS.ETH,
  },
};

type ReverseMapping = {
  [chain in Chain]: { [key: `0x${string}`]: string };
};

export const collateralByAddress: ReverseMapping = {
  [Chain.ARBITRUM_SEPOLIA]: {
    [ARBITRUM_SEPOLIA_TOKENS.USDC]: Collateral.USDC,
    [ARBITRUM_SEPOLIA_TOKENS.ETH]: Collateral.ETH,
  },
};
