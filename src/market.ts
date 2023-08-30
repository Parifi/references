import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';
import { Collateral } from './collateral';

export const availableVaults: [`0x${string}`, `0x${string}`] = [
  '0x5594E145DBA45A82F298d454b2947b38C5aF492C',
  '0x7e46557fC7E08838a7896dc1F075861D03F5a71C',
];

export const usedVaults: Record<string, `0x${string}`> = {
  ETH: availableVaults[0],
  USDC: availableVaults[1],
};

export function usedVaultsBySymbol(token?: string): string {
  const usedVaultsBySymbol: Record<string, string> = {
    [availableVaults[0]]: 'ETH',
    [availableVaults[1]]: 'USDC',
  };

  return token
    ? usedVaultsBySymbol[token]
    : usedVaultsBySymbol[availableVaults[0]];
}

export const collateralDecimals: Record<string, number> = {
  ETH: 18,
  USDC: 6,
  BTC: 8,
  LINK: 18,
};

export const availableMarketsByEncoded = ['ETH', 'BTC', 'LINK'].reduce<
  Record<string, string>
>((reverseMarkets, m) => {
  Object.values(Collateral).forEach((c) => {
    const encoded = keccak256(
      encodeAbiParameters(parseAbiParameters('string, address'), [
        `${m}-${c}`,
        usedVaults[c],
      ]),
    );

    reverseMarkets[encoded] = `${m}-${c}`;
  });

  return reverseMarkets;
}, {});
