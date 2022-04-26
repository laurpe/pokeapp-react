import { Component } from "react";
import PokeCard from "./PokeCard";

class Pokelist extends Component {
    state = {
        data: null,
    };

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((response) => response.json())
            .then((data) => {
                const fetches = data.results.map((item) => {
                    return fetch(item.url).then((response) => response.json());
                });
                Promise.all(fetches).then((response) => {
                    this.setState({ data: response });
                    console.log(response);
                });
            });
    }

    render() {
        return (
            <div>
                {!this.state.data && <div>loading...</div>}
                {this.state.data && (
                    <div>
                        {this.state.data.map((pokemon) => {
                            return (
                                <PokeCard key={pokemon.id} pokemon={pokemon} />
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default Pokelist;
