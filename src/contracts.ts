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
} from './abi';

export type ContractName =
  | 'OrderManager'
  | 'PriceFeed'
  | 'DataFabric'
  | 'ParifiForwarder'
  | 'FeeManager'
  | 'ERC20'
  | 'Safe'
  | 'ParifiVault';

export const contracts = {
  [Chain.BASE]: {
    OrderManager: {
      address: '',
      abi: OrderManagerABI,
    },
    FeeManager: {
      address: '',
      abi: FeeManagerABI,
    },
    PriceFeed: {
      address: '',
      abi: PriceFeedABI,
    },
    DataFabric: {
      address: '',
      abi: DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    ParifiVault: {
      address: '',
      abi: ParifiVaultABI,
    },
    ParifiForwarder: {
      address: '',
      abi: ParifiForwarderABI,
    },
    Safe: {
      address: '',
      abi: GnosisSafeABI,
    },
  },
  [Chain.POLYGON]: {
    OrderManager: {
      address: '',
      abi: OrderManagerABI,
    },
    FeeManager: {
      address: '',
      abi: FeeManagerABI,
    },
    PriceFeed: {
      address: '',
      abi: PriceFeedABI,
    },
    DataFabric: {
      address: '',
      abi: DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    ParifiVault: {
      address: '',
      abi: ParifiVaultABI,
    },
    ParifiForwarder: {
      address: '',
      abi: ParifiForwarderABI,
    },
    Safe: {
      address: '',
      abi: GnosisSafeABI,
    },
  },
  [Chain.ARBITRUM]: {
    OrderManager: {
      address: '',
      abi: OrderManagerABI,
    },
    FeeManager: {
      address: '',
      abi: FeeManagerABI,
    },
    PriceFeed: {
      address: '',
      abi: PriceFeedABI,
    },
    DataFabric: {
      address: '',
      abi: DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    ParifiVault: {
      address: '',
      abi: ParifiVaultABI,
    },
    ParifiForwarder: {
      address: '',
      abi: ParifiForwarderABI,
    },
    Safe: {
      address: '',
      abi: GnosisSafeABI,
    },
  },
  [Chain.ARBITRUM_GOERLI]: {
    OrderManager: {
      address: '0xC29A1545A4077F5b05984030DC0057e8DcafFa1d',
      abi: OrderManagerABI,
    },
    FeeManager: {
      address: '0x183813Eb472dd78191bdfe7439343B85c32DB8bA',
      abi: FeeManagerABI,
    },
    PriceFeed: {
      address: '0x566127F91D4483D27aFd71bF4ad93aEEE3c31C62',
      abi: PriceFeedABI,
    },
    DataFabric: {
      address: '0x92c1f1204E6490d2780F258319B4140f47641f61',
      abi: DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    ParifiVault: {
      address: '',
      abi: ParifiVaultABI,
    },
    ParifiForwarder: {
      address: '0x9572B6E884f6D67c8F88a9Eb38eF8479Aa8765Ec',
      abi: ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
  },
};
