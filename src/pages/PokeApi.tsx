import { useEffect, useState } from "react";
import { getRandomPokemon } from "../services/PokeService";
import { Poke } from "../interfaces/Poke";

const correctSound = new Audio("/sounds/correct.mp3");
const wrongSound = new Audio("/sounds/wrong.mp3");

export const PokeApi = () => {
    const [pokemon, setPokemon] = useState<Poke>({ name: '', name_es: '', image: '' });
    const [guess, setGuess] = useState('');
    const [revealed, setRevealed] = useState(false);
    const [message, setMessage] = useState('');
    const [score, setScore] = useState(0);
    const [attempts, setAttempts] = useState(0);

    const loadNewPokemon = async () => {
        const poke = await getRandomPokemon();
        setPokemon(poke);
        setGuess('');
        setRevealed(false);
        setMessage('');
        setAttempts(0);
    };

    useEffect(() => {
        loadNewPokemon();
    }, []);

    const handleGuess = () => {
        const cleanGuess = guess.trim().toLowerCase();
        const correctNames = [pokemon.name.toLowerCase(), pokemon.name_es.toLowerCase()];

        if (correctNames.includes(cleanGuess)) {
            setMessage(`🎉 ¡Correcto! Era ${pokemon.name_es}`);
            setRevealed(true);
            setScore(prev => prev + 1);
            correctSound.play();
        } else {
            setAttempts(prev => prev + 1);
            setMessage("❌ Incorrecto. Intenta de nuevo.");
            wrongSound.play();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center text-center p-8">
            <div
                className="w-64 h-64 bg-no-repeat bg-contain bg-center mb-4"
                style={{
                    backgroundImage: `url(${pokemon.image})`,
                    filter: revealed ? 'none' : 'brightness(0)'
                }}
            />
            <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="¿Quién es este Pokémon?"
                className="py-2 px-4 border rounded-md mb-2 text-black"
            />
            <button
                onClick={handleGuess}
                className="bg-indigo-700 text-white px-6 py-2 rounded-md hover:bg-indigo-900"
            >
                ¡Adivinar!
            </button>

            {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
            <div className="mt-2 text-black">
                <p>✅ Puntaje: {score}</p>
                <p>🔁 Intentos: {attempts}</p>
            </div>

            <button
                onClick={loadNewPokemon}
                className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                Nuevo Pokémon
            </button>
        </div>
    );
};
