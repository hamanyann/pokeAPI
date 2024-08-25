import Count from './count/Count';
import { useState } from 'react';
import Quiz from './quiz/Quiz';

function App() {
  const [showCount, setShowCount] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleToggleCount = () => {
    setShowCount(!showCount);
  };

  const handleToggleQuiz = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <>
      {!showCount && !showQuiz && (
        <div className="flex flex-col items-center">
          <p className="text-3xl mt-20">ポケモンAPIアプリ</p>
          <div className="flex justify-center items-center mt-20 font-bold">
            <button
              className="bg-red-500 w-[150px] h-[150px] mr-4 "
              onClick={handleToggleCount}
            >
              カウントアプリSTART
            </button>
            <button
              className="bg-green-500 w-[150px] h-[150px]"
              onClick={handleToggleQuiz}
            >
              クイズアプリSTART
            </button>
          </div>
        </div>
      )}

      {showCount && <Count onClick={handleToggleCount} />}

      {showQuiz && <Quiz onClick={handleToggleQuiz} />}
    </>
  );
}

export default App;
