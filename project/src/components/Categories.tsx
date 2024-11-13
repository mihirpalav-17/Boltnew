import React from 'react';
import { Utensils, Coffee, Wine, Pizza, Soup, Salad } from 'lucide-react';

const categories = [
  { icon: Utensils, label: 'Fine Dining' },
  { icon: Coffee, label: 'Brunch' },
  { icon: Wine, label: 'Wine Pairing' },
  { icon: Pizza, label: 'Casual' },
  { icon: Soup, label: 'Traditional' },
  { icon: Salad, label: 'Vegetarian' },
];

export default function Categories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between overflow-x-auto space-x-8">
        {categories.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 min-w-fit cursor-pointer hover:text-rose-600 transition-colors">
            <div className="p-4 rounded-full bg-gray-100 hover:bg-rose-100 transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}