import React, { useState } from 'react';
import StepIndicator from '../components/HostingForm/StepIndicator';
import BasicInfo from '../components/HostingForm/BasicInfo';
import LocationDetails from '../components/HostingForm/LocationDetails';
import MenuDetails from '../components/HostingForm/MenuDetails';
import Requirements from '../components/HostingForm/Requirements';

const STEPS = ['Basic Info', 'Location', 'Menu', 'Requirements'];

export default function StartHosting() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    cuisine: '',
    description: '',
    price: '',
    address: '',
    city: '',
    state: '',
    maxGuests: '',
    spaceDescription: '',
    menu: [{ name: '', description: '' }],
    dietary: [],
    certification: null,
    photos: [],
    insurance: '',
    safetyMeasures: ''
  });

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BasicInfo formData={formData} onChange={setFormData} />;
      case 1:
        return <LocationDetails formData={formData} onChange={setFormData} />;
      case 2:
        return <MenuDetails formData={formData} onChange={setFormData} />;
      case 3:
        return <Requirements formData={formData} onChange={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-2">
              Start Your Hosting Journey
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Share your culinary passion with food lovers in your area
            </p>

            <StepIndicator currentStep={currentStep} steps={STEPS} />

            <form onSubmit={handleSubmit}>
              {renderStep()}

              <div className="mt-8 flex justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}