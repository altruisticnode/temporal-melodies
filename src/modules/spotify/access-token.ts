import { stringify } from "querystring";
import { IAuth } from "../../types";
import config from "../../conf/config";
import cacheReader from "./cache-reader";
import axios from "axios";
import fs from "fs";

export default async function getAccessToken() {
    const cache = cacheReader("cache/tokens.json");

    const data: IAuth = cache.refresh_token
        ? { grant_type: "refresh_token", refresh_token: cache.refresh_token }
        : { grant_type: "authorization_code", code: config.client.code, redirect_uri: config.client.uri };

    const response = await axios.post("https://accounts.spotify.com/api/token", stringify(data), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(`${config.client.id}:${config.client.secret}`).toString('base64')}`
        }
    });

    const { access_token, refresh_token } = response.data;

    if (access_token) cache.access_token = access_token;
    if (refresh_token) cache.refresh_token = refresh_token;

    fs.writeFileSync("cache/tokens.json", JSON.stringify(cache));

    return access_token as string;
}