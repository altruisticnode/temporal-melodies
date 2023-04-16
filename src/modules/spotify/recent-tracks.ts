import axios from "axios";

export default async function getRecentTracks(token: string) {
    const response = await axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=8", {
        headers: { Authorization: `Bearer ${token}` }
    });

    return response.data.items;
}