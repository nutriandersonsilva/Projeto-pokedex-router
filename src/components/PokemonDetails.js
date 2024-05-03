import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class PokemonDetails extends Component {
  render() {
    const { pokemonList, match: { params: { id } } } = this.props;
    const pokemon = pokemonList.find((poke) => poke.id === Number(id));
    return (
      <div>
        <h1>
          {`${pokemon.name} details`}
        </h1>
      </div>
    );
  }
}
PokemonDetails.propTypes = {
  pokemonList: propTypes.arrayOf(propTypes.shape).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }).isRequired,
  }).isRequired,
};
