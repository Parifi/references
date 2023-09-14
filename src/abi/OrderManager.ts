export const OrderManagerABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rbac',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_dataFabric',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_priceFeed',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_feeManager',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_trustedForwarder',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ExistingPosition',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InactiveMarket',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidCollateralAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidLimitOrder',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidOrderType',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPositionId',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'errorMsg',
        type: 'string',
      },
    ],
    name: 'InvalidRole',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSize',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTimestamp',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidUserAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LiquidationErrorNoLoss',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MaxFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OrderDoesNotExist',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OrderExpired',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'expected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'current',
        type: 'uint256',
      },
    ],
    name: 'OverLeveraged',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'expected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'current',
        type: 'uint256',
      },
    ],
    name: 'PriceMismatch',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'expected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'current',
        type: 'uint256',
      },
    ],
    name: 'PriceOutOfRange',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'ExecutionFeeReceived',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newFeeManager',
        type: 'address',
      },
    ],
    name: 'FeeManagerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'NewPositionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'balanceReceived',
        type: 'uint256',
      },
    ],
    name: 'OrderCancelled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
    ],
    name: 'OrderCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'executionPrice',
        type: 'uint256',
      },
    ],
    name: 'OrderSettled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'updatedFee',
        type: 'uint256',
      },
    ],
    name: 'PartnerFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'partnerAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'accruedFees',
        type: 'uint256',
      },
    ],
    name: 'PartnerFeesClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isProfit',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'realizedPnl',
        type: 'uint256',
      },
    ],
    name: 'PnlRealized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'balanceReceived',
        type: 'uint256',
      },
    ],
    name: 'PositionClosed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'balanceReceived',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'liquidationPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lossInCollateral',
        type: 'uint256',
      },
    ],
    name: 'PositionLiquidated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'collateralAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionSize',
        type: 'uint256',
      },
    ],
    name: 'PositionUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newPriceFeed',
        type: 'address',
      },
    ],
    name: 'PriceFeedUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'accumulatedPartnerFees',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_size',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_collateralAmount',
        type: 'uint256',
      },
      {
        internalType: 'enum OrderDS.OrderType',
        name: 'orderType',
        type: 'uint8',
      },
    ],
    name: 'calculateLeverage',
    outputs: [
      {
        internalType: 'uint256',
        name: 'leverage',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_size',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_collateralAmount',
        type: 'uint256',
      },
    ],
    name: 'calculateLeverage',
    outputs: [
      {
        internalType: 'uint256',
        name: 'leverage',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_orderId',
        type: 'bytes32',
      },
    ],
    name: 'cancelPendingOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partnerAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
    ],
    name: 'claimPartnerFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'marketId',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'enum OrderDS.OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'isLong',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isLimitOrder',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'triggerAbove',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'orderSize',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expectedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSlippage',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executionFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct OrderDS.Order',
        name: '_order',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'partner',
        type: 'address',
      },
    ],
    name: 'createNewPosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dataFabric',
    outputs: [
      {
        internalType: 'contract DataFabric',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionId',
        type: 'bytes32',
      },
    ],
    name: 'getAccruedBorrowFeesInMarket',
    outputs: [
      {
        internalType: 'uint256',
        name: 'accruedBorrowFees',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'getOrderIdForUser',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
    ],
    name: 'getPendingOrder',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'marketId',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'enum OrderDS.OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'isLong',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isLimitOrder',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'triggerAbove',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'orderSize',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expectedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSlippage',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executionFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct OrderDS.Order',
        name: 'orderDetails',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
    ],
    name: 'getPosition',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'marketId',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'isLong',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'positionSize',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'avgPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lastTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lastCumulativeFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct OrderDS.Position',
        name: 'positionData',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'getPositionIdForUser',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_executionPrice',
        type: 'uint256',
      },
    ],
    name: 'getProfitOrLossInCollateral',
    outputs: [
      {
        internalType: 'uint256',
        name: 'profitOrLoss',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isProfit',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'getProfitOrLossInUsd',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalProfitOrLoss',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isProfit',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_orderId',
        type: 'bytes32',
      },
    ],
    name: 'isPendingOrder',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'forwarder',
        type: 'address',
      },
    ],
    name: 'isTrustedForwarder',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_positionId',
        type: 'bytes32',
      },
    ],
    name: 'isValidPosition',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes[]',
        name: 'priceUpdateData',
        type: 'bytes[]',
      },
    ],
    name: 'liquidatePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'positionId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'marketId',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'enum OrderDS.OrderType',
            name: 'orderType',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'isLong',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isLimitOrder',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'triggerAbove',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'orderSize',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'expectedPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxSlippage',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'executionFee',
            type: 'uint256',
          },
        ],
        internalType: 'struct OrderDS.Order',
        name: '_order',
        type: 'tuple',
      },
    ],
    name: 'modifyPosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'orderNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'partnerFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'positionNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'priceFeed',
    outputs: [
      {
        internalType: 'contract IPriceFeed',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rbac',
    outputs: [
      {
        internalType: 'contract IRBAC',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_updatedFee',
        type: 'uint256',
      },
    ],
    name: 'setPartnerFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes[]',
        name: 'priceUpdateData',
        type: 'bytes[]',
      },
    ],
    name: 'settleOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newFeeManager',
        type: 'address',
      },
    ],
    name: 'updateFeeManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_priceFeed',
        type: 'address',
      },
    ],
    name: 'updatePriceFeed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
