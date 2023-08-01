import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';
import { usedVaults } from '.';

export const collateralDecimals: Record<string, number> = {
  ETH: 18,
  USDC: 6,
  BTC: 8,
  LINK: 18,
};

export const availableMarketsByEncoded = ['ETH', 'BTC', 'LINK'].reduce<
  Record<string, string>
>((reverseMarkets, m) => {
  ['ETH', 'USDC'].forEach((c) => {
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
