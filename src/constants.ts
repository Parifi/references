import { Chain } from './chain';

export type TypeOfMarket = 'crypto' | 'forex' | 'stock' | 'commodity';
export type SymbolOfMarket =
  | 'ETH'
  | 'BTC'
  | 'LINK'
  | 'ARB'
  | 'OP'
  | 'MATIC'
  | 'XAU'
  | 'XAG'
  | 'EUR'
  | 'GBP';
export type Market = {
  symbol: SymbolOfMarket;
  type: TypeOfMarket;
  name: string;
};

export const markets: Market[] = [
  { symbol: 'ETH', type: 'crypto', name: 'Ethereum' },
  { symbol: 'BTC', type: 'crypto', name: 'Bitcoin' },
  { symbol: 'LINK', type: 'crypto', name: 'Chainlink' },
  { symbol: 'ARB', type: 'crypto', name: 'Arbitrum' },
  { symbol: 'OP', type: 'crypto', name: 'Optimism' },
  { symbol: 'MATIC', type: 'crypto', name: 'Polygon' },
  { symbol: 'XAU', type: 'commodity', name: 'Gold' },
  { symbol: 'XAG', type: 'commodity', name: 'Silver' },
  { symbol: 'EUR', type: 'forex', name: 'Euro' },
  { symbol: 'GBP', type: 'forex', name: 'Sterling Pound' },
];

export const availableVaultsPerChain: Record<Chain, `0x${string}`[]> = {
  [Chain.ARBITRUM_GOERLI]: [
    '0x1419BBE238940d5E18f36b66deC76F417aACA327', // ETH
    '0xFc8110A4c44005869662310260569c19401FA1f2', // USDC
  ],
  [Chain.POLYGON]: [],
  [Chain.ARBITRUM]: [],
  [Chain.BASE]: [],
};

export const usedVaultsPerChain: Record<
  Chain,
  Record<string, `0x${string}`>
> = {
  [Chain.ARBITRUM_GOERLI]: {
    ETH: availableVaultsPerChain[Chain.ARBITRUM_GOERLI][0],
    USDC: availableVaultsPerChain[Chain.ARBITRUM_GOERLI][1],
  },
  [Chain.POLYGON]: {},
  [Chain.ARBITRUM]: {},
  [Chain.BASE]: {},
};

export function usedVaultsByName(token: string): string {
  const usedVaultsByName: Record<string, string> = {
    [availableVaultsPerChain[Chain.ARBITRUM_GOERLI][0]]: 'Ethereum',
    [availableVaultsPerChain[Chain.ARBITRUM_GOERLI][1]]: 'USD Coin',
  };

  return usedVaultsByName[token];
}

export function usedVaultsBySymbol(token: string): string {
  const usedVaultsBySymbol: Record<string, string> = {
    [availableVaultsPerChain[Chain.ARBITRUM_GOERLI][0]]: 'ETH',
    [availableVaultsPerChain[Chain.ARBITRUM_GOERLI][1]]: 'USDC',
  };

  return usedVaultsBySymbol[token];
}

export const suggestedDecimals: Record<string, number> = {
  ETH: 2,
  BTC: 2,
  LINK: 4,
  ARB: 4,
  MATIC: 4,
};

export const collateralDecimals: Record<string, number> = {
  ETH: 18,
  USDC: 6,
  BTC: 8,
  LINK: 18,
  ARB: 18,
  MATIC: 18,
  XAU: 18,
  XAG: 18,
  EUR: 18,
  GBP: 18,
};
