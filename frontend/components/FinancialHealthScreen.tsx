
import React from 'react';
import type { Screen, Language, UserProgress } from '../types';
import { getTranslation } from '../data/translations';
import { HomeIcon } from './icons';

export const FinancialHealthScreen: React.FC<{ navigate: (screen: Screen) => void; language: Language; userProgress: UserProgress }> = ({ navigate, language, userProgress }) => {
  const t = getTranslation(language);
  const score = 71; // Mock score
  
  const metrics = [
      { label: t.savingsHabit, value: 75 },
      { label: t.spendingPattern, value: 60 },
      { label: t.cashUPIBalance, value: 80 },
      { label: t.incomeStability, value: 70 },
  ];
  
  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <button onClick={() => navigate('home')} className="p-2 rounded-full hover:bg-gray-200">
            <i className="fa-solid fa-arrow-left text-gray-600"></i>
        </button>
        <h1 className="text-xl font-bold text-gray-800">{t.financialHealth}</h1>
        <div className="w-8"></div>
      </header>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-6 flex flex-col items-center">
        <h2 className="font-semibold text-gray-600 mb-2">{t.overallScore}</h2>
        <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-gray-200" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-green-500" strokeWidth="3" fill="none" strokeDasharray={`${score}, 100`} strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-green-600">{score}</span>
                <span className="text-sm text-gray-500">/ 100</span>
            </div>
        </div>
        <p className="mt-2 text-lg font-bold text-green-600">{t.good}</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="font-bold mb-4">Key Metrics</h3>
        <div className="space-y-4">
            {metrics.map(metric => (
                <div key={metric.label}>
                    <div className="flex justify-between text-sm font-medium mb-1">
                        <span>{metric.label}</span>
                        <span>{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: `${metric.value}%`}}></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
       <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="font-bold mb-4">{t.insightsAndAlerts}</h3>
        <ul className="space-y-3">
            <li className="flex items-start space-x-3">
                <div className="text-green-500 mt-1">✅</div>
                <p className="text-sm text-gray-700">{t.greatSaved}</p>
            </li>
            <li className="flex items-start space-x-3">
                <div className="text-red-500 mt-1">⚠️</div>
                <p className="text-sm text-gray-700">{t.lateNightSpending}</p>
            </li>
        </ul>
      </div>
    </div>
  );
};
