import { Chain } from './chain';
import {
  ERC20ABI,
  GnosisSafeABI,
  GelatoABI,
  ArbSepoliaContractsABI as ArbContractsABI,
  SubgraphHelperABI,
} from './abis/parifi';
import { FairSaleAbi } from './abis/parifi/FairsaleAbi';
import { EscrowedPrfAbi } from './abis/parifi/EscrowedPrf';

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
      abi: ArbContractsABI.AdapterABI,
    },
    OrderManager: {
      address: '0x3aEaeEDBF2AF79ABDeE45eDc4578fdA9252Dbc67',
      abi: ArbContractsABI.OrderManagerABI,
    },
    FeeManager: {
      address: '0xafD8f81b31aEBf8Bf996b0259d96fe3695Fb2dA8',
      abi: ArbContractsABI.FeeManagerABI,
    },
    PriceFeed: {
      address: '0x27dcc355C62930AB07093E0008C9CDE1411e539c',
      abi: ArbContractsABI.PriceFeedABI,
    },
    DataFabric: {
      address: '0x9B930D5a232Ee2e8ECe0296e9c0E7Ff2C4653c54',
      abi: ArbContractsABI.DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    ParifiVault: {
      address: '',
      abi: ArbContractsABI.ParifiVaultABI,
    },
    ParifiForwarder: {
      address: '0xCc54bbcF97E7a4E4A5b14126faEBD0b5B5C8BD10',
      abi: ArbContractsABI.ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
    ParifiUtils: {
      address: '0xa36f9652dF219A4a84668A1C6708a9e201D75446',
      abi: ArbContractsABI.ParifiUtilsABI,
    },
    Gelato: {
      address: '0x75ba5af8effdcfca32e1e288806d54277d1fde99',
      abi: GelatoABI,
    },
    RBAC: {
      address: '0xff0478eC02415877669F4222BE9c48c23e8733BF',
      abi: ArbContractsABI.RBACABI,
    },
    SubgraphHelper: {
      addresS: '0x84682F9360ae691Bc9519eabd8889842137A1eCc',
      abi: ArbContractsABI.SubgraphHelperABI,
    },
  },
  [Chain.ARBITRUM_MAINNET]: {
    Adapter: {
      address: '0x548a5a19f9194E625e2160d474F02717507B351E',
      abi: ArbContractsABI.AdapterABI,
    },
    OrderManager: {
      address: '0x9Ce25A972e0b55cd33de54a670F48a39820ea704',
      abi: ArbContractsABI.OrderManagerABI,
    },
    FeeManager: {
      address: '0x57206c5b0cc7aDf30B9AdE22f0C2E526e3DD68E6',
      abi: ArbContractsABI.FeeManagerABI,
    },
    PriceFeed: {
      address: '0xEA78b6d9BbCE9F9D7CCa7aDeC5149d27f1305450',
      abi: ArbContractsABI.PriceFeedABI,
    },
    DataFabric: {
      address: '0x4df30D2B4D595Ca252AEC77e4f8623E545b5021e',
      abi: ArbContractsABI.DataFabricABI,
    },
    ERC20: {
      address: '',
      abi: ERC20ABI,
    },
    ParifiVault: {
      address: '',
      abi: ArbContractsABI.ParifiVaultABI,
    },
    ParifiForwarder: {
      address: '0x3539979AB142B0e98354dCf8c649e3d1B1d4e285',
      abi: ArbContractsABI.ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
    ParifiUtils: {
      address: '0x089674f8A4B2CEa027FC87AA024b9A308a0923a0',
      abi: ArbContractsABI.ParifiUtilsABI,
    },
    Gelato: {
      address: '0x75ba5af8effdcfca32e1e288806d54277d1fde99',
      abi: GelatoABI,
    },
    RBAC: {
      address: '0xc53cf9162b09392623B559C39ef6B9A9d2dE37c4',
      abi: ArbContractsABI.RBACABI,
    },
    SubgraphHelper: {
      address: '0xf012d32505df6853187170F00C7b789A8ecC41c2',
      abi: SubgraphHelperABI,
    },
    FairSale: {
      address: '0x11Da882cFe4102fa4D8A70223A5927D0E9001d16',
      abi: FairSaleAbi,
    },
    EscrowedPRF: {
      address: '0xfc675adFDd721064ba923D07A8A238A9e52D8aCE',
      abi: EscrowedPrfAbi,
    },
  },
};
