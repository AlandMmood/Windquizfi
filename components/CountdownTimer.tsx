import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface CountdownTimerProps {
  initialTime: number;
  onTimeUp: () => void;
  onTimeUpdate: (time: number) => void;
  isActive: boolean;
}

export default function CountdownTimer({ 
  initialTime, 
  onTimeUp, 
  onTimeUpdate, 
  isActive 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset when component mounts or isActive changes
    if (isActive) {
      setTimeLeft(initialTime);
      startTimeRef.current = Date.now();
    }
  }, [isActive, initialTime]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - (startTimeRef.current || now)) / 1000);
      const remaining = Math.max(0, initialTime - elapsed);
      
      setTimeLeft(remaining);
      onTimeUpdate(elapsed);
      
      if (remaining <= 0) {
        onTimeUp();
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 100); // More frequent updates for accuracy

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, timeLeft, initialTime, onTimeUp, onTimeUpdate]);

  const percentage = (timeLeft / initialTime) * 100;
  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Dynamic color based on time left
  let strokeColor = '#10b981'; // green
  let bgGradient = 'linear-gradient(145deg, #f0fdf4, #dcfce7)';
  let shadowColor = 'rgba(16, 185, 129, 0.2)';
  
  if (percentage < 50) {
    strokeColor = '#f59e0b'; // yellow
    bgGradient = 'linear-gradient(145deg, #fffbeb, #fef3c7)';
    shadowColor = 'rgba(245, 158, 11, 0.2)';
  }
  if (percentage < 25) {
    strokeColor = '#ef4444'; // red
    bgGradient = 'linear-gradient(145deg, #fef2f2, #fecaca)';
    shadowColor = 'rgba(239, 68, 68, 0.2)';
  }

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative w-32 h-32 rounded-full border-4 border-white"
        style={{ 
          background: bgGradient,
          boxShadow: `0 20px 40px ${shadowColor}, inset 0 2px 8px rgba(255,255,255,0.8), inset 0 -2px 8px rgba(0,0,0,0.1)`
        }}
      >
        <svg className="w-32 h-32 transform -rotate-90 absolute inset-0" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
            style={{
              filter: 'none'
            }}
          />
          {/* Progress circle */}
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            stroke={strokeColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{
              filter: 'none'
            }}
          />
        </svg>
        {/* Time display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-4xl font-black"
            style={{
              color: '#1f2937',
              textShadow: '2px 2px 4px rgba(255,255,255,0.8), -1px -1px 2px rgba(0,0,0,0.2)',
              filter: 'none'
            }}
            animate={{ 
              scale: timeLeft <= 10 && timeLeft > 0 ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 0.5, repeat: timeLeft <= 10 && timeLeft > 0 ? Infinity : 0 }}
          >
            {timeLeft}
          </motion.span>
        </div>
      </div>
      <p 
        className="text-sm text-gray-600 mt-4 font-medium"
        style={{ 
          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
          filter: 'none'
        }}
      >
        چرکە
      </p>
    </div>
  );
}