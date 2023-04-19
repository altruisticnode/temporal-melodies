<p align="center">
    <img src="./preview/preview.png" alt="Pinned gist showing multiple recent tracks"></img>
</p>
<h3 align="center">Temporal Melodies</h3>

<div align="center">

  [![Tweet](https://img.shields.io/twitter/url/https/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=%F0%9F%93%A2%20Temporal%20Melodies%20is%20an%20application%20that%20integrates%20with%20GitHub%20to%20bring%20you%20your%20most%20recent%20tunes%20from%20Spotify.%20Feel%20free%20to%20try%20it%20out%20here%20and%20enjoy!&url=https://github.com/altruisticnode/temporal-melodies)
  [![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/altruisticnode/temporal-melodies)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
</div>

---

<p align = "center">🎼 Integrate Spotify with GitHub to showcase your recent tunes.</p>

## Table of Contents
- [About The Project](#about-the-project)
  * [Description](#description)
- [Getting Started](#getting-started)
  * [Spotify Integration](#spotify-integration)
  * [GitHub Integration](#github-integration)
  * [Launch](#launch)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About <a name = "about-the-project"></a>
### Description <a name = "description" ></a>
This project is a Node.js application which will integrate data fetched from the Spotify API with GitHub Gists. It utilizes the [Spotify Web API](https://developer.spotify.com/documentation/web-api) to retrieve recently played tracks for the currently logged in user and also [Octokit](https://octokit.github.io/rest.js/v19) for the subsequent gist writes.
    
The application uses an [OAuth2](https://oauth.net/2/) authorization flow to obtain an access token, and then makes requests to the Spotify Web API to retrieve the user's recently played tracks. The recovered data is then formatted and written to any Gist of choice.

This entirety of the program's logic is written in TypeScript which then compiles to be executed in a Node environment. The automation of the periodic data-fetching (along with caching of tokens) is done through [GitHub Actions](https://github.com/features/actions). You can view this in finer detail in the [main workflow](/.github/workflows/main.yaml).

## Getting Started <a name = "getting-started"></a>
### Spotify Integration <a name = "spotify-integration"></a>
1. The first step is creating [your own application](https://developer.spotify.com/dashboard/create) through Spotify's developer portal.
2. Keep the following information in mind as it will be required for our integration:
  - `Client ID`
  - `Client Secret`
  - `Redirect URIs`

In order to proceed, you must gain a proper `authorization code`. The integration is pretty simple, but we'll be using a robust authorization code flow suitable for long-running applications. You can proceed with this step through Spotify's official guide for developers: [code-flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow).

Keep in mind the following `scopes` below are *required* for the base configurations of the application. You may extend it at your own discretion.
```js
const scopes = [
  "user-top-read",
  "user-read-recently-played",
  "user-read-playback-position"
].join(" ");
```

### GitHub Integration <a name = "github-integration"></a>
1. Grab the `ID` of any public gist you would like to use for the integration. Create one here if you don't already have one: [gist.github.com](https://gist.github.com/)
2. Create a `PAT` (Personal Access Token) through [GitHub's Developer Settings](https://github.com/settings/tokens/new). Don't forget to give it the `OAuth` scope for manipulating gists.
3. Head over to the [main.yaml](/.github/workflows/main.yaml) and adjust the `cron` time to yout preference.

### Launch <a name = "launch"></a>
1. Create a Fork on this repository.
2. With information noted from before, you must insert each bit as environment variable while following the [`environment.md`](/environment.md) as a guideline.
3. Pin the Gist to your GitHub and enjoy the integration! :)

## License <a name = "license"></a>
Distributed under the [MIT](https://opensource.org/licenses/MIT) License. 

Please see the [LICENSE](/LICENSE) for more information.

## Acknowledgements <a name = "acknowledgements"></a>
This section includes a useful list of sources that have helped my project— Either directly, or through other means such as inspiration.
- [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [GitHub Actions](https://github.com/features/actions)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)