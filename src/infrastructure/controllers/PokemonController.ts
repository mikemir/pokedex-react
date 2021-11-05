import Pokemon from "../../domain/entities/Pokemon";
import PokemonRepositoryApi from "../repositories/PokemonRepositoryApi";
import PokemonUseCases from "../../application/useCases/PokemonUseCases";

const useCase = new PokemonUseCases(new PokemonRepositoryApi());

export default class PokemonController{

    static async getList(): Promise<Pokemon[]> {
        return await useCase.getList();
    }

    static async getByName(name: string): Promise<Pokemon> {
        return useCase.getByName(name);
    }

}