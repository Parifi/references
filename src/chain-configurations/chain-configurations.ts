import { Chain } from "../chain";
import IChainConfig from "../interface/chain-config.interface";
import arbGoerliConfiguration from "./arb-goerli-configuration";
import arbSepoliaConfiguration from "./arb-sepolia-configuration";

const chainConfigurations: Record<number, IChainConfig> = {
  [Chain.ARBITRUM_SEPOLIA]: arbSepoliaConfiguration,
  [Chain.ARBITRUM_GOERLI]: arbGoerliConfiguration,
}

export default chainConfigurations;
