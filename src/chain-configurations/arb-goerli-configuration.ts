import { Chain } from "../chain";
import { isChainTestnet } from "../isChainTestnet";
import { betaPriceIdBySymbol } from "../priceIds";
import IChainConfig from "../interface/chain-config.interface";

const arbGoerliConfiguration: IChainConfig = {
  priceIdBySymbol: betaPriceIdBySymbol,
  isChainTestnet: isChainTestnet[Chain.ARBITRUM_GOERLI],
}

export default arbGoerliConfiguration;
