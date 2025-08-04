import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { questions } from './components/QuestionData';

export type Answer = {
  text: string;
  isCorrect: boolean;
}

export type Question = {
  id: number;
  question: string;
  answers: Answer[];
  image?: string;
}

export type QuizResult = {
  questionId: number;
  selectedAnswer: number | null;
  isCorrect: boolean;
  timeSpent: number;
}

type Screen = 'welcome' | 'quiz' | 'results';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [results, setResults] = useState<QuizResult[]>([]);

  const startQuiz = () => {
    setCurrentScreen('quiz');
    setResults([]);
  };

  const finishQuiz = (quizResults: QuizResult[]) => {
    setResults(quizResults);
    setCurrentScreen('results');
  };

  const restartQuiz = () => {
    setCurrentScreen('welcome');
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={startQuiz} />
      )}
      {currentScreen === 'quiz' && (
        <QuizScreen 
          questions={questions} 
          onFinish={finishQuiz} 
        />
      )}
      {currentScreen === 'results' && (
        <ResultsScreen 
          results={results} 
          questions={questions}
          onRestart={restartQuiz} 
        />
      )}
    </div>
  );
}