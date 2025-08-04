import { motion } from 'motion/react';

interface ProgressCirclesProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: number;
}

export default function ProgressCircles({ 
  totalQuestions, 
  currentQuestion, 
  answeredQuestions 
}: ProgressCirclesProps) {
  return (
    <div className="grid grid-cols-5 gap-4 max-w-sm">
      {Array.from({ length: totalQuestions }, (_, index) => {
        const isAnswered = index < answeredQuestions;
        const isCurrent = index === currentQuestion;
        const questionNumber = index + 1;

        let circleClass = "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-4 border-white ";
        let bgStyle = {};
        
        if (isCurrent) {
          circleClass += "text-white animate-pulse";
          bgStyle = {
            background: 'linear-gradient(145deg, #ef4444, #dc2626)',
            boxShadow: '0 8px 16px rgba(239, 68, 68, 0.3), inset 0 2px 8px rgba(255,255,255,0.2), 0 0 20px rgba(239, 68, 68, 0.4)'
          };
        } else if (isAnswered) {
          circleClass += "text-white";
          bgStyle = {
            background: 'linear-gradient(145deg, #374151, #1f2937)',
            boxShadow: '0 8px 16px rgba(0,0,0, 0.2), inset 0 2px 8px rgba(255,255,255,0.1)'
          };
        } else {
          circleClass += "text-gray-600";
          bgStyle = {
            background: 'linear-gradient(145deg, #f3f4f6, #e5e7eb)',
            boxShadow: '0 4px 8px rgba(0,0,0, 0.1), inset 0 2px 4px rgba(255,255,255,0.8)'
          };
        }

        return (
          <motion.div
            key={index}
            className={circleClass}
            style={bgStyle}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: isCurrent ? 1.1 : 1.05 }}
          >
            <span 
              className="text-lg font-black"
              style={{
                textShadow: isAnswered || isCurrent 
                  ? '1px 1px 2px rgba(0,0,0,0.5)' 
                  : '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 1px rgba(0,0,0,0.1)',
                fontWeight: '900',
                direction: 'ltr' // Force English number direction
              }}
              dir="ltr"
            >
              {questionNumber.toString().padStart(2, '0')}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}