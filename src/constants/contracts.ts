import * as abi from '../abis';
import { Chain } from '../types';

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
  [Chain.ARBITRUM_MAINNET]: {
    Adapter: {
      address: '0x548a5a19f9194E625e2160d474F02717507B351E',
      abi: abi.AdapterABI,
    },
    DataFabric: {
      address: '0x4df30D2B4D595Ca252AEC77e4f8623E545b5021e',
      abi: abi.DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: abi.ERC20ABI,
    },
    EscrowedPRF: {
      address: '0xfc675adFDd721064ba923D07A8A238A9e52D8aCE',
      abi: abi.EscrowedPrfAbi,
    },
    FairSale: {
      address: '0x11Da882cFe4102fa4D8A70223A5927D0E9001d16',
      abi: abi.FairSaleAbi,
    },
    FeeManager: {
      address: '0x57206c5b0cc7aDf30B9AdE22f0C2E526e3DD68E6',
      abi: abi.FeeManagerABI,
    },
    OrderManager: {
      address: '0x9Ce25A972e0b55cd33de54a670F48a39820ea704',
      abi: abi.OrderManagerABI,
    },
    ParifiForwarder: {
      address: '0x3539979AB142B0e98354dCf8c649e3d1B1d4e285',
      abi: abi.ParifiForwarderABI,
    },
    ParifiUtils: {
      address: '0x089674f8A4B2CEa027FC87AA024b9A308a0923a0',
      abi: abi.ParifiUtilsABI,
    },
    ParifiVault: {
      address: '',
      abi: abi.ParifiVaultABI,
    },
    ParifiUSDCVault: {
      address: '0xbf11ac635fe97430b5333018778d0d746f67c989',
      abi: abi.ParifiVaultABI,
    },
    ParifiWETHVault: {
      address: '0xd979e6d8a05ef11b185d2df3d76175eecae522af',
      abi: abi.ParifiVaultABI,
    },
    PriceFeed: {
      address: '0xEA78b6d9BbCE9F9D7CCa7aDeC5149d27f1305450',
      abi: abi.PriceFeedABI,
    },
    RBAC: {
      address: '0xc53cf9162b09392623B559C39ef6B9A9d2dE37c4',
      abi: abi.RBACABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: abi.GnosisSafeABI,
    },
    SubgraphHelper: {
      address: '0xf012d32505df6853187170F00C7b789A8ecC41c2',
      abi: abi.SubgraphHelperABI,
    },
  },
};
