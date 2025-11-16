
import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import { tips } from '../data/tips';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

export const DriverTipsWidget: React.FC<{ language: Language }> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  
  const currentTips = tips[language];
  const { speak, isPlaying, stop } = useTextToSpeech(currentTips[tipIndex].content, language);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen(true);
      setTipIndex(prev => (prev + 1) % currentTips.length);
    }, 120000); // Show every 2 minutes
    return () => clearInterval(timer);
  }, [currentTips.length]);
  
  useEffect(() => {
    if (isOpen) {
        speak();
    } else {
        stop();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const tip = currentTips[tipIndex];

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4 bg-yellow-400 text-black w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl animate-pulse z-40">
        💡
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 max-w-[90vw] bg-white rounded-lg shadow-xl z-40 animate-slide-in-bottom">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-yellow-800">💡 {tip.title}</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <p className="text-sm text-gray-700">{tip.content}</p>
        <div className="mt-4 flex justify-between items-center">
            <button onClick={isPlaying ? stop : speak} className="text-sm bg-gray-200 px-3 py-1 rounded-md">{isPlaying ? '⏹️' : '🔊'}</button>
            <button onClick={() => setTipIndex((tipIndex + 1) % currentTips.length)} className="text-sm font-semibold text-blue-600">Next Tip →</button>
        </div>
      </div>
    </div>
  );
};
