import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import ExperienceCard from './components/ExperienceCard';
import StartHosting from './pages/StartHosting';
import SignUp from './pages/SignUp';
import ExperienceDetails from './pages/ExperienceDetails';

const experiences = [
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    title: "Traditional Italian Family Dinner",
    host: "Maria G.",
    price: 65,
    rating: 4.9,
    cuisine: "Italian"
  },
  {
    image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=800",
    title: "Authentic Sushi Experience",
    host: "Kenji T.",
    price: 85,
    rating: 4.8,
    cuisine: "Japanese"
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    title: "Modern French Tasting Menu",
    host: "Pierre L.",
    price: 95,
    rating: 4.7,
    cuisine: "French"
  },
  {
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
    title: "Indian Street Food Festival",
    host: "Priya M.",
    price: 45,
    rating: 4.9,
    cuisine: "Indian"
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    title: "Farm-to-Table Experience",
    host: "Sarah W.",
    price: 75,
    rating: 4.8,
    cuisine: "American"
  },
  {
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800",
    title: "Spanish Tapas Night",
    host: "Carlos R.",
    price: 55,
    rating: 4.7,
    cuisine: "Spanish"
  }
];

function HomePage() {
  return (
    <>
      <Categories />
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Dining Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>

      <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-xl my-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Culinary Passion</h2>
          <p className="text-gray-600 mb-6">
            Turn your kitchen into a destination. Join our community of home chefs and create unforgettable dining experiences.
          </p>
          <a href="/start-hosting" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors">
            Start Hosting
          </a>
        </div>
      </section>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Help Center</li>
                <li>Safety Information</li>
                <li>Cancellation Options</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Host</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Host your Kitchen</li>
                <li>Host Resources</li>
                <li>Community Forum</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">DineHost</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Food Safety</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            © 2024 DineHost. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/start-hosting" element={<StartHosting />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/experience/:id" element={<ExperienceDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;