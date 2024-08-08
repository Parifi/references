export enum NotificationType {
  ADD_LIQUIDITY = 'add-liquidity',
  REMOVE_LIQUIDITY = 'remove-liquidity',
  MARKET_ORDER = 'market-order',
  LIMIT_ORDER = 'limit-order',
  STOP_LOSS_ORDER = 'stop-loss-order',
  TAKE_PROFIT_ORDER = 'take-profit-order',
  STOP_LOSS_LIMIT_ORDER = 'stop-loss-limit-order',
  TAKE_PROFIT_LIMIT_ORDER = 'take-profit-limit-order',
  CANCEL_ORDER = 'cancel-order',
  SETTLED_ORDER = 'settled-order',
  OPEN_POSITION = 'open-position',
  CLOSE_POSITION = 'close-position',
  UPDATE_POSITION = 'update-position',
  LIQUIDATE_POSITION = 'liquidate-position',
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  KYC_APPROVED = 'kyc-approved',
  KYC_REJECTED = 'kyc-rejected',
  ACTIVATE_COOLDOWN = 'activate-cooldown',

  // === staking
  STAKE = 'stake',
  UNSTAKE = 'unstake',
  CLAIM = 'claim',
  VEST = 'vest',
  USER_PAYMENT_PROCESSED = 'user-payment-processed',
  // === swap
  SWAP = 'swap',
}
