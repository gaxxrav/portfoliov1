'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWaveOffset = (index: number, progress: number) => {
    const itemOffset = index * 100; 
    const scrollOffset = scrollY * 0.1; 
    return Math.sin((progress + itemOffset + scrollOffset) * 0.01) * 30; 
  };

  return (
    <div 
      ref={ref}
      className={cn(
        'relative overflow-hidden',
        direction === 'horizontal' ? 'h-[200px]' : 'w-full',
        className
      )}
      onMouseEnter={() => {
        if (durationOnHover) {
          setCurrentDuration(durationOnHover);
        }
      }}
      onMouseLeave={() => {
        if (durationOnHover) {
          setCurrentDuration(duration);
        }
      }}
    >
      <motion.div 
        className={cn('flex absolute', direction === 'horizontal' ? 'flex-row' : 'flex-col')}
        style={{
          [direction === 'horizontal' ? 'x' : 'y']: translation,
          gap: `${gap}px`,
          top: direction === 'horizontal' ? '50%' : 0,
          transform: direction === 'horizontal' ? 'translateY(-50%)' : 'none',
        }}
      >
        {Array.isArray(children) ? children.map((child, index) => (
          <motion.div
            key={`first-${index}`}
            style={{
              y: useTransform(translation, (value) => 
                getWaveOffset(index, value)
              ),
              rotate: useTransform(translation, (value) => 
                `${Math.sin((value + index * 20) * 0.01) * 5}deg`
              ),
              scale: useTransform(translation, (value) => 
                1 + Math.sin((value + index * 30) * 0.01) * 0.1
              ),
              transition: { type: 'spring', stiffness: 100, damping: 15 }
            }}
            className="origin-center"
          >
            {child}
          </motion.div>
        )) : children}
      </motion.div>
      <motion.div 
        className={cn('flex absolute', direction === 'horizontal' ? 'flex-row' : 'flex-col')}
        style={{
          [direction === 'horizontal' ? 'x' : 'y']: useTransform(translation, (value) => 
            value + (direction === 'horizontal' ? width + gap : height + gap)
          ),
          gap: `${gap}px`,
          top: direction === 'horizontal' ? '50%' : 0,
          transform: direction === 'horizontal' ? 'translateY(-50%)' : 'none',
        }}
      >
        {Array.isArray(children) ? children.map((child, index) => (
          <motion.div
            key={`second-${index}`}
            style={{
              y: useTransform(translation, (value) => 
                getWaveOffset(index, value + (width || 0) + gap)
              ),
              rotate: useTransform(translation, (value) => 
                `${Math.sin((value + (width || 0) + gap + index * 20) * 0.01) * 5}deg`
              ),
              scale: useTransform(translation, (value) => 
                1 + Math.sin((value + (width || 0) + gap + index * 30) * 0.01) * 0.1
              ),
              transition: { type: 'spring', stiffness: 100, damping: 15 }
            }}
            className="origin-center"
          >
            {child}
          </motion.div>
        )) : children}
      </motion.div>
    </div>
  );
}
