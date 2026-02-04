/**
 * Code by ~Xipzer
 */

export interface Chain {
  name: string
  color: string
  symbol: string
  logo: string
}

export const chains: Chain[] = [
  { name: 'Ethereum', color: '#627EEA', symbol: 'ETH', logo: '/chains/ethereum.png' },
  { name: 'Polygon', color: '#8247E5', symbol: 'MATIC', logo: '/chains/polygon.png' },
  { name: 'BSC', color: '#F0B90B', symbol: 'BNB', logo: '/chains/bsc.png' },
  { name: 'Arbitrum', color: '#28A0F0', symbol: 'ARB', logo: '/chains/arbitrum.png' },
  { name: 'Optimism', color: '#FF0420', symbol: 'OP', logo: '/chains/optimism.png' },
  { name: 'Base', color: '#0052FF', symbol: 'BASE', logo: '/chains/base.png' },
  { name: 'Solana', color: '#14F195', symbol: 'SOL', logo: '/chains/solana.png' },
]
