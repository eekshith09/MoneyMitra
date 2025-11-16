
import React from 'react';
import type { Screen, Language, UserProgress } from '../types';
import { getTranslation } from '../data/translations';
import { lessons } from '../data/lessons';
import { HomeIcon, CheckCircle } from './icons';

interface LessonLibraryScreenProps {
  navigate: (screen: Screen) => void;
  language: Language;
  userProgress: UserProgress;
  onSelectLesson: (lessonId: number) => void;
}

export const LessonLibraryScreen: React.FC<LessonLibraryScreenProps> = ({ navigate, language, userProgress, onSelectLesson }) => {
  const t = getTranslation(language);
  const totalLessons = lessons.length;
  const completedCount = userProgress.completedLessons.length;

  const handleLessonSelect = (lessonId: number, isLocked: boolean) => {
    if (!isLocked) {
      onSelectLesson(lessonId);
      navigate('lesson');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t.lessonLibrary}</h1>
        <button onClick={() => navigate('home')} className="p-2 rounded-full hover:bg-gray-200">
            <HomeIcon className="w-6 h-6 text-gray-600"/>
        </button>
      </header>

      <div className="mb-6">
        <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{completedCount}/{totalLessons}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(completedCount / totalLessons) * 100}%` }}></div>
        </div>
      </div>

      <main className="space-y-4">
        {lessons.map((lesson, index) => {
          const isCompleted = userProgress.completedLessons.includes(lesson.id);
          const isLocked = index > userProgress.completedLessons.length;
          
          return (
            <div
              key={lesson.id}
              onClick={() => handleLessonSelect(lesson.id, isLocked)}
              className={`p-4 rounded-xl shadow-md flex items-center space-x-4 transition-all ${
                isLocked ? 'bg-gray-200 opacity-60' : 'bg-white hover:shadow-lg cursor-pointer'
              }`}
            >
              <div className={`text-3xl p-3 rounded-full ${isLocked ? 'bg-gray-300' : 'bg-blue-100'}`}>
                {isLocked ? '🔒' : isCompleted ? '✅' : '📚'}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{lesson.title[language]}</h3>
                <div className="text-xs text-gray-500 flex items-center space-x-2 mt-1">
                    <span>{lesson.duration} min</span>
                    <span className="text-gray-300">|</span>
                    <span className="font-semibold text-yellow-500">🪙 {lesson.coins}</span>
                </div>
              </div>
              {isCompleted && !isLocked && <CheckCircle className="w-6 h-6 text-green-500" />}
            </div>
          );
        })}
      </main>
    </div>
  );
};
