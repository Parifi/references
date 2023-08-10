import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';

export function calculatePositionId(
  marketId: `0x${string}`,
  marketAddress: `0x${string}`,
  userAddress: `0x${string}` | undefined,
  isLong: boolean,
) {
  if (!userAddress) return '';

  return keccak256(
    encodeAbiParameters(parseAbiParameters('bytes32, address, address, bool'), [
      marketId,
      marketAddress,
      userAddress,
      isLong,
    ]),
  );
}
