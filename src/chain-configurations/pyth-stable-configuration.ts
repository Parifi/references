import IPythConfig from "./interface/pyth-config.interface";
import { stablePriceIdBySymbol } from "../priceIds";
import PythDeployment from "./enum/pyth-deployment.enum";

const pythStableConfiguration: IPythConfig = {
  priceIdBySymbol: stablePriceIdBySymbol,
  pythDeployment: PythDeployment.STABLE,
  publicEndpoint: 'https://hermes.pyth.network',
}

export default pythStableConfiguration;
