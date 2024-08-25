import { useEffect, useState } from 'react';

interface PokemonProps {
  count: number;
  onClick: () => void;
}

const PokemonQuiz = ({ count, onClick }: PokemonProps) => {
  const [pokemonName, setPokemonName] = useState<string | null>(null);

  const getPokemonUrl = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then(res => res.json())
      .then(json => {
        setPokemonName(json.name);
      });
  };

  useEffect(() => {
    getPokemonUrl();
  }, [count]);

  return (
    <>
      <div className="flex flex-col items-center ">
        <button className="text-3xl border-2 border-black p-2 w-60" onClick={onClick}>
          {pokemonName}
        </button>
      </div>
    </>
  );
};

export default PokemonQuiz;
