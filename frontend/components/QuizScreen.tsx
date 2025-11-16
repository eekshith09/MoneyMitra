
import React, { useState, useEffect } from 'react';
import type { Screen, Language, QuizQuestion, UserAnswer } from '../types';
import { getTranslation } from '../data/translations';
import { getRandomizedQuestions } from '../data/quizQuestions';
import { HomeIcon } from './icons';

interface QuizScreenProps {
  navigate: (screen: Screen) => void;
  onComplete: (questions: QuizQuestion[], userAnswers: UserAnswer[], score: number) => void;
  language: Language;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ navigate, onComplete, language }) => {
  const t = getTranslation(language);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  useEffect(() => {
    setQuestions(getRandomizedQuestions(language));
  }, [language]);

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }
  
  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;

    const correct = index === questions[currentQuestionIndex].correctAnswerIndex;
    setSelectedAnswer(index);
    setIsCorrect(correct);
    
    const answer: UserAnswer = {
        questionId: questions[currentQuestionIndex].id,
        selectedIndex: index,
        isCorrect: correct,
    };
    setUserAnswers([...userAnswers, answer]);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        onComplete(questions, [...userAnswers, answer], correct ? score + 1 : score);
      }
    }, 1500);
  };
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 flex flex-col max-w-md mx-auto">
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.quiz}
            </h1>
            <button onClick={() => navigate('home')} className="p-2 rounded-full hover:bg-slate-700">
                <HomeIcon className="w-6 h-6"/>
            </button>
        </header>

        <div className="flex items-center gap-2 mb-6">
            {questions.map((_, index) => (
                <div key={index} className={`h-1 flex-1 rounded-full ${index < currentQuestionIndex ? 'bg-green-500' : index === currentQuestionIndex ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
            ))}
        </div>

        <main className="flex-grow flex flex-col justify-center">
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mb-6">
                <p className="text-lg font-semibold leading-relaxed">{currentQuestion.question}</p>
            </div>
            
            <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                    let buttonClass = 'bg-slate-700 hover:bg-slate-600';
                    if (selectedAnswer !== null) {
                        if (index === selectedAnswer) {
                            buttonClass = isCorrect ? 'bg-green-600' : 'bg-red-600';
                        } else if (index === currentQuestion.correctAnswerIndex) {
                            buttonClass = 'bg-green-600';
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={selectedAnswer !== null}
                            className={`w-full text-left p-4 rounded-lg font-semibold transition-all duration-300 transform ${buttonClass} ${selectedAnswer === null ? 'hover:scale-105' : ''}`}
                        >
                           {option}
                        </button>
                    );
                })}
            </div>
        </main>
    </div>
  );
};
