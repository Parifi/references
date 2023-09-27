import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';
import { Collateral } from './collateral';
import { Chain } from './chain';

export type TypeOfMarket = 'crypto' | 'fiat' | 'stock' | 'commodity';
export type SymbolOfMarket = 'ETH' | 'BTC' | 'LINK' | 'ARB' | 'OP' | 'MATIC';
export type Market = { symbol: SymbolOfMarket; type: TypeOfMarket };

export const markets: Market[] = [
  { symbol: 'ETH', type: 'crypto' },
  { symbol: 'BTC', type: 'crypto' },
  { symbol: 'LINK', type: 'crypto' },
  { symbol: 'ARB', type: 'crypto' },
  { symbol: 'OP', type: 'crypto' },
  { symbol: 'MATIC', type: 'crypto' },
];

export const availableVaultsPerChain: Record<Chain, `0x${string}`[]> = {
  [Chain.ARBITRUM_GOERLI]: [
    '0x09C8BD4D33c3507c178A014a7d5d259E7371A99B', // ETH
    '0xb122073354C698652Bb72882E6310c649F6307F2', // USDC
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
};

export const availableMarketsByEncodedPerChain: Record<
  Chain,
  Record<string, string>
> = (Object.values(Chain).filter((c) => Number.isInteger(c)) as Chain[]).reduce(
  (acc, chain) => {
    acc[chain] = markets.reduce<Record<string, string>>((reverseMarkets, m) => {
      Object.values(Collateral).forEach((c) => {
        if (usedVaultsPerChain[chain][c]) {
          const encoded = keccak256(
            encodeAbiParameters(parseAbiParameters('string, address'), [
              `${m.symbol}-${c}`,
              usedVaultsPerChain[chain][c],
            ]),
          );

          reverseMarkets[encoded] = `${m.symbol}-${c}`;
        }
      });
      return reverseMarkets;
    }, {});

    return acc;
  },
  {} as Record<Chain, Record<string, string>>,
);
