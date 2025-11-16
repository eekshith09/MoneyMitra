
export type Screen = 'home' | 'lesson' | 'lessonLibrary' | 'quiz' | 'quizReview' | 'log' | 'rewards' | 'progress' | 'practiceUPI' | 'microGames' | 'financialHealth';
export type Language = 'hindi' | 'telugu' | 'english';

export interface UserProgress {
  points: number;
  level: number;
  lessonsCompleted: number;
  completedLessons: number[]; // Array of completed lesson IDs
  quizzesPassed: number;
  transactionsLogged: number;
  badges: string[];
}

export interface UserAnswer {
  questionId: number;
  selectedIndex: number;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: {
    correct: string;
    incorrect: string[];
  };
}
