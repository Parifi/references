import { betaPriceIdBySymbol } from "../priceIds";
import PythDeployment from "./enum/pyth-deployment.enum";
import IPythConfig from "./interface/pyth-config.interface";

const pythBetaConfiguration: IPythConfig = {
  priceIdBySymbol: betaPriceIdBySymbol,
  pythDeployment: PythDeployment.BETA,
  publicEndpoint: 'https://hermes-beta.pyth.network',
}

export default pythBetaConfiguration;
