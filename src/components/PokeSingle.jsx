import { Component } from "react";

class PokeSingle extends Component {
    state = {
        pokemon: null,
    };

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokemon}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ pokemon: data });
            });
    }

    render() {
        return (
            <div className="pokeContainer">
                {this.state.pokemon && (
                    <div className="pokeSingle">
                        <img
                            src={
                                this.state.pokemon.sprites.other.dream_world
                                    .front_default
                            }
                            alt={this.state.pokemon.name}
                        />
                        <h2>{this.state.pokemon.name}</h2>
                        <div>
                            <span>Types: </span>
                            {this.state.pokemon.types.map((type) => (
                                <span key={this.state.pokemon.id}>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                        <div>
                            <span>Abilities: </span>
                            {this.state.pokemon.abilities.map((ability) => (
                                <span key={this.state.pokemon.id}>
                                    {ability.ability.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {!this.state.pokemon && <div>loading</div>}
            </div>
        );
    }
}

export default PokeSingle;
