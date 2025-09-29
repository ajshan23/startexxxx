'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollWrapper({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🔒 Listen for scroll lock/unlock events
    const handleScrollLock = (e) => {
      if (e.detail === 'lock') {
        lenis.stop();
        document.documentElement.classList.add('lenis-locked');
        document.body.classList.add('scroll-lock');
      } else {
        lenis.start();
        document.documentElement.classList.remove('lenis-locked');
        document.body.classList.remove('scroll-lock');
      }
    };

    window.addEventListener('lenis-scroll-lock', handleScrollLock);

    return () => {
      lenis.destroy();
      window.removeEventListener('lenis-scroll-lock', handleScrollLock);
    };
  }, []);

  return <>{children}</>;
}
