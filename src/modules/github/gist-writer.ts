import config from "../../conf/config";
import { Track } from "../../types";
import { Octokit } from "@octokit/rest";

export default async function writer(tracks: Track[]) {
    const octokit = new Octokit({ auth: config.github.token });

    const gist_id = config.github.gist;
    const gist = await octokit.gists.get({ gist_id });
    const filename = Object.keys(gist.data.files || [])[0];
    const songs = tracks.map((blob) => `${blob.track.name} - ${blob.track.artists[0].name}`).join("\n");

    await octokit.gists.update({
        gist_id,
        description: config.custom.description,
        files: {
            [filename]: {
                filename: config.custom.title,
                content: songs
            }
        }
    })
}