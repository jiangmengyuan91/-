import React, { useEffect, useState } from 'react';
import { Song, Album, SongDetailData, LoadingState } from '../types';
import { fetchSongDetails } from '../services/geminiService';
import { X, Mic2, User, Info, Music, Loader2 } from 'lucide-react';

interface LyricsModalProps {
  song: Song | null;
  album: Album | null;
  onClose: () => void;
}

export const LyricsModal: React.FC<LyricsModalProps> = ({ song, album, onClose }) => {
  const [data, setData] = useState<SongDetailData | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (song) {
      setStatus(LoadingState.LOADING);
      setData(null);
      
      fetchSongDetails(song.title)
        .then((fetchedData) => {
          setData(fetchedData);
          setStatus(LoadingState.SUCCESS);
        })
        .catch((err) => {
          console.error(err);
          setErrorMessage('Failed to retrieve lyrics. Please try again.');
          setStatus(LoadingState.ERROR);
        });
    }
  }, [song]);

  if (!song) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-700/50 hover:bg-slate-600 rounded-full text-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Meta Info & Status */}
        <div className="w-full md:w-1/3 bg-slate-900/50 p-6 flex flex-col border-b md:border-b-0 md:border-r border-slate-700">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{song.title}</h2>
            <p className="text-mayday-accent font-medium">{album?.title}</p>
            <p className="text-slate-400 text-sm mt-1">{album?.year}</p>
          </div>

          {status === LoadingState.LOADING && (
            <div className="flex-1 flex flex-col items-center justify-center text-mayday-blue space-y-4">
              <Loader2 className="w-10 h-10 animate-spin" />
              <p className="text-sm font-medium animate-pulse">Consulting the timeline...</p>
            </div>
          )}

          {status === LoadingState.ERROR && (
            <div className="flex-1 flex flex-col items-center justify-center text-red-400">
              <Info className="w-10 h-10 mb-2" />
              <p className="text-center text-sm">{errorMessage}</p>
            </div>
          )}

          {status === LoadingState.SUCCESS && data && (
            <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <User className="w-4 h-4 text-mayday-blue" />
                  <div className="text-sm">
                    <span className="text-xs uppercase tracking-wider text-slate-500 block">Lyricist</span>
                    {data.lyricist}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Music className="w-4 h-4 text-mayday-blue" />
                  <div className="text-sm">
                    <span className="text-xs uppercase tracking-wider text-slate-500 block">Composer</span>
                    {data.composer}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                   <Mic2 className="w-4 h-4 text-mayday-blue" />
                   <div className="text-sm">
                    <span className="text-xs uppercase tracking-wider text-slate-500 block">Mood</span>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-slate-700 text-xs mt-1 border border-slate-600">
                      {data.mood}
                    </span>
                   </div>
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50">
                <h4 className="text-mayday-accent text-sm font-bold mb-2 flex items-center gap-2">
                  <Info className="w-3 h-3" /> Behind the Song
                </h4>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{data.funFact}"
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Lyrics */}
        <div className="w-full md:w-2/3 bg-slate-800 p-6 md:p-10 overflow-y-auto custom-scrollbar relative">
          {status === LoadingState.SUCCESS && data ? (
            <div className="prose prose-invert prose-lg max-w-none">
               <div className="text-center md:text-left whitespace-pre-line leading-loose text-slate-200 font-medium tracking-wide">
                 {data.lyrics}
               </div>
               
               <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-500 text-xs">
                  <p>Content generated by AI. May contain inaccuracies.</p>
               </div>
            </div>
          ) : (
            // Placeholder skeleton
            <div className={`space-y-4 ${status === LoadingState.LOADING ? 'animate-pulse' : 'opacity-0'}`}>
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
              <div className="h-4 bg-slate-700 rounded w-5/6"></div>
              <div className="h-4 bg-slate-700 rounded w-2/3"></div>
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <br/>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
              <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};