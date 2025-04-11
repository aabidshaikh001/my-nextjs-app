'use client';


import { useState, useEffect } from 'react';
import Image from 'next/image';

const Warning = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open the modal on initial load
  // Open the modal with a 2-second delay on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    isOpen && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="relative bg-white rounded-lg p-6 shadow-xl max-w-lg w-full h-auto transform transition-transform duration-500 ease-out scale-105">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full text-4xl"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <Image
            src="/warning.png" // Replace with your image path
            alt="Warning"
            className="w-full h-[500px] object-contain rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    )
  );
};

export default Warning;
