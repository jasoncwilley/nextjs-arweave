import Irys from "@irys/sdk";
import * as fs from "fs";


const getIrysClient = () => {
    const irys = new Irys({
        url: "https://devnet.irys.xyz",
        token: "solana",
        key: "2kBiCgk2Je2jDgUCPF3nTZQWaGuQQo91nREpMSTWBzGhPvHxdUnMtQg5Cvq877VTAT6Fp13PexCTEkoecNsBGjBX",
        config: {
            providerUrl: "https://api.devnet.solana.com",
        }
    });
    // Print your wallet address
    console.log(`wallet address = ${irys.address}`);
    return irys;
};

export const lazyFundNode = async (size) => {
    const irys = getIrysClient();
    const price = await irys.getPrice(size);
    await irys.fund(price);
};

export const uploadFileToArweave = async (filepath, tags) => {
    const irys = getIrysClient();
    const file = fs.readFileSync(filepath);
    const { id } = await irys.upload(file, { tags });
    console.log("file uploaded to ", `https://arweave.net/${id}`);
    return id;
};
