import getAccessToken from "./modules/spotify/access-token";
import getRecentTracks from "./modules/spotify/recent-tracks";
import writer from "./modules/github/gist-writer";

(async () => {
    const token = await getAccessToken();
    const tracks = await getRecentTracks(token);
    writer(tracks);
})();