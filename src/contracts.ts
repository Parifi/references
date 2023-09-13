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
      address: '0xB9BF9f143F421de440920930cd0af096B522Bf41',
      abi: OrderManagerABI,
    },
    FeeManager: {
      address: '0xa10f2CF95caFc35579595FfC8b0E5cCfEA1fa4c0',
      abi: FeeManagerABI,
    },
    PriceFeed: {
      address: '0x7921BEC3eD0BcAee19c46fCDfbB70c6a8fF66BcA',
      abi: PriceFeedABI,
    },
    DataFabric: {
      address: '0xaEcF4e500193B69A18d0F7Ab0634c265962b4B77',
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
      address: '0x2a30ce9d7E7ffAc9ae58756cecCB41ae34aa3a8c',
      abi: ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
  },
};
