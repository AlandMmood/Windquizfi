import { motion } from 'framer-motion';
import { Question, QuizResult } from '../App';

interface ResultsScreenProps {
  results: QuizResult[];
  questions: Question[];
  onRestart: () => void;
}

export default function ResultsScreen({ results, questions, onRestart }: ResultsScreenProps) {
  const correctAnswers = results.filter(result => result.isCorrect).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = percentage >= 80;
  const skippedQuestions = results.filter(result => result.selectedAnswer === null).length;
  const averageTime = Math.round(results.reduce((sum, result) => sum + result.timeSpent, 0) / results.length);

  return (
    <div className="min-h-screen bg-slate-100 p-6" dir="rtl">
      {/* Professional 3D Banner */}
      <div className="relative py-3 overflow-hidden flex-shrink-0 mb-8 rounded-xl">
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #06b6d4 50%, #0891b2 75%, #1e40af 100%)',
            boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.2), inset 0 -4px 8px rgba(0,0,0,0.2), 0 8px 32px rgba(59, 130, 246, 0.3)'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-10 rounded-xl"
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

      <div className="max-w-4xl mx-auto">
        {/* Main Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          style={{
            background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 2px 8px rgba(255,255,255,0.3)'
          }}
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-6xl mb-4"
            >
              {passed ? '🎉' : '😞'}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-4xl mb-2 ${passed ? 'text-green-600' : 'text-red-600'}`}
            >
              {passed ? 'تبریک! سەرکەوتوو بوویت' : 'داخ! سەرکەوتوو نەبوویت'}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600"
            >
              {passed 
                ? 'تۆ شایستەی وەرگرتنی مۆڵەتی شۆفێریت'
                : 'پێویستە زیاتر ڕاهێنان بکەیت'
              }
            </motion.p>
          </div>

          {/* Score Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div 
              className="relative w-40 h-40 rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(${passed ? '#22c55e' : '#ef4444'} ${percentage * 3.6}deg, #e5e7eb 0deg)`,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 4px 16px rgba(255,255,255,0.3)'
              }}
            >
              <div 
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center"
                style={{
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1), inset 0 2px 8px rgba(255,255,255,0.5)'
                }}
              >
                <span className="text-3xl font-black text-gray-800">
                  {percentage}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {/* Statistics Card */}
          <div 
            className="bg-white rounded-xl p-6"
            style={{
              background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1), inset 0 2px 8px rgba(255,255,255,0.3)'
            }}
          >
            <h3 className="text-xl mb-4 text-gray-800 text-center">ئامارەکانی تاقیکردنەوە</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-gray-700">وەڵامی دروست:</span>
                <span className="font-black text-green-600">{correctAnswers} لە {totalQuestions}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="text-gray-700">وەڵامی هەڵە:</span>
                <span className="font-black text-red-600">{totalQuestions - correctAnswers - skippedQuestions}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="text-gray-700">پرسیاری جێهێڵدراو:</span>
                <span className="font-black text-yellow-600">{skippedQuestions}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">ناوەندی کات بۆ پرسیار:</span>
                <span className="font-black text-blue-600">{averageTime} چرکە</span>
              </div>
            </div>
          </div>

          {/* Question Breakdown */}
          <div 
            className="bg-white rounded-xl p-6"
            style={{
              background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1), inset 0 2px 8px rgba(255,255,255,0.3)'
            }}
          >
            <h3 className="text-xl mb-4 text-gray-800 text-center">ورد بوونەوەی پرسیارەکان</h3>
            <div className="max-h-48 overflow-y-auto space-y-2">
              {results.map((result, index) => {
                const question = questions.find(q => q.id === result.questionId);
                return (
                  <div 
                    key={result.questionId}
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      result.selectedAnswer === null 
                        ? 'bg-yellow-50' 
                        : result.isCorrect 
                        ? 'bg-green-50' 
                        : 'bg-red-50'
                    }`}
                  >
                    <span className="text-sm text-gray-700">
                      پرسیاری {index + 1}
                    </span>
                    <span className={`text-sm font-medium ${
                      result.selectedAnswer === null
                        ? 'text-yellow-600'
                        : result.isCorrect
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}>
                      {result.selectedAnswer === null 
                        ? 'جێهێڵدراو'
                        : result.isCorrect 
                        ? '✓ دروست'
                        : '✗ هەڵە'
                      }
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Restart Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <motion.button
            onClick={onRestart}
            className="px-12 py-4 rounded-2xl text-xl text-white font-black border-4 border-white transform transition-all duration-300"
            style={{
              background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4), inset 0 4px 16px rgba(255,255,255,0.3), 0 0 40px rgba(59, 130, 246, 0.6)',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(59, 130, 246, 0.5), inset 0 4px 16px rgba(255,255,255,0.4), 0 0 60px rgba(59, 130, 246, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            دووبارە تاقیکردنەوە
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}