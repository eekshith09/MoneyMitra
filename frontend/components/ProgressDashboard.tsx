
import React from 'react';
import type { Screen, Language, UserProgress } from '../types';
import { getTranslation } from '../data/translations';
import { HomeIcon } from './icons';

interface ProgressDashboardProps {
  navigate: (screen: Screen) => void;
  userProgress: UserProgress;
  language: Language;
}

const MetricCard: React.FC<{ value: number, label: string, icon: string }> = ({ value, label, icon }) => (
    <div className="bg-blue-100 text-blue-800 p-4 rounded-xl text-center">
        <div className="text-3xl mb-1">{icon}</div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm font-medium">{label}</p>
    </div>
);

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ navigate, userProgress, language }) => {
  const t = getTranslation(language);

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
       <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t.yourProgress}</h1>
        <button onClick={() => navigate('home')} className="p-2 rounded-full hover:bg-gray-200">
            <HomeIcon className="w-6 h-6 text-gray-600"/>
        </button>
      </header>
      
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="font-bold text-lg text-center mb-4">{t.yourLevel} {userProgress.level}</h2>
        <div className="grid grid-cols-3 gap-4">
            <MetricCard value={userProgress.completedLessons.length} label={t.lessonsCompleted} icon="📚"/>
            <MetricCard value={userProgress.quizzesPassed} label={t.quizzesPassed} icon="🏆"/>
            <MetricCard value={userProgress.transactionsLogged} label={t.transactionsLogged} icon="💸"/>
        </div>
      </div>

       <div className="bg-white p-6 rounded-2xl shadow-md">
           <h2 className="font-bold text-lg mb-4">Recent Activity</h2>
            <ul className="space-y-3">
               <li className="flex items-center space-x-3">
                   <div className="bg-green-100 p-2 rounded-full"><span className="text-green-600">💸</span></div>
                   <div>
                       <p className="font-semibold text-sm">Logged a new transaction</p>
                       <p className="text-xs text-gray-500">2 hours ago</p>
                   </div>
               </li>
               <li className="flex items-center space-x-3">
                   <div className="bg-yellow-100 p-2 rounded-full"><span className="text-yellow-600">🏆</span></div>
                   <div>
                       <p className="font-semibold text-sm">Passed 'Fraud Prevention' Quiz</p>
                       <p className="text-xs text-gray-500">1 day ago</p>
                   </div>
               </li>
                 <li className="flex items-center space-x-3">
                   <div className="bg-blue-100 p-2 rounded-full"><span className="text-blue-600">📚</span></div>
                   <div>
                       <p className="font-semibold text-sm">Completed 'What is UPI?' lesson</p>
                       <p className="text-xs text-gray-500">2 days ago</p>
                   </div>
               </li>
           </ul>
       </div>
    </div>
  );
};
