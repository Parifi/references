// Deployed Market Ids
export const MARKET_ID_SOL_USDC = '0x28666630a970d8dbae0b9d20f6cb64b97e64544e34b488a36fb954f557dd49fe';
export const MARKET_ID_SOL_ETH = '0x0a821cf0ad5d267a74900088065b4554dd5280601249073156d5e9da737c12d1';

export const MARKET_ID_ARB_USDC = '0xf63f626292d98285e952d1d5d7a0b60bcdeed7c26fe0083cf8c1243e3466b4cd';
export const MARKET_ID_ARB_ETH = '0xe33d34b772e09eed4d2a620ab1885c3b662d1d4a9f48a82d7c2444e2c801413c';

export const MARKET_ID_XAU_USDC = '0xb5d3d6c294f7d8154ceb8dd27ae368dc08afb83e381816e4da55be1b6146a9b7';
export const MARKET_ID_XAU_ETH = '0x4e9d1375889dfd15cd0c2924a0d8693200ac56bd8dc75b68af8a40359a501aae';

export const MARKET_ID_EUR_USDC = '0x4d807dd6125c523954e347a2195350b1f6f66d042ce3f1977b35937dc76d55b8';
export const MARKET_ID_EUR_ETH = '0x2ece90b31f9784e9c150afb8761583f3b1324c1bac55cc4053e27e97e1392b09';

export const MARKET_ID_ETH_USDC = '0x89bcc03c0c1cd8b7b672186d1473047b4ed88411558c3a6b653b97104e239c50';
export const MARKET_ID_ETH_ETH = '0xaa259b3d0bd21d15497e10cce86f56009c202018048b65510ea79e85ce90ade6';

export const MARKET_ID_BTC_USDC = '0x038a9b1e59820ac534c3d409faf6ac7f43f7462ea26cec67f7fac0bb37628e87';
export const MARKET_ID_BTC_ETH = '0x163959ee3c7c7d786d9f24440475143f88c9169206a62f1661c6083c135f7eb9';

export const MARKET_ID_LINK_USDC = '0x238bd50821e428cbab036d2b01ba7a4c61d1afa91d2e7178bd7810ea73e9d5fd';
export const MARKET_ID_LINK_ETH = '0xc418deb78abe042abf117f1217b5f7955a532c57ebc5e9d419aaa77301c67e4c';

let MARKET_ID_BY_NAME = new Map<string, string>();
let MARKET_NAME_BY_ID = new Map<string, string>();

/////////////////////////////////////////////
//              MARKET_ID_BY_NAME
/////////////////////////////////////////////
MARKET_ID_BY_NAME.set('SOL-USDC', MARKET_ID_SOL_USDC);
MARKET_ID_BY_NAME.set('SOL-ETH', MARKET_ID_SOL_ETH);
MARKET_ID_BY_NAME.set('ARB-USDC', MARKET_ID_ARB_USDC);
MARKET_ID_BY_NAME.set('ARB-ETH', MARKET_ID_ARB_ETH);
MARKET_ID_BY_NAME.set('XAU-USDC', MARKET_ID_XAU_USDC);
MARKET_ID_BY_NAME.set('XAU-ETH', MARKET_ID_XAU_ETH);
MARKET_ID_BY_NAME.set('EUR-USDC', MARKET_ID_EUR_USDC);
MARKET_ID_BY_NAME.set('EUR-ETH', MARKET_ID_EUR_ETH);
MARKET_ID_BY_NAME.set('ETH-USDC', MARKET_ID_ETH_USDC);
MARKET_ID_BY_NAME.set('ETH-ETH', MARKET_ID_ETH_ETH);
MARKET_ID_BY_NAME.set('BTC-USDC', MARKET_ID_BTC_USDC);
MARKET_ID_BY_NAME.set('BTC-ETH', MARKET_ID_BTC_ETH);
MARKET_ID_BY_NAME.set('LINK-USDC', MARKET_ID_LINK_USDC);
MARKET_ID_BY_NAME.set('LINK-ETH', MARKET_ID_LINK_ETH);

