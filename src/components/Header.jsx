import { FaTooth } from "react-icons/fa";

export default function Header({ onOpen }) {
  return (
    <header className="w-full fixed top-0 z-50 bg-blue-950 backdrop-blur- shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
          ASTRA
        </h1>

        <nav className="hidden md:flex gap-8 font-medium p-4 text-blue-600">
          <div className=" hover:bg-blue-500 transition rounded-full px-5 hover: p-2 "><a href="#">ASTRA Ia</a></div>
          <div className=" hover:bg-blue-500 transition rounded-full px-5 hover: p-2 "><a href="#">Serviços</a></div>
          <div className=" hover:bg-blue-500 transition rounded-full px-5 hover: p-2 "><a href="#">Contato</a></div>
        </nav>

        <button
          onClick={onOpen}
          className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition"
        >
          Converse com ASTRA
        </button>
      </div>
    </header>
  );
}