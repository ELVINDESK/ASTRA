// src/components/Footer.jsx
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold">
            ASTRA
          </h2>

          <p className="text-blue-100 mt-4 leading-7">
            Tecnologia Moderna.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Links Rápidos
          </h3>

          <ul className="space-y-3 text-blue-100">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Faça parte da nossa equipe</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Redes Sociais
          </h3>

          <div className="flex gap-4 text-xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-blue-900 mt-10 pt-6 text-center text-blue-200 text-sm">
        © 2026 ASTRA - Todos os direitos reservados.
      </div>
    </footer>
  );
}