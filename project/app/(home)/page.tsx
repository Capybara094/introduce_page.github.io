"use client";
import BlurText from "@/app/(home)/BlurText";
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function HomePage() {
  const [showButton, setShowButton] = useState(false);

  const handleAnimationComplete = () => {
    setShowButton(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-12">
        <BlurText
          text="歡迎進入PawAI工程筆記!"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-center"
        />
        
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={showButton ? { filter: 'blur(0px)', opacity: 1, y: 0 } : { filter: 'blur(10px)', opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Link href="/docs" className="rounded-full bg-blue-600 px-8 py-4 text-xl font-bold text-white hover:bg-blue-700 transition-colors shadow-lg block">
            開始探索
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
