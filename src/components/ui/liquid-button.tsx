import React, { useId } from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LiquidButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LiquidButton = React.forwardRef<HTMLAnchorElement, LiquidButtonProps>(
  ({ href, children, className, ...props }, ref) => {
    const id = useId().replace(/:/g, '');

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        id={`liquid-btn-${id}`}
        className={cn(
          'group relative inline-flex items-center justify-center gap-2',
          'px-8 py-4 overflow-hidden',
          'text-white font-medium tracking-wider',
          'border-2 border-black rounded-lg', // Default thin black border
          'bg-transparent',
          'transition-all duration-300',
          'hover:border-[#4973ff] hover:shadow-[0_0_15px_rgba(73,115,255,0.5)]',
          'hover:bg-[rgba(255,255,255,0.05)] hover:backdrop-blur-sm', // Glass effect on hover
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Download className="h-5 w-5" />
          {children}
        </span>
        <div className="liquid absolute left-0 top-0 w-full h-full bg-transparent transition-all duration-600 ease-in-out">
          <div className="wave-layer absolute w-[200%] h-[200%] top-0 left-50% -translate-x-1/2 -translate-y-1/4 bg-[#4973ff] opacity-0 group-hover:opacity-70" />
          <div className="wave-layer absolute w-[200%] h-[200%] top-0 left-50% -translate-x-1/2 -translate-y-1/4 bg-[#4973ff] opacity-0 group-hover:opacity-30" />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          #liquid-btn-${id} .wave-layer {
            border-radius: 40%;
            animation: wave-${id} 6s linear infinite;
          }
          #liquid-btn-${id} .wave-layer:nth-child(2) {
            animation-duration: 8s;
            animation-delay: -2s;
          }
          @keyframes wave-${id} {
            0% {
              transform: translate(-50%, -25%) translateY(0) rotate(0deg);
            }
            50% {
              transform: translate(-50%, -25%) translateY(15px) rotate(180deg);
            }
            100% {
              transform: translate(-50%, -25%) translateY(0) rotate(360deg);
            }
          }
          #liquid-btn-${id}:hover .liquid {
            filter: brightness(1.2);
          }
        `}} />
      </a>
    );
  }
);

LiquidButton.displayName = 'LiquidButton';

export { LiquidButton };