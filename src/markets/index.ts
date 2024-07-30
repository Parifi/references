import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';
import { Chain, Collateral } from '../types';
import { marketInfos } from '../constants/markets';
import { usedVaultsPerChain } from '../constants/vaults';

// Function used to provide Market metadata for the interface such as the Market Name, Market Symbol, 
// and the type of market
export const availableMarketsByEncodedPerChain: Record<Chain, Record<string, string>> = (
  Object.values(Chain).filter((c) => Number.isInteger(c)) as Chain[]
).reduce(
  (acc, chain) => {
    acc[chain] = marketInfos.reduce<Record<string, string>>((reverseMarkets, m) => {
      Object.values(Collateral).forEach((c) => {
        if (usedVaultsPerChain[chain][c]) {
          const encoded = keccak256(
            encodeAbiParameters(parseAbiParameters('string, address'), [
              `${m.symbol}-${c}`,
              usedVaultsPerChain[chain][c],
            ]),
          );

          reverseMarkets[encoded] = `${m.symbol}-${c}`;
        }
      });
      return reverseMarkets;
    }, {});

    return acc;
  },
  {} as Record<Chain, Record<string, string>>,
);
