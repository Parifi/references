import './constants';
import {
  MARKET_ID_BY_NAME,
  MARKET_NAME_BY_ID,
  PYTH_PRICE_ID_ARB,
  PYTH_PRICE_ID_BTC,
  PYTH_PRICE_ID_ETH,
  PYTH_PRICE_ID_EUR,
  PYTH_PRICE_ID_LINK,
  PYTH_PRICE_ID_MATIC,
  PYTH_PRICE_ID_SOL,
  PYTH_PRICE_ID_USDC,
  PYTH_PRICE_ID_XAU,
} from './constants';

// Returns the Bytes32 Market ID for a market name
export const getMarketIdByName = (marketName: string): string | undefined => {
  return MARKET_ID_BY_NAME.get(marketName);
};

// Returns Market name from its Bytes32 Market ID
export const getMarketNameById = (marketId: string): string | undefined => {
  return MARKET_NAME_BY_ID.get(marketId);
};

export const getPriceIdsByMarketId = (
  marketId: string,
): { marketPriceId: string | undefined; collateralPriceId: string | undefined } => {
  const marketName = getMarketNameById(marketId);
  if (marketName) {
    return getPriceIdsByMarketName(marketName);
  }
  return { marketPriceId: undefined, collateralPriceId: undefined };
};

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
  MATIC: PYTH_PRICE_ID_MATIC,
  SOL: PYTH_PRICE_ID_SOL,
  ARB: PYTH_PRICE_ID_ARB,
  XAU: PYTH_PRICE_ID_XAU,
  EUR: PYTH_PRICE_ID_EUR,
};
