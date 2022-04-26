import { Link } from "react-router-dom";

const PokeCard = ({ pokemon }) => {
    return (
        <div className="pokecard">
            <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
            />
            <h2>{pokemon.name}</h2>
            <Link to={pokemon.name}>See more</Link>
        </div>
    );
};

export default PokeCard;
