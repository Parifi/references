export const priceIdTestnetBySymbol: Record<string, string> = {
  BTC: '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
  ETH: '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
  LINK: '0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221',
  USDC: '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a',
  ARB: '0x37f40d2898159e8f2e52b93cb78f47cc3829a31e525ab975c49cc5c5d9176378',
  MATIC: '0xd2c2c1f2bba8e0964f9589e060c2ee97f5e19057267ac3284caef3bd50bd2cb5',
};

// Creating the reverse mapping from priceIdBySymbol
export const symbolByPriceIdTesnet: Record<string, string> = Object.entries(
  priceIdTestnetBySymbol,
).reduce(
  (acc, [symbol, priceId]) => {
    acc[priceId] = symbol;
    return acc;
  },
  {} as Record<string, string>,
);
