import { MARKET_ID_BY_NAME, MARKET_NAME_BY_ID } from '../constants/markets';

import {
  PYTH_PRICE_ID_ARB,
  PYTH_PRICE_ID_BTC,
  PYTH_PRICE_ID_ETH,
  PYTH_PRICE_ID_EUR,
  PYTH_PRICE_ID_LINK,
  PYTH_PRICE_ID_POL,
  PYTH_PRICE_ID_SOL,
  PYTH_PRICE_ID_USDC,
  PYTH_PRICE_ID_XAU,
} from '../constants/pyth';

// Returns the Bytes32 Market ID for a market name
export const getMarketIdByName = (marketName: string): string | undefined => {
  return MARKET_ID_BY_NAME.get(marketName);
};

// Returns Market name from its Bytes32 Market ID
export const getMarketNameById = (marketId: string): string | undefined => {
  return MARKET_NAME_BY_ID.get(marketId);
};

// Returns the price id of a market by its market id
export const getPriceIdsByMarketId = (
  marketId: string,
): { marketPriceId: string | undefined; collateralPriceId: string | undefined } => {
  const marketName = getMarketNameById(marketId);
  if (marketName) {
    return getPriceIdsByMarketName(marketName);
  }
  return { marketPriceId: undefined, collateralPriceId: undefined };
};

// Returns the price id of a market by its name
export const getPriceIdsByMarketName = (
  marketName: string,
): { marketPriceId: string | undefined; collateralPriceId: string | undefined } => {
  try {
    if (marketName) {
      const [marketSymbol, collateralSymbol] = marketName.split('-');
      const marketPriceId = priceIdByToken[marketSymbol];
      const collateralPriceId = priceIdByToken[collateralSymbol];
      return { marketPriceId, collateralPriceId };
    }
  } catch (error) {
    console.log(error);
    return { marketPriceId: undefined, collateralPriceId: undefined };
  }
  return { marketPriceId: undefined, collateralPriceId: undefined };
};

export const priceIdByToken: { [key: string]: string } = {
  ETH: PYTH_PRICE_ID_ETH,
  BTC: PYTH_PRICE_ID_BTC,
  USDC: PYTH_PRICE_ID_USDC,
  LINK: PYTH_PRICE_ID_LINK,
  POL: PYTH_PRICE_ID_POL,
  SOL: PYTH_PRICE_ID_SOL,
  ARB: PYTH_PRICE_ID_ARB,
  XAU: PYTH_PRICE_ID_XAU,
  EUR: PYTH_PRICE_ID_EUR,
};

export const stablePriceIdBySymbol: Record<string, string> = {
  BTC: '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
  ETH: '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
  LINK: '0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221',
  USDC: '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a',
  ARB: '0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5',
  POL: '0xffd11c5a1cfd42f80afb2df4d9f264c15f956d68153335374ec10722edd70472',
  XAU: '0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2',
  XAG: '0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e',
  EUR: '0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b',
  GBP: '0x84c2dde9633d93d1bcad84e7dc41c9d56578b7ec52fabedc1f335d673df0a7c1',
  SOL: '0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
};

export const stableCollateralPriceIdBySymbol: Record<string, string> = {
  'ETH-USDC': stablePriceIdBySymbol.USDC,
  'BTC-ETH': stablePriceIdBySymbol.ETH,
};

export const symbolByStablePriceId: Record<string, string> = Object.entries(stablePriceIdBySymbol).reduce(
  (acc, [symbol, priceId]) => {
    acc[priceId] = symbol;
    return acc;
  },
  {} as Record<string, string>,
);
