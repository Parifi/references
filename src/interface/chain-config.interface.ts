interface IChainConfig {
  priceIdBySymbol: Record<string, string>;
  isChainTestnet: boolean;
}

export default IChainConfig;
