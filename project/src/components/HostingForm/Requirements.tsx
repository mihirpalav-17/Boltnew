import React from 'react';
import { Upload } from 'lucide-react';

interface RequirementsProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function Requirements({ formData, onChange }: RequirementsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Food Safety Certification
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label htmlFor="certification" className="relative cursor-pointer rounded-md font-medium text-rose-600 hover:text-rose-500">
                <span>Upload certification</span>
                <input
                  id="certification"
                  type="file"
                  className="sr-only"
                  onChange={(e) => onChange({ ...formData, certification: e.target.files?.[0] })}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PDF or image up to 10MB</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kitchen Photos
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label htmlFor="photos" className="relative cursor-pointer rounded-md font-medium text-rose-600 hover:text-rose-500">
                <span>Upload photos</span>
                <input
                  id="photos"
                  type="file"
                  multiple
                  className="sr-only"
                  onChange={(e) => onChange({ ...formData, photos: Array.from(e.target.files || []) })}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Insurance Information
          </label>
          <input
            type="text"
            placeholder="Insurance Policy Number"
            value={formData.insurance}
            onChange={(e) => onChange({ ...formData, insurance: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Safety Measures
          </label>
          <textarea
            value={formData.safetyMeasures}
            onChange={(e) => onChange({ ...formData, safetyMeasures: e.target.value })}
            placeholder="Describe your safety protocols..."
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
          />
        </div>
      </div>
    </div>
  );
}