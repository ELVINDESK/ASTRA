// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Contato
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Fale conosco
          </h2>

          <p className="text-gray-600 mt-5 leading-7">
            Atendimento 24hrs
          </p>

          <div className="space-y-5 mt-8 text-gray-700">

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-blue-600" />
              <span>(99) 98478-6595</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Rua Travessa Luís Silva, S/N - Centro</span>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-blue-600" />
              <span>24HR</span>
            </div>

          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-md space-y-5"
        >
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Telefone"
            className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Mensagem"
            className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:border-blue-500"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
           Enviar Formulario
          </button>
        </motion.form>

      </div>
    </section>
  );
}