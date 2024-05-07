import propTypes from 'prop-types';
import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class PokemonExtra extends Component {
  render() {
    const { pokemonList, match: { params: { id } } } = this.props;
    const pokemon = pokemonList.find((poke) => poke.id === Number(id));
    return (
      <section className="pokemon-details">
        <h1>
          {`${pokemon.name} details`}
        </h1>
        <Pokemon pokemon={ pokemon } />
        <h2>Sumário:</h2>
        <p>{pokemon.summary}</p>
        <h2>Hábitat:</h2>
        <section className="pokemon-habitat">
          { pokemon.foundAt.map((location) => (
            <section key={ location.location }>
              <span>{ location.location }</span>
              <img src={ location.map } alt="mapa do pokemon" />
            </section>
          )) }
        </section>
      </section>
    );
  }
}

PokemonExtra.propTypes = {
  pokemonList: propTypes.arrayOf(propTypes.shape).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }).isRequired,
  }).isRequired,
};
