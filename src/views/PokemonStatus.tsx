import { useEffect, useState } from 'react';

interface PokemonProps {
  count: number;
}

const PokemonStatus = ({ count }: PokemonProps) => {
  const [pokemonName, setPokemonName] = useState<string | null>(null);
  const [pokemonStatus, setPokemonStatus] = useState<number[]>([]);

  const getPokemonUrl = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then(res => res.json())
      .then(json => {
        setPokemonName(json.name);
        setPokemonStatus(
          json.stats.map((stat: { base_stat: number }) => stat.base_stat)
        );
      });
  };

  useEffect(() => {
    getPokemonUrl();
  }, [count]);

  return (
    <div className='ml-10 mt-2'>
      <div className="flex flex-col items-center text-xl">{pokemonName}</div>
      <div className="flex flex-col  ">HP：{pokemonStatus[0]}</div>
      <div className="flex flex-col  ">
        攻撃：{pokemonStatus[1]}
      </div>
      <div className="flex flex-col  ">
        防御：{pokemonStatus[2]}
      </div>
      <div className="flex flex-col ">
        特攻：
        {pokemonStatus[3]}
      </div>
      <div className="flex flex-col  ">
        特防：{pokemonStatus[4]}
      </div>
      <div className="flex flex-col  ">
        素早：{pokemonStatus[5]}
      </div>
    </div>
  );
};

export default PokemonStatus;
