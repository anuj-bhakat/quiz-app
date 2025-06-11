import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from './quizData'; // Import questions from quizData

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || 'Anonymous';  // Get the name passed from Quizzes page

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalTime, setTotalTime] = useState(0);

  const quizId = parseInt(location.pathname.split('/')[2]);
  const quizQuestions = questions[quizId] || [];

  const totalQuestions = quizQuestions.length;
  const question = quizQuestions[currentQuestion];

  useEffect(() => {
    if (showScore) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          if (currentQuestion + 1 < totalQuestions) {
            handleNextQuestion();
          } else {
            setShowScore(true);
          }
        }
        return prev > 0 ? prev - 1 : 0;
      });
      setTotalTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, showScore, currentQuestion, totalQuestions]);

  const handleOptionClick = (option) => {
    if (selectedOption) return;

    setSelectedOption(option);
    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex < totalQuestions) {
      setCurrentQuestion(nextIndex);
      setTimeLeft(15);
      setSelectedOption(null);
    } else {
      setShowScore(true);
      saveResult();
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(15);
    setShowScore(false);
    setSelectedOption(null);
    setTotalTime(0);
  };

  const saveResult = () => {
    const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    const newResult = {
      name,
      score,
      totalQuestions,
      totalTime,
      date: new Date().toISOString(),
    };
    storedResults.push(newResult);
    localStorage.setItem('quizResults', JSON.stringify(storedResults));
  };

  const getOptionStyle = (option) => {
    if (!selectedOption) return 'bg-blue-500 hover:bg-blue-600';
    if (option === question.answer) return 'bg-green-500';
    if (option === selectedOption) return 'bg-red-500';
    return 'bg-gray-300';
  };

  return (
    <div className="flex flex-col items-center justify-center h-[77vh] bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        {!showScore && (
          <p className="mb-4 text-lg font-semibold text-gray-700">Player: {name}</p>
        )}
        {showScore ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg mb-2">
              {name}, your Score: {score} / {totalQuestions}
            </p>
            <p className="text-sm text-gray-600 mb-4">Total Time: {totalTime} seconds</p>
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span>Time Left: {timeLeft}s</span>
            </div>
            <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
            <div className="grid grid-cols-2 gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  disabled={!!selectedOption}
                  className={`${getOptionStyle(option)} text-white py-2 px-4 rounded-md transition-colors`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 text-lg">Score: {score}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
