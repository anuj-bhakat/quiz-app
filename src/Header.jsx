
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold hover:text-gray-200">
          QuizFlare
        </Link>
        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/quizzes" className="hover:text-gray-200">Quizzes</Link>
          <Link to="/leaderboard" className="hover:text-gray-200">Leaderboard</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;