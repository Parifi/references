import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';
import { Collateral } from './collateral';

export const availableVaults: [`0x${string}`, `0x${string}`] = [
  '0xbF22033F38f0Db8f795D171fff80af579dbebe8E', // ETH
  '0x1c3945807C84210bCBD04eC0D090D9bDcEA3506a', // USDC
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
  ARB: 18,
  MATIC: 18,
};

export const availableMarketsByEncoded = [
  'ETH',
  'BTC',
  'LINK',
  'ARB',
  'OP',
  'MATIC',
].reduce<Record<string, string>>((reverseMarkets, m) => {
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
