
import React, { useState, useEffect } from 'react';
import type { Screen, Language } from '../types';
import { getTranslation } from '../data/translations';
import { lessons } from '../data/lessons';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { HomeIcon } from './icons';

interface EnhancedLessonScreenProps {
  navigate: (screen: Screen) => void;
  onComplete: () => void;
  onEarnCoins: (amount: number) => void;
  language: Language;
  lessonId: number;
}

export const EnhancedLessonScreen: React.FC<EnhancedLessonScreenProps> = ({ navigate, onComplete, onEarnCoins, language, lessonId }) => {
  const t = getTranslation(language);
  const lesson = lessons.find(l => l.id === lessonId);
  const [currentStep, setCurrentStep] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  const stepContent = lesson?.steps[currentStep]?.content[language] || '';
  const { speak, isPlaying, stop } = useTextToSpeech(stepContent, language);

  useEffect(() => {
    // Stop speech when component unmounts or step changes
    return () => stop();
  }, [currentStep, stop]);

  if (!lesson) {
    return (
      <div className="p-4">
        Lesson not found. <button onClick={() => navigate('lessonLibrary')}>Go back</button>
      </div>
    );
  }

  const handleNext = () => {
    if (currentStep < lesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
      onEarnCoins(lesson.coins);
      setShowCompletion(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  if (showCompletion) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-2xl font-bold text-green-800 mb-2">{t.congratulations}</h1>
            <p className="text-gray-600 mb-4">{t.youCompletedTheLesson}</p>
            <div className="bg-yellow-200 text-yellow-800 font-bold py-2 px-4 rounded-full mb-6">
                {t.youEarned} {lesson.coins} {t.coins} 🪙
            </div>
            <button onClick={() => navigate('lessonLibrary')} className="w-full max-w-xs bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                {t.backToHome}
            </button>
        </div>
    )
  }

  const step = lesson.steps[currentStep];

  return (
    <div className="p-4 max-w-md mx-auto bg-white min-h-screen flex flex-col">
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-800 truncate">{lesson.title[language]}</h1>
            <button onClick={() => navigate('lessonLibrary')} className="p-2 rounded-full hover:bg-gray-100">
                <HomeIcon className="w-6 h-6 text-gray-600"/>
            </button>
        </header>

        <div className="flex items-center space-x-2 mb-4">
            {lesson.steps.map((_, index) => (
                <div key={index} className={`h-1.5 flex-1 rounded-full ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
            ))}
        </div>

        <main className="flex-grow flex flex-col justify-between">
            <div>
                <img src={step.image} alt={step.title[language]} className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"/>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{step.title[language]}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{step.content[language]}</p>
            </div>
            
            <div className="space-y-4">
                 <button onClick={isPlaying ? stop : speak} className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-volume-high'}`}></i>
                    <span>{isPlaying ? 'Stop' : 'Listen'}</span>
                </button>
                 <div className="flex gap-4">
                    <button onClick={() => navigate('practiceUPI')} className="flex-1 bg-purple-100 text-purple-700 py-2 px-4 rounded-lg font-semibold hover:bg-purple-200 transition-colors text-sm">🎮 {t.practiceUPI}</button>
                    <button onClick={() => navigate('microGames')} className="flex-1 bg-pink-100 text-pink-700 py-2 px-4 rounded-lg font-semibold hover:bg-pink-200 transition-colors text-sm">🎯 {t.playGames}</button>
                </div>
            </div>
        </main>
        
        <footer className="mt-6 flex justify-between items-center">
            <button onClick={handlePrev} disabled={currentStep === 0} className="py-2 px-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700 hover:bg-gray-300">
                {t.previous}
            </button>
            <span className="text-sm text-gray-500">{currentStep + 1} / {lesson.steps.length}</span>
            <button onClick={handleNext} className="py-2 px-6 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600">
                {currentStep === lesson.steps.length - 1 ? t.complete : t.next}
            </button>
        </footer>
    </div>
  );
};
