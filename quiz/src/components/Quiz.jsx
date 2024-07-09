import { useState, useEffect } from 'react';
import questionData from '../question.json';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !showScore) {
      // Move to the next question when the timer runs out
      handleNextQuestion();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, showScore]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questionData[currentQuestion].correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimer(10); // Reset the timer for the next question
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}/{questionData.length}</h2>
          <button onClick={handleRestartQuiz}>Restart</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questionData[currentQuestion].question}</p>
          <div className="options">
            {questionData[currentQuestion].options.map((opt, index) => (
              <button key={index} onClick={() => handleAnswerClick(opt)}>
                {opt}
              </button>
            ))}
          </div>
          <div className="timer">Time Left: <span>{timer}s</span></div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
