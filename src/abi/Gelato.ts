export const GelatoABI = [
  {
    inputs: [{ internalType: 'address', name: '_gelato', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sponsor',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'feeToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oneBalanceChainId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nativeToFeeTokenXRateNumerator',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nativeToFeeTokenXRateDenominator',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'correlationId',
        type: 'bytes32',
      },
    ],
    name: 'LogUseGelato1Balance',
    type: 'event',
  },
  {
    inputs: [],
    name: 'gelato',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'chainId', type: 'uint256' },
          { internalType: 'address', name: 'target', type: 'address' },
          { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        internalType: 'struct SponsoredCall',
        name: '_call',
        type: 'tuple',
      },
      { internalType: 'address', name: '_sponsor', type: 'address' },
      { internalType: 'address', name: '_feeToken', type: 'address' },
      { internalType: 'uint256', name: '_oneBalanceChainId', type: 'uint256' },
      {
        internalType: 'uint256',
        name: '_nativeToFeeTokenXRateNumerator',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_nativeToFeeTokenXRateDenominator',
        type: 'uint256',
      },
      { internalType: 'bytes32', name: '_correlationId', type: 'bytes32' },
    ],
    name: 'sponsoredCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
