import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleStartQuiz = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setError('');
      navigate('/quizzes', { state: { name } });
    } else {
      setError('Please enter your name to start the quiz.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[77.25vh] bg-gray-100 px-4 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Welcome to the Quiz</h1>

        <form onSubmit={handleStartQuiz}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          />

          {error && (
            <div className="text-red-600 text-sm mb-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
