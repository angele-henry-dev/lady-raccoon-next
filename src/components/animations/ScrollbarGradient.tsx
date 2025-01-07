"use client";

import { useEffect } from 'react';

const ScrollbarGradient = () => {
  useEffect(() => {
    const updateScrollColor = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / scrollHeight;

      const yellow = [255, 255, 0];
      const pink = [237, 18, 113];

      const mixColors = (color1: number[], color2: number[], ratio: number) =>
        color1.map((c, i) => Math.round(c * (1 - ratio) + color2[i] * ratio));

      const startColor = mixColors(yellow, pink, scrollFraction);
      const endColor = mixColors(yellow, pink, scrollFraction);

      document.documentElement.style.setProperty(
        '--scroll-color-start',
        `rgb(${startColor.join(',')})`
      );
      document.documentElement.style.setProperty(
        '--scroll-color-end',
        `rgb(${endColor.join(',')})`
      );
    };

    window.addEventListener('scroll', updateScrollColor);
    window.addEventListener('resize', updateScrollColor);
    updateScrollColor();

    return () => {
      window.removeEventListener('scroll', updateScrollColor);
      window.removeEventListener('resize', updateScrollColor);
    };
  }, []);

  return null;
};

export default ScrollbarGradient;

