export interface ICache {
    [key: string]: string | undefined;

    access_token?: string;
    refresh_token?: string;
}

export type IAuth =
  { grant_type: "refresh_token", refresh_token: string } |
  { grant_type: "authorization_code", code: string, redirect_uri: string };

export interface Track {
  track: {
    name: string;
    artists: { name: string }[];
  }
}