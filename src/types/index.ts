// src/types/index.ts
export type Track = {
    name: string;
    duration: string;
    artist: string;
    audioFile: string;
  };
  
  export type Album = {
    id: string;
    artist: string;
    name: string;
    year: number;
    coverPath: string;
    coverColor: string;
    vinylColor: string;
    description: string;
    tracks: {
      sideA: Track[];
      sideB: Track[];
    };
  };