import IPythConfig from "../interface/pyth-config.interface";
import { stablePriceIdBySymbol } from "../priceIds";
import PythDeployments from "./enum/pyth-deployment.enum";

const pythStableConfiguration: IPythConfig = {
  priceIdBySymbol: stablePriceIdBySymbol,
  pythDeployment: PythDeployments.STABLE,
  publicEndpoint: 'https://hermes.pyth.network',
}

export default pythStableConfiguration;
