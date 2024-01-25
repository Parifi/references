import { Chain } from "../chain";
import IChainConfig from "../interface/chain-config.interface";
import { isChainTestnet } from "../isChainTestnet";
import { stablePriceIdBySymbol } from "../priceIds";

const arbSepoliaConfiguration: IChainConfig = {
  priceIdBySymbol: stablePriceIdBySymbol,
  isChainTestnet: isChainTestnet[Chain.ARBITRUM_SEPOLIA],
}

export default arbSepoliaConfiguration;
