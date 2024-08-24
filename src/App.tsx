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
        <>
          <button className='bg-red-500 ' onClick={handleToggleCount}>カウントアプリSTART</button>
          <button className='bg-green-500' onClick={handleToggleQuiz}>クイズアプリSTART</button>
        </>
      )}

      {showCount && <Count />}

      {showQuiz && <Quiz />}
    </>
  );
}

export default App;
