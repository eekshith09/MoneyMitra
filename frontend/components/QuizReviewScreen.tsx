
import React from 'react';
import type { Screen, Language, QuizQuestion, UserAnswer } from '../types';
import { getTranslation } from '../data/translations';
import { CheckCircle, XCircle } from './icons';

interface QuizReviewScreenProps {
  navigate: (screen: Screen) => void;
  questions: QuizQuestion[];
  userAnswers: UserAnswer[];
  score: number;
  language: Language;
}

export const QuizReviewScreen: React.FC<QuizReviewScreenProps> = ({ navigate, questions, userAnswers, score, language }) => {
  const t = getTranslation(language);
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 max-w-md mx-auto">
        <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-full mb-4">
                <i className="fa-solid fa-trophy text-5xl text-white"></i>
            </div>
            <h1 className="text-3xl font-bold">{t.congratulations}</h1>
            <p className="text-slate-400">{t.yourScore}</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mb-6">
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                    <p className="text-2xl font-bold text-blue-400">{total}</p>
                    <p className="text-xs text-slate-400">{t.totalQuestions}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-green-400">{score}</p>
                    <p className="text-xs text-slate-400">{t.correctAnswers}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-yellow-400">{percentage}%</p>
                    <p className="text-xs text-slate-400">Score</p>
                </div>
            </div>
            <div className="bg-slate-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{width: `${percentage}%`}}></div>
            </div>
             <p className="text-center mt-4 text-lg font-semibold text-yellow-400">+ {score * 50} 🪙</p>
        </div>

        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{t.reviewYourAnswers}</h2>
            <div className="space-y-4">
                {questions.map((q, index) => {
                    const userAnswer = userAnswers.find(a => a.questionId === q.id);
                    const isCorrect = userAnswer?.isCorrect;
                    
                    return (
                        <div key={q.id} className="bg-slate-800 p-4 rounded-lg">
                            <p className="font-semibold mb-3">{index + 1}. {q.question}</p>
                            {isCorrect ? (
                                <div className="border-l-4 border-green-500 pl-3">
                                    <div className="flex items-center gap-2 text-green-400 mb-2">
                                        <CheckCircle className="w-5 h-5"/>
                                        <p><strong>{t.yourAnswer}:</strong> {q.options[userAnswer!.selectedIndex]}</p>
                                    </div>
                                    <p className="text-sm text-slate-400">💡 {q.explanation.correct}</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    <div className="border-l-4 border-red-500 pl-3">
                                        <div className="flex items-center gap-2 text-red-400 mb-2">
                                            <XCircle className="w-5 h-5"/>
                                            <p><strong>{t.yourAnswer}:</strong> {q.options[userAnswer!.selectedIndex]}</p>
                                        </div>
                                        <p className="text-sm text-slate-400">💡 {q.explanation.incorrect[userAnswer!.selectedIndex] || "This option is incorrect."}</p>
                                    </div>
                                    <div className="border-l-4 border-green-500 pl-3">
                                        <div className="flex items-center gap-2 text-green-400 mb-2">
                                            <CheckCircle className="w-5 h-5"/>
                                            <p><strong>{t.correctAnswer}:</strong> {q.options[q.correctAnswerIndex]}</p>
                                        </div>
                                        <p className="text-sm text-slate-400">💡 {q.explanation.correct}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="flex gap-4">
            <button onClick={() => navigate('quiz')} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">{t.tryAgain}</button>
            <button onClick={() => navigate('home')} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">{t.home}</button>
        </div>
    </div>
  );
};
