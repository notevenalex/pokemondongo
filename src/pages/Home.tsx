
export const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenidos a la app de APIs, esta vez versión Pokémon
      </h1>
      <p className="text-lg mb-6">Adivina, adivinador... ¿qué Pokémon habrá hoy?</p>
      
      <div className="flex justify-center">
        <img
          src="/images/pokemon.jpg" 
          alt="Pokémon"
          className="w-100 h-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
};
