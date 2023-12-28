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
  [Chain.BASE]: {
    Adapter: {
      address: '',
      abi: AdapterABI,
    },
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
    ParifiUtils: {
      address: '',
      abi: ParifiUtilsABI,
    },
    Gelato: {
      address: '',
      abi: GelatoABI,
    },
  },
  [Chain.POLYGON]: {
    Adapter: {
      address: '',
      abi: AdapterABI,
    },
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
    ParifiUtils: {
      address: '',
      abi: ParifiUtilsABI,
    },
    Gelato: {
      address: '',
      abi: GelatoABI,
    },
  },
  [Chain.ARBITRUM]: {
    Adapter: {
      address: '',
      abi: AdapterABI,
    },
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
    ParifiUtils: {
      address: '',
      abi: ParifiUtilsABI,
    },
    Gelato: {
      address: '',
      abi: GelatoABI,
    },
  },
  [Chain.ARBITRUM_GOERLI]: {
    Adapter: {
      address: '0x49FF367451e89119B99e6bc75D28Ea4Ac66b3151',
      abi: AdapterABI,
    },
    OrderManager: {
      address: '0x6B48f52c488cAb46cf75E67F2c4da91E25d8e618',
      abi: OrderManagerABI,
    },
    FeeManager: {
      address: '0x37dda66C9f0EBe4878523325e217fC7231d10330',
      abi: FeeManagerABI,
    },
    PriceFeed: {
      address: '0x27C605c3193468278c012DC7170B301af3255a6E',
      abi: PriceFeedABI,
    },
    DataFabric: {
      address: '0x713cDe490a831b353434cDf1eBE2176eb6cc35dB',
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
      address: '0xaBE0e74dc705D515bbE1edA1f54658a233adFc77',
      abi: ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
    ParifiUtils: {
      address: '0x1Cc3e818096b9CC1CDaF49c812C6A21f0A006F3f',
      abi: ParifiUtilsABI,
    },
    Gelato: {
      address: '0x75ba5af8effdcfca32e1e288806d54277d1fde99',
      abi: GelatoABI,
    },
  },
  [Chain.ARBITRUM_SEPOLIA]: {
    Adapter: {
      address: '0x49FF367451e89119B99e6bc75D28Ea4Ac66b3151',
      abi: ArbSepoliaContractsABI.AdapterABI,
    },
    OrderManager: {
      address: '0xE468bD89947496b92A2fb92DEB3E1bC3C6F24869',
      abi: ArbSepoliaContractsABI.OrderManagerABI,
    },
    FeeManager: {
      address: '0x1622e2D64048a12EC9b4DbDBdEe7524d86fceEC9',
      abi: ArbSepoliaContractsABI.FeeManagerABI,
    },
    PriceFeed: {
      address: '0x0d64A1369dcDAAaFa3E61aE7c965934D6a34D9BB',
      abi: ArbSepoliaContractsABI.PriceFeedABI,
    },
    DataFabric: {
      address: '0x85aE49c7509cf8044c3935E63A269B7C6701D928',
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
      address: '0x5217952316D60472a9772800eE75e9B9D77c0D3a',
      abi: ArbSepoliaContractsABI.ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
    ParifiUtils: {
      address: '0x05994855dfD9937A82b37001ADe08bEf67b06f44',
      abi: ArbSepoliaContractsABI.ParifiUtilsABI,
    },
    Gelato: {
      address: '0x75ba5af8effdcfca32e1e288806d54277d1fde99',
      abi: GelatoABI,
    },
  },
};
