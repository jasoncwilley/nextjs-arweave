import { arweave } from './blockchains';

export async function fetchArweaveData(transactionId) {
    try {
        const data = await arweave.transactions.getData(transactionId, { decode: true, string: true });
        return data;
    } catch (error) {
        console.error('Error fetching Arweave data:', error);
        throw error;
    }
}
