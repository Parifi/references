import { Chain } from './chain';
import { MarketVaultABI, OrderManagerABI, PriceFeedABI } from './abi';

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
    MarketVault: {
      address: '',
      abi: MarketVaultABI,
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
    MarketVault: {
      address: '',
      abi: MarketVaultABI,
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
    MarketVault: {
      address: '',
      abi: MarketVaultABI,
    },
  },
};
