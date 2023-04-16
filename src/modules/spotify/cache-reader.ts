import fs from "fs";
import { ICache } from "../../types";

export default function cacheReader(file: string) {
    const cache: ICache = {};

    try {
        const data = fs.readFileSync(file);
        const parsed = JSON.parse(data.toString());
        Object.assign(cache, parsed);
    } catch(error) { console.error(error) };

    return cache;
}