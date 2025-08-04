import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, QuizResult } from '../App';
import CountdownTimer from './CountdownTimer';
import ProgressCircles from './ProgressCircles';

interface QuizScreenProps {
  questions: Question[];
  onFinish: (results: QuizResult[]) => void;
}

export default function QuizScreen({ questions, onFinish }: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (isTransitioning || selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    // Record the result
    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect: currentQuestion.answers[answerIndex].isCorrect,
      timeSpent: timeSpent
    };

    const newResults = [...results, result];
    setResults(newResults);

    // Move to next question after a brief delay
    setTimeout(() => {
      moveToNextQuestion(newResults);
    }, 500);
  };

  const handleTimeUp = () => {
    if (selectedAnswer !== null || isTransitioning) return;
    
    // Record no answer
    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer: null,
      isCorrect: false,
      timeSpent: 60
    };

    const newResults = [...results, result];
    setResults(newResults);
    moveToNextQuestion(newResults);
  };

  const moveToNextQuestion = (newResults: QuizResult[]) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentQuestionIndex + 1 >= questions.length) {
        onFinish(newResults);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setTimeSpent(0);
        setIsTransitioning(false);
      }
    }, 300);
  };

  return (
    <div className="h-screen bg-slate-100 overflow-hidden" dir="rtl">
      {/* Professional 3D Banner */}
      <div className="relative py-2 overflow-hidden flex-shrink-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #06b6d4 50%, #0891b2 75%, #1e40af 100%)',
            boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.2), inset 0 -4px 8px rgba(0,0,0,0.2), 0 8px 32px rgba(59, 130, 246, 0.3)'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          }}
        ></div>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ 
            duration: 72, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="relative whitespace-nowrap flex items-center text-2xl text-white font-bold"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          <span className="flex items-center gap-4 mx-20">
            ناوی نوسینگەکەت لێرە ئەنوسرێت 075011111111 
            <span className="text-4xl">🚦</span>
          </span>
          <span className="flex items-center gap-4 mx-20">
            ناوی نوسینگەکەت لێرە ئەنوسرێت 075011111111 
            <span className="text-4xl">🚦</span>
          </span>
          <span className="flex items-center gap-4 mx-20">
            ناوی نوسینگەکەت لێرە ئەنوسرێت 075011111111 
            <span className="text-4xl">🚦</span>
          </span>
          <span className="flex items-center gap-4 mx-20">
            ناوی نوسینگەکەت لێرە ئەنوسرێت 075011111111 
            <span className="text-4xl">🚦</span>
          </span>
        </motion.div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Main Content Area - now on the left */}
        <div className="flex-1 p-6 flex flex-col justify-center bg-slate-100 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto w-full"
            >
              {/* Question */}
              <div className="bg-blue-500 text-white p-4 rounded-t-xl">
                <h2 className="text-lg text-right leading-relaxed">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Optimized Image if exists */}
              {currentQuestion.image && (
                <div className="bg-white p-3 flex justify-center">
                  <img
                    src={currentQuestion.image}
                    alt="سوالی وێنە"
                    className="max-w-xs max-h-48 object-contain rounded-lg shadow-md"
                    loading="lazy"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '320px',
                      maxHeight: '192px'
                    }}
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Answers - A/B/C icons moved to left side for RTL */}
              <div className="bg-white p-4 rounded-b-xl shadow-lg space-y-3">
                {currentQuestion.answers.map((answer, index) => {
                  const isSelected = selectedAnswer === index;
                  
                  let buttonClass = "w-full p-3 rounded-lg text-right transition-all duration-200 border-2 ";
                  
                  if (selectedAnswer === null) {
                    buttonClass += "border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 cursor-pointer";
                  } else if (isSelected) {
                    buttonClass += "border-blue-500 bg-blue-100 text-blue-800";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 opacity-50";
                  }

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null || isTransitioning}
                      className={buttonClass}
                      style={{ minHeight: '50px' }}
                      whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                      whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                    >
                      <div className="flex items-center justify-between">
                        {/* A/B/C Icon moved to LEFT side for RTL */}
                        <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1 text-center text-base">{answer.text}</span>
                        <div className="w-8"></div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Sidebar - Progress and Timer */}
        <div className="w-72 bg-white shadow-lg p-4 flex flex-col items-center">
          <CountdownTimer
            key={currentQuestionIndex}
            initialTime={60}
            onTimeUp={handleTimeUp}
            onTimeUpdate={setTimeSpent}
            isActive={selectedAnswer === null && !isTransitioning}
          />
          
          <div className="mt-6">
            <ProgressCircles
              totalQuestions={questions.length}
              currentQuestion={currentQuestionIndex}
              answeredQuestions={results.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}