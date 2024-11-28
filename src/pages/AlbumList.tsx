import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Album } from '@/types';

interface AlbumListProps {
  albums: Album[];
  onAlbumSelect: (album: Album) => void;
}

export const AlbumList: React.FC<AlbumListProps> = ({ albums, onAlbumSelect }) => {
  const [displayCount, setDisplayCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + 8, albums.length));
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold mb-8">Shur Records</h1>
      <p className="text-lg text-gray-600 mb-12">Your classic record shop.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {albums.slice(0, displayCount).map((album) => (
          <div key={album.id} className="relative pt-4 px-4">
            {/* Wrapper div with padding to allow overflow */}
            <Card
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-visible"
              onClick={() => onAlbumSelect(album)}
            >
              <div className="relative aspect-square overflow-visible">
                {/* Vinyl Record */}
                <div className="absolute inset-0 z-0 overflow-visible">
                  <img 
                    src="/vinyl-record.svg" 
                    alt="Vinyl record"
                    className="absolute top-0 left-0 w-[120%] h-full 
                             transform translate-x-[10%] group-hover:translate-x-[30%] 
                             transition-transform duration-500 ease-out"
                    style={{ filter: `brightness(0.9) hue-rotate(${album.vinylColor})` }}
                  />
                </div>

                {/* Album Cover */}
                <div className="relative z-10 w-full h-full transform transition-all duration-500 
                               group-hover:translate-x-[-5%] group-hover:rotate-1 bg-white">
                  <img 
                    src={album.coverPath}
                    alt={`${album.name} by ${album.artist}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-3 py-1 text-sm bg-black text-white rounded">
                    {album.year}
                  </span>
                </div>
              </div>

              {/* Album Info */}
              <div className="p-4 bg-white relative z-10">
                <h3 className="text-lg font-bold mb-1">{album.artist}</h3>
                <p className="text-gray-600 mb-2">{album.name}</p>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {album.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>
                    {album.tracks.sideA.length + album.tracks.sideB.length} tracks
                  </span>
                  <span>Sides A+B</span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {displayCount < albums.length && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 
                     disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Loading...' : 'Load More Albums'}
          </button>
        </div>
      )}

      <footer className="mt-24 mb-8 text-center text-sm text-gray-500">
        <p>
          © 2024 Melodiya. All rights reserved.
          <br />
          Developed by Claude & Rasul Hasan
        </p>
      </footer>
    </div>
  );
};

export default AlbumList;