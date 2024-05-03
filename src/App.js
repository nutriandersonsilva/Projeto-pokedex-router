import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route, Switch,
  Link,
} from 'react-router-dom/cjs/react-router-dom.min';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about" component={ About } />
        <Route path="/" exact>
          <Pokedex pokemonList={ pokemonList } />
        </Route>
        <Route
          path="/pokemon/:id"
          render={ (props) => (<PokemonDetails
            pokemonList={ pokemonList }
            { ...props }
          />) }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
