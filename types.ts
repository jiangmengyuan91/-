export interface Song {
  id: string;
  title: string;
}

export interface Album {
  id: string;
  title: string;
  year: number;
  coverId: number; // For picsum
  songs: Song[];
}

export interface SongDetailData {
  lyrics: string;
  composer: string;
  lyricist: string;
  album: string;
  year: string;
  funFact: string;
  mood: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}