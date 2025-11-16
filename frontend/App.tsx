
import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { LessonLibraryScreen } from './components/LessonLibraryScreen';
import { EnhancedLessonScreen } from './components/EnhancedLessonScreen';
import { QuizScreen } from './components/QuizScreen';
import { QuizReviewScreen } from './components/QuizReviewScreen';
import { EnhancedLogTransactionScreen } from './components/EnhancedLogTransactionScreen';
import { RewardsScreen } from './components/RewardsScreen';
import { ProgressDashboard } from './components/ProgressDashboard';
import { PracticeUPIScreen } from './components/PracticeUPIScreen';
import { MicroGamesScreen } from './components/MicroGamesScreen';
import { FinancialHealthScreen } from './components/FinancialHealthScreen';
import { DriverTipsWidget } from './components/DriverTipsWidget';
import { EmergencyFraudButton } from './components/EmergencyFraudButton';
import { BadgeUnlockModal } from './components/BadgeUnlockModal';
import { CoinAnimation } from './components/CoinAnimation';
import type { Screen, Language, UserProgress, QuizQuestion, UserAnswer } from './types';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState<Language>('english');
  const [userName, setUserName] = useState('');
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedLessonId, setSelectedLessonId] = useState(1);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    points: 250,
    level: 3,
    lessonsCompleted: 2,
    completedLessons: [1, 2],
    quizzesPassed: 4,
    transactionsLogged: 12,
    badges: ['first-lesson', 'saver']
  });
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [newBadge, setNewBadge] = useState({ name: '', icon: '' });
  const [showCoinAnimation, setShowCoinAnimation] = useState(false);
  const [coinAmount, setCoinAmount] = useState(0);

  const [quizReviewData, setQuizReviewData] = useState<{
    questions: QuizQuestion[];
    userAnswers: UserAnswer[];
    score: number;
  } | null>(null);
  
  const [quizKey, setQuizKey] = useState(0);

  const handleLogin = (selectedLanguage: Language, name: string) => {
    setLanguage(selectedLanguage);
    setUserName(name);
    setIsLoggedIn(true);
  };
  
  const handleNavigate = (screen: Screen) => {
    if (screen === 'quiz') {
      setQuizKey(prev => prev + 1);
    }
    setCurrentScreen(screen);
  };

  const handleSelectLesson = (lessonId: number) => {
    setSelectedLessonId(lessonId);
  };

  const earnCoins = (coins: number) => {
    setUserProgress(prev => ({
      ...prev,
      points: prev.points + coins
    }));
    setCoinAmount(coins);
    setShowCoinAnimation(true);
  };

  const completeLesson = (lessonId: number) => {
    if (!userProgress.completedLessons.includes(lessonId)) {
        const updatedProgress = {
            ...userProgress,
            lessonsCompleted: userProgress.lessonsCompleted + 1,
            completedLessons: [...userProgress.completedLessons, lessonId],
        };
        setUserProgress(updatedProgress);
        
        if (updatedProgress.completedLessons.length === 1 && !updatedProgress.badges.includes('first-lesson')) {
            setNewBadge({ name: 'First Lesson', icon: '🎓' });
            setShowBadgeModal(true);
            setUserProgress(p => ({...p, badges: [...p.badges, 'first-lesson']}));
        }
        if (updatedProgress.completedLessons.length === 5 && !updatedProgress.badges.includes('learning-champion')) {
            setNewBadge({ name: 'Learning Champion', icon: '📚' });
            setShowBadgeModal(true);
            setUserProgress(p => ({...p, badges: [...p.badges, 'learning-champion']}));
        }
    }
  };

  const completeQuiz = (questions: QuizQuestion[], userAnswers: UserAnswer[], score: number) => {
    const points = score * 20; // 20 points per correct answer
    const updatedProgress = {
        ...userProgress,
        quizzesPassed: userProgress.quizzesPassed + 1,
        points: userProgress.points + points
    };
    setUserProgress(updatedProgress);
    earnCoins(points);
    setQuizReviewData({ questions, userAnswers, score });
    setCurrentScreen('quizReview');

    if (updatedProgress.quizzesPassed === 5 && !updatedProgress.badges.includes('quiz-master')) {
        setNewBadge({ name: 'Quiz Master', icon: '🏆' });
        setShowBadgeModal(true);
        setUserProgress(p => ({...p, badges: [...p.badges, 'quiz-master']}));
    }
  };

  const logTransaction = () => {
    const updatedProgress = {
      ...userProgress,
      transactionsLogged: userProgress.transactionsLogged + 1,
    };
    setUserProgress(updatedProgress);
    earnCoins(20);

    if (updatedProgress.transactionsLogged === 10 && !updatedProgress.badges.includes('saver')) {
      setNewBadge({ name: 'Smart Saver', icon: '💰' });
      setShowBadgeModal(true);
      setUserProgress(p => ({...p, badges: [...p.badges, 'saver']}));
    }
  };
  
  const renderScreen = () => {
      switch (currentScreen) {
          case 'home': return <HomeScreen navigate={handleNavigate} userProgress={userProgress} language={language} userName={userName} />;
          case 'lessonLibrary': return <LessonLibraryScreen navigate={handleNavigate} language={language} userProgress={userProgress} onSelectLesson={handleSelectLesson} />;
          case 'lesson': return <EnhancedLessonScreen navigate={handleNavigate} onComplete={() => completeLesson(selectedLessonId)} onEarnCoins={earnCoins} language={language} lessonId={selectedLessonId} />;
          case 'quiz': return <QuizScreen key={quizKey} navigate={handleNavigate} onComplete={completeQuiz} language={language} />;
          case 'quizReview': return quizReviewData && <QuizReviewScreen navigate={handleNavigate} questions={quizReviewData.questions} userAnswers={quizReviewData.userAnswers} score={quizReviewData.score} language={language} />;
          case 'log': return <EnhancedLogTransactionScreen navigate={handleNavigate} onComplete={logTransaction} language={language} />;
          case 'rewards': return <RewardsScreen navigate={handleNavigate} userProgress={userProgress} language={language} />;
          case 'progress': return <ProgressDashboard navigate={handleNavigate} userProgress={userProgress} language={language} />;
          case 'practiceUPI': return <PracticeUPIScreen navigate={handleNavigate} language={language} />;
          case 'microGames': return <MicroGamesScreen navigate={handleNavigate} language={language} onEarnCoins={earnCoins} />;
          case 'financialHealth': return <FinancialHealthScreen navigate={handleNavigate} language={language} userProgress={userProgress} />;
          default: return <HomeScreen navigate={handleNavigate} userProgress={userProgress} language={language} userName={userName} />;
      }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <>
          {renderScreen()}
          <DriverTipsWidget language={language} />
          <EmergencyFraudButton language={language} />
        </>
      )}
      
      <BadgeUnlockModal
        isOpen={showBadgeModal}
        onClose={() => setShowBadgeModal(false)}
        badgeName={newBadge.name}
        badgeIcon={newBadge.icon}
        language={language}
      />
      
      <CoinAnimation
        amount={coinAmount}
        show={showCoinAnimation}
        onComplete={() => setShowCoinAnimation(false)}
      />
    </div>
  );
}
