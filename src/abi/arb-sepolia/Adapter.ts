export const AdapterABI =  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_orderManager",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_dataFabric",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_priceFeed",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "marketId",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "deltaSize",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deltaCollateral",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "feesInCollateral",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "marketPrice",
        "type": "uint256"
      },
      {
        "internalType": "enum OrderDS.OrderType",
        "name": "orderType",
        "type": "uint8"
      }
    ],
    "name": "calculateLeverage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "leverage",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dataFabric",
    "outputs": [
      {
        "internalType": "contract IDataFabric",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "currentPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deltaSize",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "marketId",
        "type": "bytes32"
      },
      {
        "internalType": "bool",
        "name": "isLong",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isIncrease",
        "type": "bool"
      }
    ],
    "name": "getAvgPriceWithDeviation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "updatedPrice",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "executionPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fee",
        "type": "uint256"
      }
    ],
    "name": "getClosingNetPNLInUsd",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "netProfitOrLossUsd",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pnlInUsd",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "feeInUsd",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "accruedBorrowFeesUsd",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isNetProfit",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "executionPrice",
        "type": "uint256"
      }
    ],
    "name": "getLiquidationNetPNLInCollateral",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "netProfitOrLoss",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isNetProfit",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "canLiquidate",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "size",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fee",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "executionPrice",
        "type": "uint256"
      },
      {
        "internalType": "enum OrderDS.OrderType",
        "name": "orderType",
        "type": "uint8"
      }
    ],
    "name": "getNetPNLInCollateral",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "netProfitOrLoss",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isNetProfit",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "positionId",
        "type": "bytes32"
      }
    ],
    "name": "getPositionAccruedBorrowFees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "accruedBorrowFees",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "currentPrice",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "marketId",
        "type": "bytes32"
      },
      {
        "internalType": "bool",
        "name": "isLong",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isIncrease",
        "type": "bool"
      }
    ],
    "name": "getPriceWithDeviation",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "updatedPrice",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "positionId",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "executionPrice",
        "type": "uint256"
      }
    ],
    "name": "getProfitOrLossInCollateral",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "profitOrLoss",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isProfit",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "orderManager",
    "outputs": [
      {
        "internalType": "contract IOrderManager",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "priceFeed",
    "outputs": [
      {
        "internalType": "contract IPriceFeed",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
