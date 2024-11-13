import React from 'react';

interface LocationDetailsProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function LocationDetails({ formData, onChange }: LocationDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Street Address
        </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => onChange({ ...formData, address: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => onChange({ ...formData, city: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => onChange({ ...formData, state: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Maximum Number of Guests
        </label>
        <input
          type="number"
          value={formData.maxGuests}
          onChange={(e) => onChange({ ...formData, maxGuests: e.target.value })}
          min="1"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Dining Space Description
        </label>
        <textarea
          value={formData.spaceDescription}
          onChange={(e) => onChange({ ...formData, spaceDescription: e.target.value })}
          placeholder="Describe your dining space..."
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
        />
      </div>
    </div>
  );
}