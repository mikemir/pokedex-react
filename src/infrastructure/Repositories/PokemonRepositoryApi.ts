import Pokemon from "../../domain/entities/Pokemon";
import PokemonRepository from "../../domain/interfaces/IPokemonRepository";

export default class PokemonRepositoryApi implements PokemonRepository {
    baseUri: string = "https://pokeapi.co/api/v2/pokemon";

    async getList(limit: number, offset: number): Promise<Pokemon[]> {
        const response = await fetch(this.baseUri + "?limit=" + limit + "&offset=" + offset);
        const data = await response.json();

        let pokemones: Pokemon[] = await data.results.map((item: any) => new Pokemon(0, item.name, 0, 0, ''));
        console.log('pokemones');
        console.log(pokemones);
        return pokemones;
    }

    async getById(id: number): Promise<Pokemon> {
        const reponse = await fetch(this.baseUri + "/" + id.toString());
        const data = await reponse.json();

        return new Pokemon(data.id, data.name, data.weight, data.height, data.types[0].type.name, data.sprites["front_default"]);
    }

    async getByName(name: string): Promise<Pokemon> {
        const reponse = await fetch(this.baseUri + "/" + name);
        const data = await reponse.json();

        return new Pokemon(data.id, data.name, data.weight, data.height, data.types[0].type.name, data.sprites["front_default"]);
    }

}