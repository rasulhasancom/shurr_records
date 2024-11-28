// src/App.tsx
import React, { useState } from 'react';
import { AlbumList } from './pages/AlbumList';
import { Player } from './pages/Player';
import { albums } from './data/albums'; // Import the albums data
import { Album } from './types';

const App = () => {
  const [currentView, setCurrentView] = useState<'list' | 'player'>('list');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentSide, setCurrentSide] = useState<'A' | 'B'>('A');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  // Use the first album as default when the page loads
  React.useEffect(() => {
    if (albums.length > 0) {
      setSelectedAlbum(albums[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {currentView === 'list' ? (
        <AlbumList 
          albums={albums}  // Pass albums to AlbumList
          onAlbumSelect={(album) => {
            setSelectedAlbum(album);
            setCurrentView('player');
          }} 
        />
      ) : (
        <Player
          album={selectedAlbum}
          onBack={() => {
            setCurrentView('list');
            setIsPlaying(false);
            setCurrentTrackIndex(0);
          }}
          currentSide={currentSide}
          setCurrentSide={setCurrentSide}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentTrackIndex={currentTrackIndex}
          setCurrentTrackIndex={setCurrentTrackIndex}
        />
      )}
    </div>
  );
};

export default App;