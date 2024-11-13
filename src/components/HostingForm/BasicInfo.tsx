import React from 'react';

interface BasicInfoProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function BasicInfo({ formData, onChange }: BasicInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Experience Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => onChange({ ...formData, title: e.target.value })}
          placeholder="e.g., Authentic Italian Pizza Making Experience"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cuisine Type
        </label>
        <select
          value={formData.cuisine}
          onChange={(e) => onChange({ ...formData, cuisine: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        >
          <option value="">Select cuisine type</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Indian">Indian</option>
          <option value="French">French</option>
          <option value="Mexican">Mexican</option>
          <option value="Chinese">Chinese</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="American">American</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => onChange({ ...formData, description: e.target.value })}
          placeholder="Describe your dining experience..."
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price per Person (USD)
        </label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => onChange({ ...formData, price: e.target.value })}
          min="1"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>
    </div>
  );
}