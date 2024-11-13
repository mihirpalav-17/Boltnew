import React from 'react';
import { Star } from 'lucide-react';

interface ExperienceProps {
  image: string;
  title: string;
  host: string;
  price: number;
  rating: number;
  cuisine: string;
}

export default function ExperienceCard({ image, title, host, price, rating, cuisine }: ExperienceProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img 
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-600">Hosted by {host}</p>
        <p className="text-gray-500">{cuisine}</p>
        <p className="mt-1">
          <span className="font-semibold">${price}</span> per person
        </p>
      </div>
    </div>
  );
}