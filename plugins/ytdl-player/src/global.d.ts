/* eslint-disable @typescript-eslint/no-explicit-any */

interface Track {
  artist: string;
  duration: number;
  name: string;
  previewUrl: string;
  uri: string;
}

interface Spotify {
  getTracks: (url: string) => Promise<Track[]>;
}

declare module "spotify-url-info" {
  function spotify(fetch: any): Spotify;
  export = spotify;
}
