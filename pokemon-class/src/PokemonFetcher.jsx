import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ['Arcanine', 'Pikachu', 'Ditto', 'Mewtwo'];

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: []
        }
    }

    async componentDidMount() {
        // Generate random pokemon ID number
        let randomNum = Math.ceil(Math.random() * 1025);
        // Pass random pokemon number to fetch
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
        let data = await response.json();
        //  Set fetch response to state
        this.setState({
            pokemonList: [data]
        });
        console.log("Pokemon Fetcher Mounted");
    }

    render() {
        return (
            <div>
                <h1>Pokemon Fetcher</h1>
                {
                    this.state.pokemonList.map(pokemon => {
                        return <PokemonCard name={pokemon.name} />
                    })
                }
                <button onClick={() =>
                    this.setState({
                        pokemonList: []
                    })}>Empty the state</button>
            </div>
        )
    }
}