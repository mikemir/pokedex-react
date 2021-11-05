import Pokemon from "../../domain/entities/Pokemon";
import IPokemonRepository from "../../domain/interfaces/IPokemonRepository";

export default class PokemonUseCases{
    repository: IPokemonRepository;

    constructor(repository: IPokemonRepository){
        this.repository = repository;
    }

    async getList(): Promise<Pokemon[]> {
        return await this.repository.getList(151, 0);
    }

    getById(id: number): Promise<Pokemon> {
        return this.repository.getById(id);
    }

    getByName(name: string): Promise<Pokemon> {
        return this.repository.getByName(name);
    }

}