/////////////////////////////////////////////
//              MARKET_NAME_BY_ID
/////////////////////////////////////////////
MARKET_NAME_BY_ID.set(MARKET_ID_SOL_USDC, 'SOL-USDC');
MARKET_NAME_BY_ID.set(MARKET_ID_SOL_ETH, 'SOL-ETH');
MARKET_NAME_BY_ID.set(MARKET_ID_ARB_USDC, 'ARB-USDC');
MARKET_NAME_BY_ID.set(MARKET_ID_ARB_ETH, 'ARB-ETH');
MARKET_NAME_BY_ID.set(MARKET_ID_XAU_USDC, 'XAU-USDC');
MARKET_NAME_BY_ID.set(MARKET_ID_XAU_ETH, 'XAU-ETH');
MARKET_NAME_BY_ID.set(MARKET_ID_EUR_USDC, 'EUR-USDC');
MARKET_NAME_BY_ID.set(MARKET_ID_EUR_ETH, 'EUR-ETH');
MARKET_NAME_BY_ID.set(MARKET_ID_ETH_USDC, 'ETH-USDC');
MARKET_NAME_BY_ID.set(MARKET_ID_ETH_ETH, 'ETH-ETH');
MARKET_NAME_BY_ID.set(MARKET_ID_BTC_USDC, 'BTC-USDC');
MARKET_NAME_BY_ID.set(MARKET_ID_BTC_ETH, 'BTC-ETH');
MARKET_NAME_BY_ID.set(MARKET_ID_LINK_USDC, 'LINK-USDC');
MARKET_NAME_BY_ID.set(MARKET_ID_LINK_ETH, 'LINK-ETH');

export { MARKET_ID_BY_NAME, MARKET_NAME_BY_ID };

// Used to identify the type of market
export type TypeOfMarket = 'crypto' | 'forex' | 'stock' | 'commodity';

export type SymbolOfMarket = 'ETH' | 'BTC' | 'LINK' | 'ARB' | 'OP' | 'POL' | 'XAU' | 'XAG' | 'EUR' | 'SOL' | 'GBP';

export type MarketInfo = {
  symbol: SymbolOfMarket;
  type: TypeOfMarket;
  name: string;
};

// Relevant information for display on the interface
export const marketInfos: MarketInfo[] = [
  { symbol: 'ETH', type: 'crypto', name: 'Ethereum' },
  { symbol: 'BTC', type: 'crypto', name: 'Bitcoin' },
  { symbol: 'LINK', type: 'crypto', name: 'Chainlink' },
  { symbol: 'ARB', type: 'crypto', name: 'Arbitrum' },
  { symbol: 'OP', type: 'crypto', name: 'Optimism' },
  { symbol: 'POL', type: 'crypto', name: 'Polygon' },
  { symbol: 'SOL', type: 'crypto', name: 'Solana' },
  { symbol: 'XAU', type: 'commodity', name: 'Gold' },
  { symbol: 'XAG', type: 'commodity', name: 'Silver' },
  { symbol: 'EUR', type: 'forex', name: 'Euro' },
  { symbol: 'GBP', type: 'forex', name: 'Sterling Pound' },
];

// Price Precision (Number of decimal digits to format) to display the values on interface
// For example, for ETH prices, we use 2 digits of precision i.e $3500.26
// while for EUR we use 4 digits of precision i.e $1.0481
export const pricePrecision: Record<string, number> = {
  ETH: 2,
  BTC: 2,
  LINK: 4,
  ARB: 4,
  POL: 4,
  EUR: 4,
  GBP: 4,
  SOL: 2,
};

// Number of decimal digits for collaterals for formatting values
export const collateralDecimals: Record<string, number> = {
  ETH: 18,
  USDC: 6,
  BTC: 8,
  LINK: 18,
  ARB: 18,
  POL: 18,
  XAU: 18,
  XAG: 18,
  EUR: 8,
  GBP: 8,
  SOL: 9,
};
