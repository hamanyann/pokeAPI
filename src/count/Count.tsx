import { useState } from 'react';
import Pokemon from '../views/Pokemon';
import PokemonStatus from '../views/PokemonStatus';

const Count = ({ onClick }: { onClick: () => void }) => {
  const [count, setCount] = useState(1);

  const increment = (value: number) => {
    setCount(count + value);
  };

  const decrement = (value: number) => {
    setCount(count - value);
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
        <h1 className="text-3xl mt-4">カウントアプリ（Max 1025）</h1>
        <div className="flex items-center ">
          <Pokemon count={count} />
          <PokemonStatus count={count} />
        </div>
        <h1 className="text-4xl m-8 mt-2">{count}</h1>
        <div className="flex flex-none">
          <div className="flex flex-col items-start gap-2 mr-10">
            <button
              className="text-2xl border-2 border-black p-2 w-20"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="text-2xl border-2 border-black p-2 w-20"
              onClick={() => increment(10)}
            >
              +10
            </button>
            <button
              className="text-2xl border-2 border-black p-2 w-20"
              onClick={() => increment(100)}
            >
              +100
            </button>
          </div>
          <div className="flex flex-col items-start gap-2 ">
            <button
              className="text-2xl border-2 border-red-500 p-2 w-20"
              onClick={() => decrement(1)}
            >
              -1
            </button>
            <button
              className="text-2xl border-2 border-red-500 p-2 w-20"
              onClick={() => decrement(10)}
            >
              -10
            </button>
            <button
              className="text-2xl border-2 border-red-500 p-2 w-20"
              onClick={() => decrement(100)}
            >
              -100
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
