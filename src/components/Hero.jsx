export default function Hero() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/bg.gif')" }}
    >
      <div className="bg-black/60 p-8 rounded-2xl text-center max-w-4xl">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30">
          Soluções modernas com ASTRA
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Olá, eu sou o{" "}
          <span className="text-blue-500"> ASTRA</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Criamos site, sistemas e Bots personalizados para o seu negócio. Deixe a tecnologia trabalhar para você e alcance novos patamares de sucesso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
            Começar Agora
          </button>

          <button className="px-8 py-3 border border-gray-500 hover:border-blue-500 rounded-xl font-semibold transition">
            Ver Projetos
          </button>
        </div>
      </div>
    </section>
  );
}