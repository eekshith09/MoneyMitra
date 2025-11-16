
import React from 'react';
import type { Screen, Language, UserProgress } from '../types';
import { getTranslation } from '../data/translations';
import { BookOpenIcon, HelpCircleIcon, BarChartIcon, AwardIcon } from './icons';

interface HomeScreenProps {
  navigate: (screen: Screen) => void;
  userProgress: UserProgress;
  language: Language;
  userName: string;
}

const StatCard: React.FC<{ icon: React.ReactNode, title: string, value: string, onClick: () => void }> = ({ icon, title, value, onClick }) => (
    <button onClick={onClick} className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 w-full text-left hover:bg-gray-50 transition-colors">
        <div className="bg-orange-100 text-orange-500 p-3 rounded-full">{icon}</div>
        <div>
            <h3 className="font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{value}</p>
        </div>
    </button>
);


export const HomeScreen: React.FC<HomeScreenProps> = ({ navigate, userProgress, language, userName }) => {
  const t = getTranslation(language);
  const levelProgress = (userProgress.lessonsCompleted % 5) * 20;

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
        <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{t.greeting}, {userName}!</h1>
            <p className="text-gray-500">Welcome back to MoneyMitra.</p>
        </header>

        <div className="bg-orange-500 text-white p-5 rounded-2xl mb-6 shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <p className="text-sm opacity-80">{t.yourLevel} {userProgress.level}</p>
                    <p className="text-lg font-bold">🪙 {userProgress.points} {t.coins}</p>
                </div>
                <button onClick={() => navigate('progress')} className="bg-white/20 text-xs font-bold py-1 px-3 rounded-full hover:bg-white/30 transition-colors">{t.viewProgress}</button>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2.5">
                <div className="bg-white rounded-full h-2.5" style={{ width: `${levelProgress}%` }}></div>
            </div>
        </div>

        <main className="space-y-4">
            <StatCard icon={<BookOpenIcon className="w-6 h-6" />} title={t.startLesson} value={`${userProgress.completedLessons.length}/5 ${t.lessonsCompleted}`} onClick={() => navigate('lessonLibrary')} />
            <StatCard icon={<HelpCircleIcon className="w-6 h-6" />} title={t.playQuiz} value={t.testYourKnowledge} onClick={() => navigate('quiz')} />
            <StatCard icon={<i className="fa-solid fa-money-bill-transfer w-6 h-6 text-center text-xl"></i>} title={t.logTransaction} value={t.trackSpending} onClick={() => navigate('log')} />
            <StatCard icon={<AwardIcon className="w-6 h-6" />} title={t.viewRewards} value={`${userProgress.badges.length} ${t.badgesEarned}`} onClick={() => navigate('rewards')} />
        
            <div className="grid grid-cols-2 gap-4 pt-4">
                 <button onClick={() => navigate('practiceUPI')} className="bg-purple-100 text-purple-700 p-4 rounded-xl shadow-md text-center hover:bg-purple-200 transition-colors">
                    <div className="text-3xl mb-1">🎮</div>
                    <h3 className="font-bold">{t.practiceUPI}</h3>
                    <p className="text-xs">{t.safePractice}</p>
                </button>
                 <button onClick={() => navigate('microGames')} className="bg-pink-100 text-pink-700 p-4 rounded-xl shadow-md text-center hover:bg-pink-200 transition-colors">
                    <div className="text-3xl mb-1">🎯</div>
                    <h3 className="font-bold">{t.playGames}</h3>
                    <p className="text-xs">{t.learnByPlaying}</p>
                </button>
            </div>

            <button onClick={() => navigate('financialHealth')} className="w-full bg-green-100 text-green-800 p-4 rounded-xl shadow-md flex items-center justify-between hover:bg-green-200 transition-colors mt-4">
                <div>
                    <h3 className="font-bold">{t.financialHealth}</h3>
                    <p className="text-sm">{t.trackMoneyHabits}</p>
                </div>
                <BarChartIcon className="w-8 h-8"/>
            </button>
        </main>
    </div>
  );
};
