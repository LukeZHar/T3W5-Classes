import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ['Arcanine', 'Pikachu', 'Ditto', 'Mewtwo'];

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: ['Arcanine', 'Pikachu', 'Ditto', 'Mewtwo']
        }
    }


    render() {
        return (
            <div>
                <h1>Pokemon Fetcher</h1>
                {
                    this.state.pokemonList.map(pokemon => {
                        return <PokemonCard name={pokemon} />
                    })
                }
                <button onClick={() => 
                    this.setState({ pokemonList: [] 
                    })}>Empty the state</button>
            </div>
        )
    }
}