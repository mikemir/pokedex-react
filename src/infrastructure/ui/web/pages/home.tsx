import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonList } from "../components/Pokemon/PokemonList";
import { NavBar } from "../components/NavBar";

export const Home = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <NavBar />

                <Switch>
                    <Route exact path="/" component={PokemonList} />
                </Switch>
            </div>
        </Router>
    )
}
