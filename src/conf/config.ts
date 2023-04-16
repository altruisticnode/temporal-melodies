import dotenv from "dotenv";

dotenv.config();

const GH_TOKEN = process.env.GH_TOKEN || "";
const GH_GIST_ID = process.env.GH_GIST_ID || "";

const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const CLIENT_CODE = process.env.CLIENT_CODE || "";
const CLIENT_REDIRECT_URI = process.env.CLIENT_REDIRECT_URI || "";

const CUSTOM_TITLE = process.env.CUSTOM_TITLE || "🎶 Temporal Melodies | My Recent Tunes";
const CUSTOM_DESCRIPTION = process.env.CUSTOM_DESCRIPTION || "🎶 Temporal Melodies | My Recent Tunes";

const config = {
    github: {
        token: GH_TOKEN,
        gist: GH_GIST_ID
    },
    client: {
        id: CLIENT_ID,
        secret: CLIENT_SECRET,
        code: CLIENT_CODE,
        uri: CLIENT_REDIRECT_URI
    },
    custom: {
        title: CUSTOM_TITLE,
        description: CUSTOM_DESCRIPTION
    }
};

export default config;