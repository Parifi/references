export const DataFabricABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rbac',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'CloseOnlyMode',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidMarketId',
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
    name: 'InvalidToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidValue',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidVaultAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MarketIsActive',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MaxFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MaxOI',
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
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'BaseCoeffUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'BaseConstUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'baseCoeff',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'baseConst',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'dynamicCoeff',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxDynamicBorrowFee',
        type: 'uint256',
      },
    ],
    name: 'BorrowingCurveUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    name: 'CloseOnlyModeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'baseFeeCumulative',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'dynamicLongFeeCumulative',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'dynamicShortFeeCumulative',
        type: 'uint256',
      },
    ],
    name: 'CumulativeFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'DeviationCoeffUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'DeviationConstUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'DynamicCoeffUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deviationCoeff',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deviationConst',
        type: 'uint256',
      },
    ],
    name: 'LiquidityCurveUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'MarketAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'MarketPaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'MarketUnpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'MarketUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'MaxDynamicBorrowFeeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newValue',
        type: 'uint256',
      },
    ],
    name: 'MaxOiUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newOrderManager',
        type: 'address',
      },
    ],
    name: 'OrderManagerUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'vaultAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'depositToken',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'isLive',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'liquidationThreshold',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minCollateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLeverage',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'openingFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closingFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liquidationFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'allowedPriceDeviation',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxPriceDeviation',
            type: 'uint256',
          },
        ],
        internalType: 'struct OrderDS.Market',
        name: '_newMarket',
        type: 'tuple',
      },
    ],
    name: 'addNewMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'closeOnlyMode',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getBaseBorrowRatePerSecond',
    outputs: [
      {
        internalType: 'uint256',
        name: 'baseBorrowRate',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getBorrowingCurveConfig',
    outputs: [
      {
        internalType: 'uint256',
        name: 'baseCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'baseConst',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dynamicCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxDynamicBorrowFee',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getCumulativeFeesComponents',
    outputs: [
      {
        internalType: 'uint256',
        name: 'baseFeeCumulative',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dynamicLongFeeCumulative',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dynamicShortFeeCumulative',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeLastUpdatedTimestamp',
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
        name: 'marketId',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'isLong',
        type: 'bool',
      },
    ],
    name: 'getCurrentFeeCumulative',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currentFeeCumulative',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getDepositToken',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getDynamicBorrowRatePerSecond',
    outputs: [
      {
        internalType: 'uint256',
        name: 'dynamicBorrowRate',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getLiquidityCurveConfig',
    outputs: [
      {
        internalType: 'uint256',
        name: 'deviationCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deviationConst',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getMarket',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'vaultAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'depositToken',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'isLive',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'liquidationThreshold',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minCollateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLeverage',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'openingFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closingFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liquidationFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'allowedPriceDeviation',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxPriceDeviation',
            type: 'uint256',
          },
        ],
        internalType: 'struct OrderDS.Market',
        name: 'marketDetails',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getMarketConfig',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'maximumOi',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalLongs',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalShorts',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'feeLastUpdatedTimestamp',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'baseCoeff',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'baseConst',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'baseFeeCumulative',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dynamicCoeff',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxDynamicBorrowFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dynamicLongFeeCumulative',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'dynamicShortFeeCumulative',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deviationCoeff',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'deviationConst',
            type: 'uint256',
          },
        ],
        internalType: 'struct DataFabric.MarketConfig',
        name: 'config',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getMarketData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'total_longs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'total_shorts',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getMarketSkew',
    outputs: [
      {
        internalType: 'uint256',
        name: 'skew',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getMarketStatus',
    outputs: [
      {
        internalType: 'bool',
        name: 'isMarketLive',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getMarketUtilization',
    outputs: [
      {
        internalType: 'uint256',
        name: 'utilization',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getMaxLeverageForMarket',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getPriceDeviation',
    outputs: [
      {
        internalType: 'uint256',
        name: 'deviationPoints',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getTotalMaximumOi',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxOiLongs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxOiShorts',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalMaximumOi',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'getVaultAddressForMarket',
    outputs: [
      {
        internalType: 'address',
        name: 'vaultAddress',
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
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'marketConfig',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maximumOi',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalLongs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalShorts',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'feeLastUpdatedTimestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'baseCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'baseConst',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'baseFeeCumulative',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dynamicCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxDynamicBorrowFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dynamicLongFeeCumulative',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dynamicShortFeeCumulative',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deviationCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deviationConst',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'orderManager',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'pauseMarket',
    outputs: [],
    stateMutability: 'nonpayable',
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
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_baseCoeff',
        type: 'uint256',
      },
    ],
    name: 'setBaseCoeff',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_baseConst',
        type: 'uint256',
      },
    ],
    name: 'setBaseConst',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_baseCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_baseConst',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_dynamicCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxDynamicBorrowFee',
        type: 'uint256',
      },
    ],
    name: 'setBorrowingCurveConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    name: 'setCloseOnlyMode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_deviationCoeff',
        type: 'uint256',
      },
    ],
    name: 'setDeviationCoeff',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_deviationConst',
        type: 'uint256',
      },
    ],
    name: 'setDeviationConst',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_dynamicCoeff',
        type: 'uint256',
      },
    ],
    name: 'setDynamicCoeff',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_deviationCoeff',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_deviationConst',
        type: 'uint256',
      },
    ],
    name: 'setLiquidityCurveConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_maxDynamicBorrowFee',
        type: 'uint256',
      },
    ],
    name: 'setMaximumDynamicBorrowFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'maxOi',
        type: 'uint256',
      },
    ],
    name: 'setMaximumOi',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_orderManager',
        type: 'address',
      },
    ],
    name: 'setOrderManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'totalLongs',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'totalShorts',
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
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'unpauseMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
    ],
    name: 'updateCumulativeFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_marketId',
        type: 'bytes32',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'vaultAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'depositToken',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'isLive',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'liquidationThreshold',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minCollateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxLeverage',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'openingFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'closingFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liquidationFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'allowedPriceDeviation',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxPriceDeviation',
            type: 'uint256',
          },
        ],
        internalType: 'struct OrderDS.Market',
        name: '_updatedMarket',
        type: 'tuple',
      },
    ],
    name: 'updateExistingMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'marketId',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'size',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isLong',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'isIncrease',
        type: 'bool',
      },
    ],
    name: 'updateMarketData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
