
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center text-white">
      <div className="text-center p-6 md:p-12 bg-opacity-75 bg-black rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-yellow-400">QuizFlare</span>
        </h1>
        <p className="text-xl mb-6">
          Test your knowledge with a wide variety of quizzes, track your progress, and compete on the leaderboard.
        </p>
        <Link to="/quiz">
          <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300">
            Start Quiz
          </button>
        </Link>
        <div className="mt-8">
          <p className="text-sm text-gray-300">
            Or check out your progress on the leaderboard and challenge yourself even more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
