import { useEffect, useState } from 'react';

interface PokemonProps {
  count: number;
}

const Pokemon = ({ count }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getPokemonUrl = () => {
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then(res => res.json())
      .then(json => {
        setPokemon(json.sprites.front_default);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPokemonUrl();
  }, [count]);

  return (
    <>
      {loading ? (
        <div className="w-[96px] h-[96px] flex items-center justify-center">
          Loading...
        </div>
      ) : pokemon ? (
        <>
          <img className="w-[96px] h-[96px]" src={pokemon} />
         
        </>
      ) : (
        <p>no image...</p>
      )}
    </>
  );
};

export default Pokemon;
