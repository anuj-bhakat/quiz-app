import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { quizzes } from './quizData'; // Import quizzes

function Quizzes() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || 'Anonymous';  // Get the name passed from Home, default to 'Anonymous' if not found

  const handleQuizSelect = (quiz) => {
    navigate(`/quiz/${quiz.id}`, { state: { name } });  // Pass the name when navigating to /quiz/:id
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[77.25vh] px-4 py-8 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">Choose a Quiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => handleQuizSelect(quiz)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center p-4 space-y-4">
                <div className="text-2xl font-semibold">{quiz.title}</div>
                <div className="text-sm text-gray-200">Start your quiz now!</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quizzes;
