
import { useState, useEffect, useCallback } from 'react';
import type { Language } from '../types';

export const useTextToSpeech = (text: string, lang: Language) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);
  
  const langCodeMap = {
    english: 'en-IN',
    hindi: 'hi-IN',
    telugu: 'te-IN',
  };

  const speak = useCallback(() => {
    if (!isSupported || !text) return;
    
    const synthesis = window.speechSynthesis;
    if (synthesis.speaking) {
      synthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synthesis.getVoices();
    const targetLangCode = langCodeMap[lang];
    
    // Find a voice that matches the language
    let selectedVoice = voices.find(voice => voice.lang === targetLangCode);
    
    // If no specific voice is found, try a more generic one or default
    if (!selectedVoice) {
      selectedVoice = voices.find(voice => voice.lang.startsWith(lang.substring(0, 2)));
    }

    if(selectedVoice) {
        utterance.voice = selectedVoice;
    }

    utterance.lang = targetLangCode;
    utterance.pitch = 1;
    utterance.rate = 0.9;
    utterance.volume = 1;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    synthesis.speak(utterance);
  }, [text, lang, isSupported]);

  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, [isSupported]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return { speak, stop, isPlaying, isSupported };
};
