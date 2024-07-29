import { Chain } from '../types';

export enum ARBITRUM_MAINNET_VAULTS {
  'USDC' = '0xbf11ac635fe97430b5333018778d0d746f67c989',
  'ETH' = '0xd979e6d8a05ef11b185d2df3d76175eecae522af',
}

export const availableVaultsPerChain: Record<Chain, `0x${string}`[]> = {
  [Chain.ARBITRUM_MAINNET]: [
    ARBITRUM_MAINNET_VAULTS.ETH, // ETH
    ARBITRUM_MAINNET_VAULTS.USDC, // USDC
  ],
};

export const usedVaultsPerChain: Record<Chain, Record<string, `0x${string}`>> = {
  [Chain.ARBITRUM_MAINNET]: {
    ETH: availableVaultsPerChain[Chain.ARBITRUM_MAINNET][0],
    USDC: availableVaultsPerChain[Chain.ARBITRUM_MAINNET][1],
  },
};

export function usedVaultsByName(token: string): string {
  const usedVaultsByName: Record<string, string> = {
    [availableVaultsPerChain[Chain.ARBITRUM_MAINNET][0]]: 'Ethereum',
    [availableVaultsPerChain[Chain.ARBITRUM_MAINNET][1]]: 'USD Coin',
  };

  return usedVaultsByName[token];
}

export function usedVaultsBySymbol(token: string): string {
  const usedVaultsBySymbol: Record<string, string> = {
    [availableVaultsPerChain[Chain.ARBITRUM_MAINNET][0]]: 'ETH',
    [availableVaultsPerChain[Chain.ARBITRUM_MAINNET][1]]: 'USDC',
  };

  return usedVaultsBySymbol[token];
}
