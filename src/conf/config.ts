import dotenv from "dotenv";

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const CLIENT_CODE = process.env.CLIENT_CODE || "";
const CLIENT_REDIRECT_URI = process.env.CLIENT_REDIRECT_URI || "";

const config = {
    client: {
        id: CLIENT_ID,
        secret: CLIENT_SECRET,
        code: CLIENT_CODE,
        uri: CLIENT_REDIRECT_URI
    }
};

export default config;