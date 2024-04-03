
import Arweave from 'arweave';
import { Connection } from '@solana/web3.js';

export const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https',
});

export const solanaConnection = new Connection('https://api.devnet.solana.com');
