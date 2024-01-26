import PythDeployment from "../enum/pyth-deployment.enum";

interface IPythConfig {
  priceIdBySymbol: Record<string, string>;
  pythDeployment: PythDeployment;
  publicEndpoint: string;
}

export default IPythConfig;
