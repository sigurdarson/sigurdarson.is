
  export type Song = {
    songUrl: string;
    artist: string;
    title: string;
  };
  
  export type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  };
  

  export type YouTube = {
    subscriberCount: number;
    viewCount: number;
  };
  

  
  export type Unsplash = {
    downloads: number;
    views: number;
  };