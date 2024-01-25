import { betaPriceIdBySymbol } from "../priceIds";
import PythDeployments from "./enum/pyth-deployment.enum";
import IPythConfig from "../interface/pyth-config.interface";

const pythBetaConfiguration: IPythConfig = {
  priceIdBySymbol: betaPriceIdBySymbol,
  pythDeployment: PythDeployments.BETA,
  publicEndpoint: 'https://hermes-beta.pyth.network',
}

export default pythBetaConfiguration;
