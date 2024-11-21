import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

// const pokemonList = ['Arcanine', 'Pikachu', 'Ditto', 'Mewtwo'];

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: [],
            jwtToken: null
        }
    }

    async componentDidMount() {
        for (let i = 0; i < 6; i++) {
            // Generate random pokemon ID number
            let randomNum = Math.ceil(Math.random() * 1025);
            // Pass random pokemon number to fetch
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
            let data = await response.json();
            //  Set fetch response to state
            // Method 1:
            // this.setState({
            //     pokemonList: [...this.state.pokemonList, data.name]
            // });
            // Method 2:
            this.setState((prevState) => {
                return {
                    pokemonList: [...prevState.pokemonList, data.name]
                }
            })
        }
        console.log("Pokemon Fetcher First Load");
    }

    componentDidUpdate() {
        console.log("Page rendered. This is the current state:", this.state.pokemonList);

        if (this.state.jwtToken) {
            console.log("User is logged in.")
        } else {
            console.log("User is logged out.")
        }
    }

    render() {
        return (
            <div>
                <h1>Pokemon Fetcher</h1>
                {
                    this.state.pokemonList.map((pokemon, index) => {
                        return <PokemonCard key={pokemon + index} name={pokemon} />
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