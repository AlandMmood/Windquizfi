import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Question, QuizResult } from '../App';
import { CheckCircle, XCircle, Clock, Target, RotateCcw, AlertCircle } from 'lucide-react';

interface ResultsScreenProps {
  results: QuizResult[];
  questions: Question[];
  onRestart: () => void;
}

export default function ResultsScreen({ results, questions, onRestart }: ResultsScreenProps) {
  const correctAnswers = results.filter(r => r.isCorrect).length;
  const incorrectAnswers = results.filter(r => !r.isCorrect && r.selectedAnswer !== null).length;
  const skippedQuestions = results.filter(r => r.selectedAnswer === null).length;
  const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
  const averageTime = totalTime / results.length;
  
  const score = Math.round((correctAnswers / questions.length) * 100);
  const passed = score >= 80;

  // Format time as minutes:seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen overflow-y-auto" dir="rtl" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #a855f7 50%, #c084fc 75%, #e879f9 100%)' }}>
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

      <div className="container mx-auto px-6 py-8">
        {/* Main Result with Vibrant Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Emoji and Status */}
          <div className="text-6xl mb-4">
            {passed ? '🎉' : '😞'}
          </div>
          
          {/* Main Score with Vibrant Card Background */}
          <motion.div
            className="inline-block p-8 rounded-3xl border-4 border-white/30 mb-4"
            style={{
              background: passed 
                ? 'linear-gradient(145deg, #10b981, #059669)' 
                : 'linear-gradient(145deg, #ef4444, #dc2626)',
              boxShadow: passed
                ? '0 30px 60px rgba(16, 185, 129, 0.4), inset 0 4px 16px rgba(255,255,255,0.3), inset 0 -4px 16px rgba(0,0,0,0.2)'
                : '0 30px 60px rgba(239, 68, 68, 0.4), inset 0 4px 16px rgba(255,255,255,0.3), inset 0 -4px 16px rgba(0,0,0,0.2)',
              filter: 'none'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h1 
              className="text-6xl font-black text-white"
              style={{
                textShadow: '4px 4px 8px rgba(0,0,0,0.5)',
                filter: 'none'
              }}
            >
              {score} / 100
            </motion.h1>
          </motion.div>
          
          <motion.p
            className="text-2xl mb-2 font-bold text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              filter: 'none'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {passed ? 'پیرۆزبایت! تۆ سەرکەوتوویت' : 'بەداخەوە! تۆ سەرنەکەوتیت'}
          </motion.p>
          
          <motion.p
            className="text-lg text-white font-medium"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)', filter: 'none' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            ({correctAnswers} / {questions.length} وەڵام دروست)
          </motion.p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Correct Answers */}
          <div 
            className="rounded-xl shadow-lg p-6 text-center border-2 border-white/30" 
            style={{ 
              background: 'linear-gradient(145deg, #10b981, #059669)',
              boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4), inset 0 2px 8px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.2)',
              filter: 'none'
            }}
          >
            <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 
              className="text-4xl text-white mb-2 font-black" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                filter: 'none'
              }}
            >
              {correctAnswers}
            </h3>
            <p className="text-white text-lg font-medium">وەڵامی دروست</p>
          </div>

          {/* Incorrect Answers */}
          <div 
            className="rounded-xl shadow-lg p-6 text-center border-2 border-white/30" 
            style={{ 
              background: 'linear-gradient(145deg, #ef4444, #dc2626)',
              boxShadow: '0 20px 40px rgba(239, 68, 68, 0.4), inset 0 2px 8px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.2)',
              filter: 'none'
            }}
          >
            <XCircle className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 
              className="text-4xl text-white mb-2 font-black" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                filter: 'none'
              }}
            >
              {incorrectAnswers}
            </h3>
            <p className="text-white text-lg font-medium">وەڵامی هەڵە</p>
          </div>

          {/* Skipped Questions */}
          <div 
            className="rounded-xl shadow-lg p-6 text-center border-2 border-white/30" 
            style={{ 
              background: 'linear-gradient(145deg, #f59e0b, #d97706)',
              boxShadow: '0 20px 40px rgba(245, 158, 11, 0.4), inset 0 2px 8px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.2)',
              filter: 'none'
            }}
          >
            <AlertCircle className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 
              className="text-4xl text-white mb-2 font-black" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                filter: 'none'
              }}
            >
              {skippedQuestions}
            </h3>
            <p className="text-white text-lg font-medium">پرسیاری جێهێڵدراو</p>
          </div>
        </motion.div>

        {/* Time Statistics */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div 
            className="rounded-xl shadow-lg p-6 text-center border-2 border-white/30" 
            style={{ 
              background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4), inset 0 2px 8px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.2)',
              filter: 'none'
            }}
          >
            <Clock className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 
              className="text-3xl text-white mb-2 font-black" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                filter: 'none'
              }}
            >
              {formatTime(totalTime)}
            </h3>
            <p className="text-white text-lg font-medium">کۆی کاتی خایاندراو</p>
          </div>

          <div 
            className="rounded-xl shadow-lg p-6 text-center border-2 border-white/30" 
            style={{ 
              background: 'linear-gradient(145deg, #8b5cf6, #7c3aed)',
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4), inset 0 2px 8px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.2)',
              filter: 'none'
            }}
          >
            <Target className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 
              className="text-3xl text-white mb-2 font-black" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                filter: 'none'
              }}
            >
              {formatTime(Math.round(averageTime))}
            </h3>
            <p className="text-white text-lg font-medium">مامناوەندی کات بۆ هەر پرسیار</p>
          </div>
        </motion.div>

        {/* Detailed Results */}
        <motion.div
          className="rounded-xl shadow-lg p-6 mb-6 border-2 border-white/30"
          style={{ 
            background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.8), inset 0 -2px 8px rgba(0,0,0,0.1)',
            filter: 'none'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 
            className="text-xl mb-4 text-center text-gray-800 font-black" 
            style={{ 
              textShadow: '2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(0,0,0,0.1)',
              filter: 'none'
            }}
          >
            ڕاپۆرتی وردی وەڵامەکان
          </h3>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {results.map((result, index) => {
              const question = questions[index];
              const selectedAnswer = result.selectedAnswer;
              
              return (
                <div 
                  key={result.questionId} 
                  className={`p-4 rounded-lg border-r-4`}
                  style={{ 
                    background: result.isCorrect 
                      ? 'linear-gradient(145deg, #dcfce7, #bbf7d0)' 
                      : selectedAnswer === null
                      ? 'linear-gradient(145deg, #fef3c7, #fde68a)'
                      : 'linear-gradient(145deg, #fecaca, #fca5a5)',
                    borderRightColor: result.isCorrect ? '#10b981' : selectedAnswer === null ? '#f59e0b' : '#ef4444',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1), inset 0 1px 4px rgba(255,255,255,0.8)',
                    filter: 'none'
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-base text-gray-700 font-medium">{formatTime(result.timeSpent)}</span>
                    <span className="text-base text-gray-700 font-medium">پرسیار {index + 1}</span>
                  </div>
                  
                  <p className="text-base text-gray-800 mb-2 text-right font-medium">
                    {question.question}
                  </p>
                  
                  <div className="text-sm text-right">
                    {selectedAnswer === null ? (
                      <span className="text-orange-700 font-bold">جێهێڵدراو</span>
                    ) : (
                      <>
                        <span className={`font-bold ${result.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          وەڵامی تۆ: {question.answers[selectedAnswer].text}
                        </span>
                        {!result.isCorrect && (
                          <div className="text-green-700 mt-1 font-bold">
                            وەڵامی دروست: {question.answers.find(a => a.isCorrect)?.text}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Restart Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.button
            onClick={onRestart}
            className="px-12 py-4 rounded-xl text-xl text-white font-bold border-2 border-white/30 transform transition-all duration-300 flex items-center gap-3 mx-auto"
            style={{ 
              background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4), inset 0 2px 8px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.2)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              filter: 'none'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(59, 130, 246, 0.5), inset 0 2px 8px rgba(255,255,255,0.4), inset 0 -2px 8px rgba(0,0,0,0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw className="w-6 h-6" />
            دووبارە دەست پێکردن
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}