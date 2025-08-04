import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  initialTime: number;
  onTimeUp: () => void;
  onTimeUpdate: (timeSpent: number) => void;
  isActive: boolean;
}

export default function CountdownTimer({ initialTime, onTimeUp, onTimeUpdate, isActive }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    onTimeUpdate(initialTime - timeLeft);
  }, [timeLeft, initialTime, onTimeUpdate]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeUp]);

  const percentage = (timeLeft / initialTime) * 100;
  const strokeColor = timeLeft <= 10 ? '#ef4444' : timeLeft <= 20 ? '#f59e0b' : '#22c55e';

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            stroke={strokeColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={339.292}
            strokeDashoffset={339.292 - (339.292 * percentage) / 100}
            initial={{ strokeDashoffset: 339.292 }}
            animate={{ strokeDashoffset: 339.292 - (339.292 * percentage) / 100 }}
            transition={{ duration: 0.5 }}
            style={{
              filter: `drop-shadow(0 0 8px ${strokeColor}40)`
            }}
          />
        </svg>
        
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-3xl font-black text-gray-800">
            {timeLeft}
          </span>
        </div>
      </div>
      
      <span className="text-lg text-gray-600 text-center font-medium">
        کاتی ماوە
      </span>
    </div>
  );
}