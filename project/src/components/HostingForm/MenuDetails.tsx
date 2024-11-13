import React from 'react';
import { Plus, X } from 'lucide-react';

interface MenuDetailsProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function MenuDetails({ formData, onChange }: MenuDetailsProps) {
  const addCourse = () => {
    onChange({
      ...formData,
      menu: [...formData.menu, { name: '', description: '' }]
    });
  };

  const removeCourse = (index: number) => {
    const newMenu = formData.menu.filter((_: any, i: number) => i !== index);
    onChange({ ...formData, menu: newMenu });
  };

  const updateCourse = (index: number, field: string, value: string) => {
    const newMenu = formData.menu.map((course: any, i: number) => 
      i === index ? { ...course, [field]: value } : course
    );
    onChange({ ...formData, menu: newMenu });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Dietary Accommodations
        </label>
        <div className="space-y-2">
          {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.dietary?.includes(option)}
                onChange={(e) => {
                  const newDietary = e.target.checked
                    ? [...(formData.dietary || []), option]
                    : (formData.dietary || []).filter((item: string) => item !== option);
                  onChange({ ...formData, dietary: newDietary });
                }}
                className="rounded text-rose-600 focus:ring-rose-500"
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Menu Courses
          </label>
          <button
            type="button"
            onClick={addCourse}
            className="flex items-center text-sm text-rose-600 hover:text-rose-700"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Course
          </button>
        </div>
        
        <div className="space-y-4">
          {formData.menu?.map((course: any, index: number) => (
            <div key={index} className="relative border rounded-lg p-4">
              <button
                type="button"
                onClick={() => removeCourse(index)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Name
                  </label>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(index, 'name', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={course.description}
                    onChange={(e) => updateCourse(index, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}