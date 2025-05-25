import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, count }) => {
  return (
    <Link 
      to={`/products?category=${encodeURIComponent(name)}`}
      className="group block rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 relative"
    >
      <div className="aspect-square overflow-hidden bg-neutral-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-white/80">{count} Products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;