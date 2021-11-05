import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import Pokemon from '../../../../../domain/entities/Pokemon';
import PokemonController from '../../../../controllers/PokemonController';

interface IProps{
    pokemon: Pokemon;
}

export const PokemonItem: React.FC<IProps> = ({ pokemon }) => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        async function getPokemonDetails() {
            const data = await PokemonController.getByName(pokemon.name);

            pokemon.id = data.id;
            pokemon.image = data.image;
            pokemon.height = data.height;
            pokemon.weight = data.weight;
            pokemon.type = data.type;

            setLoading(false)
        }

        getPokemonDetails();

    }, [pokemon])
    return (
        <div className="bg-green-50 flex items-center justify-center py-50 mb-5">
            <div className="max-w-md bg-gray-100 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="p-4">
                    {loading ? <div className="text-center">Loading...</div> : <img src={pokemon.image} className="shadow rounded-full max-w-full h-auto align-middle border-none" alt={pokemon.name} />}
                </div>
                <div className="flex justify-between p-6">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-lg text-gray-900 font-bold">
                            <Link to={`/details/${pokemon.id}`}>#{pokemon.id}-{pokemon.name}</Link>
                        </h1>

                    </div>
                    <div className="flex justify-between p-6">
                        <h3>Tamaño: {pokemon.height} inch</h3>
                        <h3>Peso: {pokemon.weight} kg</h3>
                        <h3>Tipo: {pokemon.type}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
