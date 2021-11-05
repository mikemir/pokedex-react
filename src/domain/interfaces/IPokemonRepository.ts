import Pokemon from "../entities/Pokemon";

export default interface PokemonRepository{
    getList(limit: number, offset: number): Promise<Pokemon[]>;
    getById(id: number): Promise<Pokemon>;
    getByName(name: string): Promise<Pokemon>;
}