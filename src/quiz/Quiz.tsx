import PokemonQuiz from '../views/PokemonQuiz';
import Pokemon from '../views/Pokemon';
import { useEffect, useState } from 'react';

const array: number[] = [];

for (let i = 1; i <= 151; i++) {
  array.push(i);
}

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array
};

const Quiz = ({ onClick }: { onClick: () => void }) => {
  const [quiz1, setQuiz1] = useState(0);
  const [quiz2, setQuiz2] = useState(0);
  const [quiz3, setQuiz3] = useState(0);
  const [quiz4, setQuiz4] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [correct, setCorrect] = useState('');

  const restQuiz = () => {
    const shuffledArray = shuffleArray(array);
    setQuiz1(shuffledArray[0]);
    setQuiz2(shuffledArray[1]);
    setQuiz3(shuffledArray[2]);
    setQuiz4(shuffledArray[3]);
    const randomCorrect = Math.floor(Math.random() * 4);
    setAnswer(shuffledArray[randomCorrect]);
    setCorrect('');
  };

  useEffect(() => {
    restQuiz();
  }, []);

  const handelClick = (number: number) => {
    if (number === answer) {
      setCorrect('ゲット！');
    } else {
      setCorrect('逃げられた...');
    }
  };

  return (
    <>
      <button
        onClick={onClick}
        className="text-2xl border-2 border-black p-1 w-30 mt-4 ml-4"
      >
        TOPへ
      </button>
      <div className="flex flex-col items-center">
        <p className="text-3xl mt-10">名前を呼んでゲットしよう！</p>
        <Pokemon count={answer} />
        <PokemonQuiz count={quiz1} onClick={() => handelClick(quiz1)} />
        <PokemonQuiz count={quiz2} onClick={() => handelClick(quiz2)} />
        <PokemonQuiz count={quiz3} onClick={() => handelClick(quiz3)} />
        <PokemonQuiz count={quiz4} onClick={() => handelClick(quiz4)} />
        <p className="text-3xl pt-10">{correct}</p>
        <button
          onClick={restQuiz}
          className="text-2xl border-2 border-black p-1 w-30 mt-4 ml-4"
        >
          次のポケモンに進む
        </button>
      </div>
    </>
  );
};
export default Quiz;
