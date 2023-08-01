import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';

export const usedMarkets = ['ETH', 'BTC', 'LINK'];

export const collateralDecimals: Record<string, number> = {
  ETH: 18,
  USDC: 6,
  BTC: 8,
  LINK: 18,
};

export const usedVaults: Record<string, `0x${string}`> = {
  ETH: '0x3768acf8deBE88EEB9C759839692d0d19Fe045Ec',
  USDC: '0x221606c90190b82979A4C1E69B4AC7B47621a8a2',
};

const reverseMarkets: Record<string, string> = {};

usedMarkets.forEach((m) => {
  ['ETH', 'USDC'].forEach((c) => {
    const encoded = keccak256(
      encodeAbiParameters(parseAbiParameters('string, address'), [
        `${m}-${c}`,
        usedVaults[c],
      ]),
    );

    reverseMarkets[encoded] = `${m}-${c}`;
  });
});

export const availableMarketsByEncoded = reverseMarkets;
