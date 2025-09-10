import { useEffect } from 'react';

const RetroCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-dot';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot-outline';
    document.body.appendChild(cursorDot);

    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      
      cursor.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: 'forwards' });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
      if (document.body.contains(cursorDot)) {
        document.body.removeChild(cursorDot);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default RetroCursor;
