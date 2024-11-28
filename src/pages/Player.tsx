import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Album } from '@/types';

interface PlayerProps {
  album: Album | null;
  onBack: () => void;
  currentSide: 'A' | 'B';
  setCurrentSide: (side: 'A' | 'B') => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  currentTrackIndex: number;
  setCurrentTrackIndex: (index: number) => void;
}

export const Player: React.FC<PlayerProps> = ({
  album,
  onBack,
  currentSide,
  setCurrentSide,
  isPlaying,
  setIsPlaying,
  currentTrackIndex,
  setCurrentTrackIndex,
}) => {
  const vinylRef = useRef<HTMLImageElement>(null);
  const tonearmRef = useRef<HTMLImageElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const vinylNoiseRef = useRef<HTMLAudioElement | null>(null);  // Changed this line
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(0.5);

  // Initialize audio elements
  useEffect(() => {
    // Changed this block
    const vinylNoise = new Audio('/vinyl-crackle.mp3');
    vinylNoise.loop = true;
    vinylNoise.volume = 0.05;
    vinylNoiseRef.current = vinylNoise;
  }, []);

  useEffect(() => {
    if (vinylRef.current) {
      if (isPlaying) {
        setTimeout(() => {
          if (vinylRef.current) {
            vinylRef.current.style.animation = 'spin 2s linear infinite';
          }
        }, 1000);
      } else {
        vinylRef.current.style.animation = 'none';
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (tonearmRef.current) {
      const angle = isPlaying ? 28 : 0;
      tonearmRef.current.style.transition = 'transform 1s ease-in-out';
      tonearmRef.current.style.transform = `rotate(${angle}deg)`;
    }
  }, [isPlaying]);

  useEffect(() => {
    const tracks = currentSide === 'A' ? album?.tracks.sideA : album?.tracks.sideB;
    const currentTrack = tracks?.[currentTrackIndex];
    
    if (currentTrack && audioRef.current) {
      audioRef.current.src = `/songs/${currentTrack.audioFile}`;
      audioRef.current.volume = volume;
      
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error('Playback failed:', e));
        vinylNoiseRef.current?.play().catch(e => console.error('Vinyl noise failed:', e));
      } else {
        audioRef.current.pause();
        vinylNoiseRef.current?.pause();
      }
    }

    return () => {
      audioRef.current?.pause();
      vinylNoiseRef.current?.pause();
    };
  }, [isPlaying, currentTrackIndex, currentSide, album]);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const timeUpdate = () => setCurrentTime(audio.currentTime);
      const durationChange = () => setDuration(audio.duration);
      const trackEnd = () => {
        const tracks = currentSide === 'A' ? album?.tracks.sideA : album?.tracks.sideB;
        if (tracks && currentTrackIndex < tracks.length - 1) {
          setCurrentTrackIndex(currentTrackIndex + 1);
        } else if (currentSide === 'A') {
          handleSideChange();
          setTimeout(() => {
            setCurrentTrackIndex(0);
            setIsPlaying(true);
          }, 600);
        } else {
          setIsPlaying(false);
        }
      };

      audio.addEventListener('timeupdate', timeUpdate);
      audio.addEventListener('durationchange', durationChange);
      audio.addEventListener('ended', trackEnd);

      return () => {
        audio.removeEventListener('timeupdate', timeUpdate);
        audio.removeEventListener('durationchange', durationChange);
        audio.removeEventListener('ended', trackEnd);
      };
    }
  }, [currentTrackIndex, currentSide, album]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (audioRef.current) {
      const value = Number(e.target.value);
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (vinylNoiseRef.current) {
      vinylNoiseRef.current.volume = newVolume * 0.05;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleSideChange = () => {
    setIsPlaying(false);
    if (vinylRef.current) {
      vinylRef.current.style.transition = 'transform 0.5s ease-in-out';
      vinylRef.current.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        setCurrentSide(currentSide === 'A' ? 'B' : 'A');
        setCurrentTrackIndex(0);
        if (vinylRef.current) {
          vinylRef.current.style.transform = 'rotateY(0deg)';
        }
      }, 500);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="inline-block px-3 py-1 bg-gray-100 rounded text-sm mb-2">
            {album?.year}
          </div>
          <h1 className="text-5xl font-bold mb-2">{album?.artist}</h1>
          <h2 className="text-2xl text-gray-600">{album?.name}</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
          >
            <img 
              src="/back-icon.svg" 
              alt="Back to albums" 
              className="w-12 h-12 group-hover:scale-110 transition-transform" 
            />
          </button>
          <button 
            onClick={handleSideChange}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
          >
            <img 
              src="/flip-icon.svg" 
              alt="Change vinyl side" 
              className="w-12 h-12 group-hover:scale-110 transition-transform" 
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-[601px] h-[411px]">
          <img 
            src="/turntable.svg" 
            alt="Turntable" 
            className="absolute top-0 left-0 w-full h-full"
          />
          <img 
            ref={vinylRef}
            src="/vinyl.svg"
            alt="Vinyl" 
            className="absolute w-[435px] h-[435px]"
            style={{
              left: '-30px',
              top: '-10px',
              transformOrigin: 'center',
              transition: 'all 0.5s ease-out'
            }}
          />
          <img 
            ref={tonearmRef}
            src="/tonearm.svg"
            alt="Tonearm" 
            className="absolute w-[191px] h-[383px]"
            style={{
              left: '410px',
              top: '25px',
              transformOrigin: 'top center',
              transition: 'transform 1s ease-in-out'
            }}
          />
          <audio ref={audioRef} />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="space-y-2">
            {(currentSide === 'A' ? album?.tracks.sideA : album?.tracks.sideB)?.map((track, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg transition-all ${
                  currentTrackIndex === index && isPlaying 
                    ? 'bg-gray-50' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (currentTrackIndex === index && isPlaying) {
                        setIsPlaying(false);
                      } else {
                        setCurrentTrackIndex(index);
                        setIsPlaying(true);
                      }
                    }}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    {currentTrackIndex === index && isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  
                  <div className="flex-grow">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => {
                        if (currentTrackIndex === index && isPlaying) {
                          setIsPlaying(false);
                        } else {
                          setCurrentTrackIndex(index);
                          setIsPlaying(true);
                        }
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">{track.artist}</span>
                        <span className="font-medium hover:text-red-600 transition-colors">
                          {track.name}
                        </span>
                      </div>
                      <span className="text-gray-500">
                        {currentTrackIndex === index && isPlaying 
                          ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                          : track.duration
                        }
                      </span>
                    </div>
                    
                    {currentTrackIndex === index && isPlaying && (
                      <div 
                        className="relative w-full h-2 bg-gray-200 rounded-full mt-2 group"
                        onClick={e => e.stopPropagation()}
                      >
                        <div 
                          className="absolute left-0 top-0 h-full bg-red-500 rounded-full"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                        <input 
                          type="range"
                          min="0"
                          max={duration}
                          value={currentTime}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hover:opacity-100"
                          onChange={handleSeek}
                          onClick={e => e.stopPropagation()}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 px-4">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <div className="relative w-24 h-2 group">
              <div className="absolute inset-0 rounded-full bg-gray-200">
                <div 
                  className="absolute inset-y-0 left-0 bg-red-500 rounded-full"
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose max-w-none">
          <h3 className="text-xl font-bold mb-4">About the Artist</h3>
          <p className="text-gray-600">{album?.description}</p>
        </div>
        <div className="text-right text-sm text-gray-500">
          Copyright © 2024 Melodiya. All rights reserved.
          <br />
          Developed by Claude & Rasul Hasan
        </div>
      </div>
    </div>
  );
};

export default Player;