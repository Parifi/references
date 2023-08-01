export const availableVaults: `0x${string}`[] = [
  '0x3768acf8deBE88EEB9C759839692d0d19Fe045Ec',
  '0x221606c90190b82979A4C1E69B4AC7B47621a8a2',
];

export const usedVaults: Record<string, `0x${string}`> = {
  ETH: '0x3768acf8deBE88EEB9C759839692d0d19Fe045Ec',
  USDC: '0x221606c90190b82979A4C1E69B4AC7B47621a8a2',
};

export function usedVaultsBySymbol(token?: string): string {
  const usedVaultsBySymbol: Record<string, string> = {
    '0x3768acf8deBE88EEB9C759839692d0d19Fe045Ec': 'ETH',
    '0x221606c90190b82979A4C1E69B4AC7B47621a8a2': 'USDC',
  };

  return token
    ? usedVaultsBySymbol[token]
    : usedVaultsBySymbol[availableVaults[0]];
}
