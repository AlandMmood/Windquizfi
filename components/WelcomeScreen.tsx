import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="h-screen flex flex-col bg-slate-100 overflow-hidden" dir="rtl">
      {/* Professional 3D Banner - vibrant and professional */}
      <div className="relative py-3 overflow-hidden flex-shrink-0">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 bg-slate-100 relative min-h-0">
        {/* Header Text with Traffic Light Logo - moved to left corner */}
        <div className="absolute top-4 left-6 flex items-center gap-2">
          <h2 className="text-2xl text-gray-700">تاقیکردنەوەی نمونەیی تیۆری</h2>
          <span className="text-3xl">🚦</span>
        </div>

        {/* Main Title - reduced by half */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl mb-6 text-center text-gray-800"
        >
          بەخێربێیت
        </motion.h1>

        {/* Merged Guidelines and Teacher Image Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl w-full mb-8"
        >
          <div 
            className="bg-white rounded-xl shadow-lg p-6 flex items-stretch gap-0"
            style={{
              background: 'linear-gradient(145deg, #ffffff, #f1f5f9)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 2px 8px rgba(255,255,255,0.3)'
            }}
          >
            {/* Guidelines Content */}
            <div className="flex-1 pr-6" dir="rtl">
              <h3 className="text-2xl mb-4 text-center text-gray-800">ڕێنماییەکانی تاقیکردنەوە:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div 
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
                      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 4px rgba(255,255,255,0.5)'
                    }}
                  ></div>
                  <span className="text-lg text-gray-700 text-right">تاقیکردنەوەکە پێکدێت لە ٢٥ پرسیار</span>
                </div>
                <div className="flex items-start gap-3">
                  <div 
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
                      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 4px rgba(255,255,255,0.5)'
                    }}
                  ></div>
                  <span className="text-lg text-gray-700 text-right">بۆ هەر پرسیارێک تۆ ٦٠ چرکە کاتت هەیە</span>
                </div>
                <div className="flex items-start gap-3">
                  <div 
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
                      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 4px rgba(255,255,255,0.5)'
                    }}
                  ></div>
                  <span className="text-lg text-gray-700 text-right">تەنها یەک جار کلیک بکە لە وەڵامی دروست</span>
                </div>
                <div className="flex items-start gap-3">
                  <div 
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
                      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 4px rgba(255,255,255,0.5)'
                    }}
                  ></div>
                  <span className="text-lg text-gray-700 text-right">پێویستە لە کۆتاییدا ٨٠٪ی پرسیارەکان بە دروستی وەڵام بدەیتەوە بۆ ئەوەی بە دەرچوو هەژمار بکرێیت</span>
                </div>
                <div className="flex items-start gap-3">
                  <div 
                    className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, #3b82f6, #2563eb)',
                      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3), inset 0 1px 4px rgba(255,255,255,0.5)'
                    }}
                  ></div>
                  <span className="text-lg text-gray-700 text-right">لە کۆتاییدا ئەنجامەکەت بۆ دەردەخەین</span>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-4"></div>

            {/* Traffic Police Image - adjusted height to match guidelines */}
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '280px', height: '320px' }}>
              <ImageWithFallback
                src="https://i.postimg.cc/7h0PxzDb/happy-indonesian-police-character-stand-beside-traffic-lamp-vector.jpg"
                alt="Traffic Police Character"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Start Button - 3D Glowing Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={onStart}
            className="px-16 py-4 rounded-2xl text-2xl text-white font-black border-4 border-white transform transition-all duration-300"
            style={{
              background: 'linear-gradient(145deg, #22c55e, #16a34a)',
              boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4), inset 0 4px 16px rgba(255,255,255,0.3), 0 0 40px rgba(34, 197, 94, 0.6)',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(34, 197, 94, 0.5), inset 0 4px 16px rgba(255,255,255,0.4), 0 0 60px rgba(34, 197, 94, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            دەست پێکردن
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}