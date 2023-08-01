export enum OrderEvents {
  ORDER_CANCELLED = 'OrderCancelled',
  ORDER_CREATED = 'OrderCreated',
  ORDER_SETTLED = 'OrderSettled',
}

export enum PriceFeedEnum {
  UPDATE_PYTH_PRICE = 'updatePythPrice',
}

export enum PositionEvents {
  NEW_POSITION_CREATED = 'NewPositionCreated',
  POSITION_CLOSED = 'PositionClosed',
  POSITION_LIQUIDATED = 'PositionLiquidated',
  POSITION_UPDATED = 'PositionUpdated',
}

export enum MarketEvents {
  MARKET_ADDED = 'MarketAdded',
  MARKET_UPDATED = 'MarketUpdated',
  MARKET_TOGGLED = 'MarketStatusToggled',
  PARTNER_FEE_DEPOSITED = 'PartnerFeeDeposited',
  PARTNER_FEE_UPDATED = 'PartnerFeeUpdated',
  CUMULATIVE_FEE_UPDATED = 'CumulativeFeeUpdated',
}
