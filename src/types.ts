export interface ICache {
    [key: string]: string | undefined;

    access_token?: string;
    refresh_token?: string;
}