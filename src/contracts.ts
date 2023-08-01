import { Chain } from './chain';
import {
  MarketVaultABI,
  OrderManagerABI,
  PriceFeedABI,
  ERC20ABI,
  GnosisSafeABI,
  ParifiForwarderABI,
  DataFabricABI,
} from './abi';

export type ContractName =
  | 'OrderManager'
  | 'PriceFeed'
  | 'ParifiForwarder'
  | 'ERC20'
  | 'Safe'
  | 'MarketVault';

export const contracts = {
  [Chain.POLYGON]: {
    OrderManager: {
      address: '',
      abi: OrderManagerABI,
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
    MarketVault: {
      address: '',
      abi: MarketVaultABI,
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
    MarketVault: {
      address: '',
      abi: MarketVaultABI,
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
      address: '0x034C3eA6dD9361f335980E841BC39964f4c03A8F',
      abi: OrderManagerABI,
    },
    PriceFeed: {
      address: '0x385fa322735E40Ce6780148E7E318702596A1eb3',
      abi: PriceFeedABI,
    },
    DataFabric: {
      address: '0xC2e2dB44532EfbCBDB02A097eAf5F06B97aeBb54',
      abi: DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    MarketVault: {
      address: '',
      abi: MarketVaultABI,
    },
    ParifiForwarder: {
      address: '0xccF03eEd16e4195c341c4D1A9c4AE9f5E6552739',
      abi: ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
  },
};
