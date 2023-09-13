import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';
import { Collateral } from './collateral';

export const availableVaults: [`0x${string}`, `0x${string}`] = [
  '0x1D68895aD531352d21e57801cdB8D54ACCc4d3dF', // ETH
  '0x322E44Fe3Fe8e1EA9Cc46954292617B8045DD5AB', // USDC
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
