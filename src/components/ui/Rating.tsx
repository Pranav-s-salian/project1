import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  total?: number;
  reviews?: number;
  size?: 'sm' | 'md' | 'lg';
}

const Rating: React.FC<RatingProps> = ({ 
  value, 
  total = 5, 
  reviews, 
  size = 'md' 
}) => {
  const stars = [];
  
  const sizeClass = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  
  const starClass = sizeClass[size];

  for (let i = 1; i <= total; i++) {
    stars.push(
      <Star
        key={i}
        className={`${starClass} ${
          i <= Math.floor(value) 
            ? 'text-warning-500 fill-warning-500' 
            : i <= value 
              ? 'text-warning-500 fill-warning-500/50' 
              : 'text-neutral-300'
        }`}
      />
    );
  }

  return (
    <div className="flex items-center">
      <div className="flex">{stars}</div>
      {reviews !== undefined && (
        <span className="ml-2 text-sm text-neutral-500">({reviews})</span>
      )}
    </div>
  );
};

export default Rating;