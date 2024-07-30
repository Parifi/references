// Types/Structs from the OrderManager.sol contractI

export enum Collateral {
  USDC = 'USDC',
  ETH = 'ETH',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  SETTLED = 'SETTLED',
  EXPIRED = 'EXPIRED',
}

export enum OrderType {
  OPEN_NEW_POSITION = 'OPEN_NEW_POSITION',
  CLOSE_POSITION = 'CLOSE_POSITION',
  INCREASE_POSITION = 'INCREASE_POSITION',
  DECREASE_POSITION = 'DECREASE_POSITION',
  CANCEL_ORDER = 'CANCEL_ORDER',
}

export enum PositionStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  LIQUIDATED = 'LIQUIDATED',
}
