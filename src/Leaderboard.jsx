import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    // Sort results by score (descending), and by time (ascending) if scores are the same
    storedResults.sort((a, b) => {
      if (b.score === a.score) {
        return a.totalTime - b.totalTime;
      }
      return b.score - a.score;
    });
    setResults(storedResults);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[77.25vh] bg-gradient-to-r from-indigo-500 to-purple-500 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Leaderboard</h1>

        {results.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No results yet. Play the quiz to see your name here!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-200">
                <tr>
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Time (s)</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {results.map((res, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">{res.name}</td>
                    <td className="py-3 px-4">{res.score} / {res.totalQuestions}</td>
                    <td className="py-3 px-4">{res.totalTime}</td>
                    <td className="py-3 px-4 text-gray-500">{new Date(res.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
