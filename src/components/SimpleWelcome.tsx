import React from 'react';

interface SimpleWelcomeProps {
  onStart: () => void;
}

export default function SimpleWelcome({ onStart }: SimpleWelcomeProps) {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-8" dir="rtl">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl text-gray-800 mb-6">بەخێربێیت</h1>
        <p className="text-lg text-gray-600 mb-8">تاقیکردنەوەی تیۆری شۆفێری</p>
        <button 
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-xl"
        >
          دەست پێکردن
        </button>
      </div>
    </div>
  );
}