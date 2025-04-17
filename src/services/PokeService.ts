import axios from "axios";
import { Poke } from "../interfaces/Poke";

const getRandomId = () => Math.floor(Math.random() * 151) + 1;

export const getRandomPokemon = async (): Promise<Poke> => {
    const id = getRandomId();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

    const name_es = speciesResponse.data.names.find((lang: any) => lang.language.name === 'es')?.name;

    return {
        name: response.data.name,
        name_es: name_es || response.data.name,
        image: response.data.sprites.other['official-artwork'].front_default
    };
};