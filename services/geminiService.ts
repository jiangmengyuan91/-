import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SongDetailData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const songSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    lyrics: {
      type: Type.STRING,
      description: 'The full lyrics of the song in original Traditional Chinese. Retain line breaks.',
    },
    composer: {
      type: Type.STRING,
      description: 'Name of the composer (e.g., Ashin, Monster).',
    },
    lyricist: {
      type: Type.STRING,
      description: 'Name of the lyricist (e.g., Ashin).',
    },
    album: {
      type: Type.STRING,
      description: 'The album name this song belongs to.',
    },
    year: {
      type: Type.STRING,
      description: 'Release year.',
    },
    funFact: {
      type: Type.STRING,
      description: 'A short, interesting trivia or background story about this specific song or its music video.',
    },
    mood: {
      type: Type.STRING,
      description: 'A 1-2 word description of the song mood (e.g., Melancholic, Energetic, Hopeful).',
    }
  },
  required: ['lyrics', 'composer', 'lyricist', 'album', 'year', 'funFact', 'mood'],
};

export const fetchSongDetails = async (songTitle: string): Promise<SongDetailData> => {
  try {
    const prompt = `Provide detailed information and full lyrics for the Mayday (五月天) song titled "${songTitle}". 
    Ensure the lyrics are complete and formatted correctly with line breaks. 
    Provide the response in Chinese (Traditional for lyrics, Simplified or Traditional for info is fine).`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: songSchema,
        temperature: 0.3, // Lower temperature for more accurate factual data
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No data received from Gemini");
    }

    const data = JSON.parse(text) as SongDetailData;
    return data;
  } catch (error) {
    console.error("Error fetching song details:", error);
    throw error;
  }
};