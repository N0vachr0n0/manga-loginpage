import { FC } from 'react';

interface MangaDecorationProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  type?: 'star' | 'bubble' | 'lines';
}

const MangaDecoration: FC<MangaDecorationProps> = ({ 
  position = 'top-right', 
  type = 'star' 
}) => {
  // Position classes
  const positionClasses = {
    'top-left': 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  };

  // Generate random degrees for rotation
  const rotationDeg = Math.floor(Math.random() * 360);
  
  // Elements based on type
  const renderDecoration = () => {
    switch (type) {
      case 'star':
        return (
          <div className={`${positionClasses[position]} rotate-[${rotationDeg}deg] pop-in`}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0L38.1 21.9H61.2L42.6 35.4L50.7 57.3L30 43.8L9.3 57.3L17.4 35.4L-1.2 21.9H21.9L30 0Z" fill="#FFEA00" stroke="#2D2D2D" strokeWidth="2"/>
            </svg>
          </div>
        );
      case 'bubble':
        return (
          <div className={`${positionClasses[position]} rotate-[${rotationDeg}deg] pop-in`}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="40" cy="20" rx="40" ry="20" fill="#FF4081" stroke="#2D2D2D" strokeWidth="2"/>
            </svg>
          </div>
        );
      case 'lines':
        return (
          <div className={`${positionClasses[position]} rotate-[${rotationDeg}deg] pop-in`}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="10" x2="50" y2="10" stroke="#2D2D2D" strokeWidth="3"/>
              <line x1="0" y1="25" x2="50" y2="25" stroke="#2D2D2D" strokeWidth="3"/>
              <line x1="0" y1="40" x2="50" y2="40" stroke="#2D2D2D" strokeWidth="3"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return renderDecoration();
};

export default MangaDecoration;