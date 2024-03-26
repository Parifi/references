import { Chain } from '../chain';
import IPythConfig from './interface/pyth-config.interface';
import pythBetaConfiguration from './pyth-beta-configuration';
import pythStableConfiguration from './pyth-stable-configuration';

const chainConfigurations: Record<number, IPythConfig> = {
  [Chain.ARBITRUM_SEPOLIA]: pythStableConfiguration,
  [Chain.ARBITRUM_ONE]: pythStableConfiguration,
};

export default chainConfigurations;
