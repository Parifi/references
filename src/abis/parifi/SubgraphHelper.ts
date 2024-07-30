export const SubgraphHelperABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'orderIds',
        type: 'bytes32[]',
      },
    ],
    name: 'OrderUpdateRequest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'positionIds',
        type: 'bytes32[]',
      },
    ],
    name: 'PositionUpdateRequest',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'orderIds',
        type: 'bytes32[]',
      },
    ],
    name: 'triggerOrderUpdate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'positionIds',
        type: 'bytes32[]',
      },
    ],
    name: 'triggerPositionUpdate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
