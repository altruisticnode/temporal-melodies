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

<p align = "center">🎼 Integrate Spotify with Github to showcase your recent tunes.</p>

## Table of Contents
- [About The Project](#about-the-project)
  * [Description](#description)

## About <a name = "about-the-project"></a>
### Description <a name = "description" >
This project is a Node.js application which will integrate data fetched from the Spotify API with Github Gists. It utilizes the [Spotify Web API](https://developer.spotify.com/documentation/web-api) to retrieve recently played tracks for the currently logged in user and also [Octokit](https://octokit.github.io/rest.js/v19) for the subsequent gist writes.
    
The application uses an [OAuth2](https://oauth.net/2/) authorization flow to obtain an access token, and then makes requests to the Spotify Web API to retrieve the user's recently played tracks. The recovered data is then formatted and written to any Gist of choice.

This entirety of the program's logic is written in TypeScript which then compiles to be executed in a Node environment. The automation of the periodic data-fetching (along with caching of tokens) is done through [Github Actions](https://github.com/features/actions). You can view this in finer detail in the [main workflow](/.github/workflows/main.yaml).