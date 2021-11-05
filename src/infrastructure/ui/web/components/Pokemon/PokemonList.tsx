import React from 'react'
import { useState, useEffect } from "react";

import PokemonController from '../../../../controllers/PokemonController';
import Pokemon from '../../../../../domain/entities/Pokemon';
import { PokemonItem } from './PokemonItem';

export const PokemonList = () => {

    const [pokemones, setPokemones] = useState<any[]>([]);
    const [filteredPokemones, setFilteredPokemones] = useState<any[]>([]);

    useEffect(() => {

        async function getPokemonList() {
            const pokemonList = await PokemonController.getList();
            console.log('list');
            console.log(pokemonList);

            setPokemones(pokemonList);
            setFilteredPokemones(pokemonList);
        }

        getPokemonList();
    }, []);


    const handleSearch = (e: any) => {
        if (e.target.value.length > 2) {
            let filteredPokemones = pokemones.filter((pokemon: Pokemon) => {
                return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setFilteredPokemones(filteredPokemones);
        } else {
            setFilteredPokemones(pokemones)
        }
    }


    return (
        <div className="px-4 py-2 mt-5 w-100 min-h-screen">
            <div className="py-3 mt-3">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="busqueda"
                    className="h-10  w-full text-green-400 px-3 border border-green-800"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 ">
                {filteredPokemones.map((pokemon: Pokemon) => {
                    return <PokemonItem key={pokemon.id} pokemon={pokemon} />
                })}
            </div>
        </div>
    )
}
