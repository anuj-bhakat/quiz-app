import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">About QuizFlare</h1>

        <p className="text-gray-700 mb-4">
          <strong>QuizFlare</strong> is a dynamic and interactive quiz application designed to test your knowledge across a wide range of topics. Whether you're brushing up on general knowledge, diving into science, exploring history, or discovering literature, QuizFlare offers a fun and competitive way to learn.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">🎯 Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Multiple quizzes across diverse categories</li>
          <li>Real-time scoring with a countdown timer</li>
          <li>Track your performance on the leaderboard</li>
          <li>Clean and responsive user interface</li>
          <li>No login required — jump straight into the quiz fun!</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">🏆 Leaderboard</h2>
        <p className="text-gray-700 mb-4">
          Compete with friends or challenge yourself by climbing to the top of the leaderboard. Your scores and time are recorded locally, encouraging faster and more accurate answers.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">🚀 Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At QuizFlare, our mission is to make learning fun, accessible, and competitive. We believe that quizzes should not only test your knowledge but also spark curiosity and engagement.
        </p>

        <p className="text-sm text-gray-500 mt-8">Created with ❤️ by Anuj Bhakat.</p>
      </div>
    </div>
  );
}

export default About;