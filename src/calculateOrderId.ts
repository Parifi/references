import { encodePacked, keccak256 } from 'viem';

export function calculateOrderId(
  marketId: `0x${string}`,
  marketAddress: `0x${string}`,
  userAddress: `0x${string}`,
  isLong: boolean,
  sequence: bigint,
) {
  return keccak256(
    encodePacked(
      ['bytes32', 'address', 'address', 'bool', 'uint256'],
      [marketId, marketAddress, userAddress, isLong, sequence],
    ),
  );
}
