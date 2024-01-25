import PythDeployments from "../chain-configurations/enum/pyth-deployment.enum";

interface IPythConfig {
  priceIdBySymbol: Record<string, string>;
  pythDeployment: PythDeployments;
  publicEndpoint: string;
}

export default IPythConfig;
