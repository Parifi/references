import { Chain } from './chain';
import {
  ERC20ABI,
  GnosisSafeABI,
  GelatoABI,
  ArbSepoliaContractsABI as ArbContractsABI,
} from './abi';
import { FairSaleAbi } from './abi/FairsaleAbi';
import { EscrowedPrfAbi } from './abi/EscrowedPrf';

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
      address: '0xEf4B27677d01e2b3Fb6382a6627e1b625cDc1757',
      abi: ArbContractsABI.AdapterABI,
    },
    OrderManager: {
      address: '0xe9976AB03aE60d092ca18009991231fa6b4D68f9',
      abi: ArbContractsABI.OrderManagerABI,
    },
    FeeManager: {
      address: '0x4C590F812EB3ca43Ca6Ea3Ba92C65Ca991B77d94',
      abi: ArbContractsABI.FeeManagerABI,
    },
    PriceFeed: {
      address: '0xb11f733b6A785FE5367d56d147AA0f9573704F31',
      abi: ArbContractsABI.PriceFeedABI,
    },
    DataFabric: {
      address: '0x37e611DadfD420ed802bD01221378E55B9eeFF01',
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
      address: '0x00774Bd079E54be21716485D5a98C89517754a55',
      abi: ArbContractsABI.ParifiForwarderABI,
    },
    Safe: {
      address: '0x60B03968F6fCB3aaFa13aC6f6277C912AF79822D',
      abi: GnosisSafeABI,
    },
    ParifiUtils: {
      address: '0xe4B3d30643CB14d7CFf515C4C73BB87b43d931D8',
      abi: ArbContractsABI.ParifiUtilsABI,
    },
    Gelato: {
      address: '0x75ba5af8effdcfca32e1e288806d54277d1fde99',
      abi: GelatoABI,
    },
    RBAC: {
      address: '0xe821Aab5Cc5C6606194F2AeE3A9146940A73ae60',
      abi: ArbContractsABI.RBACABI,
    },
    SubgraphHelper: {
      address: '0xf012d32505df6853187170F00C7b789A8ecC41c2',
      abi: ArbContractsABI.SubgraphHelperABI,
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
