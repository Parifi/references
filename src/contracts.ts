import { Chain } from './chain';
import {
  ERC20ABI,
  GnosisSafeABI,
  GelatoABI,
  ArbSepoliaContractsABI,
} from './abi';

export type ContractName =
  | 'OrderManager'
  | 'PriceFeed'
  | 'DataFabric'
  | 'ParifiForwarder'
  | 'ParifiUtils'
  | 'FeeManager'
  | 'ERC20'
  | 'Safe'
  | 'Adapter'
  | 'ParifiVault'
  | 'Gelato';

export const contracts = {
  [Chain.ARBITRUM_SEPOLIA]: {
    Adapter: {
      address: '0x667f6ed17b0BF117b9158Bf9C44630E1D992f0f5',
      abi: ArbSepoliaContractsABI.AdapterABI,
    },
    OrderManager: {
      address: '0x3aEaeEDBF2AF79ABDeE45eDc4578fdA9252Dbc67',
      abi: ArbSepoliaContractsABI.OrderManagerABI,
    },
    FeeManager: {
      address: '0xafD8f81b31aEBf8Bf996b0259d96fe3695Fb2dA8',
      abi: ArbSepoliaContractsABI.FeeManagerABI,
    },
    PriceFeed: {
      address: '0x27dcc355C62930AB07093E0008C9CDE1411e539c',
      abi: ArbSepoliaContractsABI.PriceFeedABI,
    },
    DataFabric: {
      address: '0x9B930D5a232Ee2e8ECe0296e9c0E7Ff2C4653c54',
      abi: ArbSepoliaContractsABI.DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    ParifiVault: {
      address: '',
      abi: ArbSepoliaContractsABI.ParifiVaultABI,
    },
    ParifiForwarder: {
      address: '0xCc54bbcF97E7a4E4A5b14126faEBD0b5B5C8BD10',
      abi: ArbSepoliaContractsABI.ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
    ParifiUtils: {
      address: '0xa36f9652dF219A4a84668A1C6708a9e201D75446',
      abi: ArbSepoliaContractsABI.ParifiUtilsABI,
    },
    Gelato: {
      address: '0x75ba5af8effdcfca32e1e288806d54277d1fde99',
      abi: GelatoABI,
    },
    RBAC: {
      address: '0xff0478eC02415877669F4222BE9c48c23e8733BF',
      abi: ArbSepoliaContractsABI.RBACABI,
    }
  },
};
