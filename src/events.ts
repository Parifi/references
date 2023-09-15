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
  PNL_REALIZED = 'PnlRealized',
}

export enum FeeEvents {
  FEES_DISTRIBUTED = 'FeesDistributed',
  FEE_DISTRIBUTION_UPDATED = 'FeeDistributionUpdated',
  LP_FEE_RECEIVER_UPDATED = 'LpFeeReceiverUpdated',
  PROTOCOL_FEE_RECEIVER_UPDATED = 'ProtocolFeeReceiverUpdated',
  TOKEN_CHUNK_SIZE_UPDATED = 'TokenChunkSizeUpdated',
}

export enum MarketEvents {
  MARKET_ADDED = 'MarketAdded',
  MARKET_UPDATED = 'MarketUpdated',
  MARKET_PAUSED = 'MarketPaused',
  MARKET_UNPAUSED = 'MarketUnpaused',
  MAX_OI_UPDATED = 'MaxOiUpdated',
  PARTNER_FEE_DEPOSITED = 'PartnerFeeDeposited',
  PARTNER_FEE_UPDATED = 'PartnerFeeUpdated',
  CUMULATIVE_FEE_UPDATED = 'CumulativeFeeUpdated',
}
