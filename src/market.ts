import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';
import { Collateral } from './collateral';
import { Chain } from './chain';
import { markets, usedVaultsPerChain } from './constants';

export const availableMarketsByEncodedPerChain: Record<
  Chain,
  Record<string, string>
> = (Object.values(Chain).filter((c) => Number.isInteger(c)) as Chain[]).reduce(
  (acc, chain) => {
    acc[chain] = markets.reduce<Record<string, string>>((reverseMarkets, m) => {
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
