import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          At <strong>QuizFlare</strong>, your privacy is important to us. This Privacy Policy outlines what information we collect, how we use it, and the steps we take to protect it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Name:</strong> Used to personalize your quiz experience and leaderboard entry.</li>
          <li><strong>Quiz Scores:</strong> Stored locally on your device for leaderboard and analytics.</li>
          <li><strong>Device Info:</strong> (Optional) May be used for analytics and performance optimization.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use the information collected solely for enhancing your quiz experience, displaying scores on the leaderboard, and improving app features.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. Data Storage</h2>
        <p className="text-gray-700 mb-4">
          Your quiz data is stored locally in your browser’s <code>localStorage</code>. We do not store or transmit your data to any remote server.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. Cookies</h2>
        <p className="text-gray-700 mb-4">
          QuizFlare does not use cookies or third-party tracking technologies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">5. Your Consent</h2>
        <p className="text-gray-700 mb-4">
          By using QuizFlare, you consent to this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">6. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update our Privacy Policy from time to time. Any changes will be posted here.
        </p>

        <p className="text-gray-700 mt-6 text-sm">
          Last updated: June 2025
        </p>
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;