
import React from 'react';
import type { Screen, Language, UserProgress } from '../types';
import { getTranslation } from '../data/translations';
import { HomeIcon } from './icons';

interface RewardsScreenProps {
  navigate: (screen: Screen) => void;
  userProgress: UserProgress;
  language: Language;
}

const Badge: React.FC<{ icon: string, name: string, earned: boolean }> = ({ icon, name, earned }) => (
    <div className={`text-center p-4 rounded-xl ${earned ? 'bg-yellow-100 border border-yellow-300' : 'bg-gray-100'}`}>
        <div className={`text-5xl mb-2 ${!earned && 'opacity-30'}`}>{icon}</div>
        <p className={`font-semibold text-sm ${earned ? 'text-yellow-800' : 'text-gray-500'}`}>{name}</p>
    </div>
);


export const RewardsScreen: React.FC<RewardsScreenProps> = ({ navigate, userProgress, language }) => {
  const t = getTranslation(language);
  const allBadges = [
      { id: 'first-lesson', icon: '🎓', name: t.firstLesson },
      { id: 'quiz-master', icon: '🏆', name: t.quizMaster },
      { id: 'saver', icon: '💰', name: t.smartSaver },
      { id: 'learning-champion', icon: '📚', name: t.learningChampion },
  ];

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t.rewards}</h1>
        <button onClick={() => navigate('home')} className="p-2 rounded-full hover:bg-gray-200">
            <HomeIcon className="w-6 h-6 text-gray-600"/>
        </button>
      </header>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="font-bold text-lg mb-4 text-center">{t.yourBadges}</h2>
        <div className="grid grid-cols-2 gap-4">
            {allBadges.map(badge => (
                <Badge 
                    key={badge.id}
                    icon={badge.icon}
                    name={badge.name}
                    earned={userProgress.badges.includes(badge.id)}
                />
            ))}
        </div>
      </div>
    </div>
  );
};
