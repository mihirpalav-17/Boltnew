import React, { useState } from 'react';
import { Star, Users, Clock, Calendar, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: number;
}

function BookingModal({ isOpen, onClose, price }: BookingModalProps) {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', { guests, date });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Complete your booking</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              max="8"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Price per guest</span>
              <span>${price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Guests</span>
              <span>× {guests}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${price * guests}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ExperienceDetails() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  // This would normally come from your router/API
  const experience = {
    title: "Traditional Italian Family Dinner",
    host: "Maria G.",
    location: "Brooklyn, New York",
    price: 65,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    description: "Join me for an authentic Italian dining experience in my family's Brooklyn home. We'll serve traditional recipes passed down through generations, featuring homemade pasta, seasonal ingredients, and wine pairings.",
    maxGuests: 6,
    duration: "3 hours",
    includes: [
      "4-course meal",
      "Wine pairing",
      "Recipe cards to take home",
      "Cooking demonstration"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                {experience.rating} ({experience.reviews} reviews)
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                {experience.location}
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p>{experience.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium">Max Guests</div>
                  <div className="text-sm text-gray-600">{experience.maxGuests} people</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-sm text-gray-600">{experience.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-medium">Availability</div>
                  <div className="text-sm text-gray-600">Check calendar</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">What's included</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experience.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-rose-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl border p-6 shadow-sm">
              <div className="text-2xl font-bold mb-4">
                ${experience.price}
                <span className="text-base font-normal text-gray-600"> / person</span>
              </div>
              
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition-colors"
              >
                Book Experience
              </button>

              <div className="mt-4 text-sm text-gray-600 text-center">
                You won't be charged yet
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        price={experience.price}
      />
    </div>
  );
}