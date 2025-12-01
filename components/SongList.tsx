import React from 'react';
import { DISCOGRAPHY } from '../constants';
import { Song, Album } from '../types';
import { Disc, Music2 } from 'lucide-react';

interface SongListProps {
  onSongSelect: (song: Song, album: Album) => void;
  selectedSongId?: string;
}

export const SongList: React.FC<SongListProps> = ({ onSongSelect, selectedSongId }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-10 px-4 md:px-0">
      {/* Central Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform -translate-x-1/2 hidden md:block" />
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-700 block md:hidden" />

      {DISCOGRAPHY.map((album, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div key={album.id} className={`relative mb-12 flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center w-full`}>
            
            {/* Timeline Dot (Year) */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-mayday-blue flex items-center justify-center z-10 shadow-lg shadow-mayday-blue/20">
              <span className="text-[10px] font-bold text-white">{album.year}</span>
            </div>

            {/* Content Spacer for Desktop */}
            <div className="hidden md:block w-1/2" />

            {/* Album Card */}
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-mayday-blue/50 transition-all duration-300 group">
                
                <div className="flex items-center gap-4 mb-4 border-b border-slate-700 pb-3">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden bg-black shrink-0">
                     <img 
                      src={`https://picsum.photos/seed/${album.coverId}/200/200`} 
                      alt={album.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                     />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Disc className="text-white/80 w-8 h-8 animate-spin-slow" style={{ animationDuration: '10s' }} />
                     </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 leading-tight">{album.title}</h3>
                    <p className="text-sm text-slate-400">Mayday • {album.year}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {album.songs.map((song) => (
                    <li key={song.id}>
                      <button
                        onClick={() => onSongSelect(song, album)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-3
                          ${selectedSongId === song.id 
                            ? 'bg-mayday-blue text-white shadow-lg shadow-mayday-blue/30 scale-[1.02]' 
                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                          }`}
                      >
                         <Music2 className={`w-4 h-4 ${selectedSongId === song.id ? 'text-white' : 'text-slate-500'}`} />
                         <span className="truncate font-medium">{song.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};