import { motion } from 'framer-motion';

interface ProgressCirclesProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: number;
}

export default function ProgressCircles({ totalQuestions, currentQuestion, answeredQuestions }: ProgressCirclesProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg mb-4 text-center text-gray-700">
        پێشکەوتنی تاقیکردنەوە
      </h3>
      
      <div className="grid grid-cols-5 gap-3 mb-4">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const questionNumber = index + 1;
          const isAnswered = index < answeredQuestions;
          const isCurrent = index === currentQuestion;
          
          let bgColor = '#e5e7eb'; // Default gray
          let textColor = '#6b7280';
          let shadowColor = 'rgba(0,0,0,0.1)';
          
          if (isAnswered) {
            bgColor = '#1f2937'; // Black for answered
            textColor = '#ffffff';
            shadowColor = 'rgba(31, 41, 55, 0.4)';
          } else if (isCurrent) {
            bgColor = '#3b82f6'; // Blue for current
            textColor = '#ffffff';
            shadowColor = 'rgba(59, 130, 246, 0.4)';
          }
          
          return (
            <motion.div
              key={questionNumber}
              className="relative flex items-center justify-center rounded-full w-12 h-12 border-2 border-white"
              style={{
                background: `linear-gradient(145deg, ${bgColor}, ${bgColor}dd)`,
                boxShadow: `0 4px 12px ${shadowColor}, inset 0 2px 4px rgba(255,255,255,0.2)`,
                color: textColor,
                fontSize: '14px',
                fontWeight: 'bold'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {questionNumber}
              
              {/* 3D effect inner shadow */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </motion.div>
          );
        })}
      </div>
      
      <div className="text-sm text-gray-600 text-center space-y-1">
        <div>
          پرسیاری ئێستا: {currentQuestion + 1}/{totalQuestions}
        </div>
        <div>
          وەڵامدراوەتەوە: {answeredQuestions}
        </div>
      </div>
    </div>
  );
}