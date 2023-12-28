export const ParifiForwarderABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_rbac",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_nativeToken",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_version",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "InsufficientGas",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidGasPrice",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidNonce",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "errorMsg",
        "type": "string"
      }
    ],
    "name": "InvalidRole",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidShortString",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidSignature",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidToAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTxValue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OrderExpired",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "str",
        "type": "string"
      }
    ],
    "name": "StringTooLong",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "updatedStatus",
        "type": "bool"
      }
    ],
    "name": "ApprovedTokenStatusUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "EIP712DomainChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newGasPremium",
        "type": "uint256"
      }
    ],
    "name": "GasPremiumUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "msgSender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "collateralToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gasCost",
        "type": "uint256"
      }
    ],
    "name": "MetaTxFeeCharged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_newMetaTxFeeReceiver",
        "type": "address"
      }
    ],
    "name": "MetaTxFeeReceiverUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newPriceFeed",
        "type": "address"
      }
    ],
    "name": "PriceFeedUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_marketVault",
        "type": "address"
      }
    ],
    "name": "addVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "approvedTokens",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eip712Domain",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "fields",
        "type": "bytes1"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "chainId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "verifyingContract",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "uint256[]",
        "name": "extensions",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "fromAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "toAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "txValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minGas",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxGasPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "userNonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "txDeadline",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "txData",
            "type": "bytes"
          }
        ],
        "internalType": "struct ParifiForwarder.Transaction",
        "name": "transaction",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "feeToken",
        "type": "address"
      }
    ],
    "name": "execute",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gasPremium",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "getNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
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
        "name": "structHash",
        "type": "bytes32"
      }
    ],
    "name": "hashTypedDataV4",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "metaTxFeeReceiver",
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
    "name": "nativeToken",
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
    "name": "orderManager",
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
    "name": "rbac",
    "outputs": [
      {
        "internalType": "contract IRBAC",
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
        "internalType": "address",
        "name": "_marketVault",
        "type": "address"
      }
    ],
    "name": "removeVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newGasPremium",
        "type": "uint256"
      }
    ],
    "name": "setGasPremium",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_orderManager",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_marketVault",
        "type": "address"
      }
    ],
    "name": "setReceiverContracts",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "_status",
        "type": "bool"
      }
    ],
    "name": "updateApprovedToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newFeeReceiver",
        "type": "address"
      }
    ],
    "name": "updateMetaTxFeeReceiver",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_priceFeed",
        "type": "address"
      }
    ],
    "name": "updatePriceFeed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "vaultsAllowed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "fromAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "toAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "txValue",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minGas",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxGasPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "userNonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "txDeadline",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "txData",
            "type": "bytes"
          }
        ],
        "internalType": "struct ParifiForwarder.Transaction",
        "name": "transaction",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "verify",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
