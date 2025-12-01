import React, { useState, useCallback } from 'react';
import { SongList } from './components/SongList';
import { LyricsModal } from './components/LyricsModal';
import { Song, Album } from './types';
import { Music4 } from 'lucide-react';

const App: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<{ song: Song, album: Album } | null>(null);

  const handleSongSelect = useCallback((song: Song, album: Album) => {
    setSelectedSong({ song, album });
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedSong(null);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mayday-blue to-blue-600 flex items-center justify-center">
              <Music4 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Mayday<span className="hidden sm:inline"> Discography</span>
            </h1>
          </div>
          <div className="text-xs text-slate-500 font-mono hidden sm:block">
            EST. 1999
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-10">
        <div className="max-w-4xl mx-auto text-center px-4 mb-12">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
             Join the <span className="text-mayday-blue">Walao</span> Journey
           </h2>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             Explore the musical timeline of Mayday. Select a track to generate its lyrics, story, and details using Gemini AI.
           </p>
        </div>

        <SongList 
          onSongSelect={handleSongSelect} 
          selectedSongId={selectedSong?.song.id} 
        />
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-800 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Mayday Tribute. Lyrics powered by Gemini.</p>
      </footer>

      {/* Modal */}
      {selectedSong && (
        <LyricsModal 
          song={selectedSong.song} 
          album={selectedSong.album} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;