import { encodeAbiParameters, keccak256, parseAbiParameters } from 'viem';

export function calculateOrderId(userAddress: `0x${string}`, nonce: bigint) {
  return keccak256(
    encodeAbiParameters(parseAbiParameters('string, address, uint256'), [
      'ORD',
      userAddress,
      nonce,
    ]),
  );
}
