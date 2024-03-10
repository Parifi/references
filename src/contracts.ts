import { Chain } from './chain';
import {
  ParifiVaultABI,
  OrderManagerABI,
  PriceFeedABI,
  ERC20ABI,
  GnosisSafeABI,
  ParifiForwarderABI,
  DataFabricABI,
  FeeManagerABI,
  AdapterABI,
  GelatoABI,
  ParifiUtilsABI,
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
      address: '0x49FF367451e89119B99e6bc75D28Ea4Ac66b3151',
      abi: ArbSepoliaContractsABI.AdapterABI,
    },
    OrderManager: {
      address: '0xf7f16027eFfA5e1eD5cff057bbd275cB04017691',
      abi: ArbSepoliaContractsABI.OrderManagerABI,
    },
    FeeManager: {
      address: '0x2b75b5Ec89DdC66780AC33fE327652518550D108',
      abi: ArbSepoliaContractsABI.FeeManagerABI,
    },
    PriceFeed: {
      address: '0x34C6bE80202E3f029f75E6704df25FC59998cD51',
      abi: ArbSepoliaContractsABI.PriceFeedABI,
    },
    DataFabric: {
      address: '0x975412a9FAe9bb3B4BF0BEee5e069c8c4Ab1AA9c',
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
      address: '0x81315F4465AD21FCc8A5B892224adD12c094bE21',
      abi: ArbSepoliaContractsABI.ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
    ParifiUtils: {
      address: '0xcb3Ca86B5ec0005840F66A2d633a8C9C0Aa745D4',
      abi: ArbSepoliaContractsABI.ParifiUtilsABI,
    },
    Gelato: {
      address: '0x75ba5af8effdcfca32e1e288806d54277d1fde99',
      abi: GelatoABI,
    },
  },
};
