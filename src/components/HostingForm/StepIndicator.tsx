import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
              ${index < currentStep 
                ? 'bg-rose-600 border-rose-600 text-white' 
                : index === currentStep 
                  ? 'border-rose-600 text-rose-600' 
                  : 'border-gray-300 text-gray-300'
              }`}
            >
              {index < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="text-sm mt-2 text-gray-600">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-20 h-0.5 mx-2 ${
              index < currentStep ? 'bg-rose-600' : 'bg-gray-300'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}