import { useState } from 'react';
import Pokemon from '../views/Pokemon';

const Count = () => {
  const [count, setCount] = useState(1);

  // Increment function with limit
  const increment = (value: number) => {
    setCount(count + value);
  };

  // Decrement function with limit
  const decrement = (value: number) => {
    setCount(count - value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mt-10">カウントアプリ（Max 1025）</h1>
      <Pokemon count={count} />
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
  );
};

export default Count;
