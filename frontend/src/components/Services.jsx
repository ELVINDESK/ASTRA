// src/components/Services.jsx
import { motion } from "framer-motion";
import {
  FaTooth,
  FaSmile,
  FaTeethOpen,
  FaUserMd,
  FaBolt,
  FaWeebly,
  FaAssistiveListeningSystems,
  FaSitemap,
  FaHackerNews
} from "react-icons/fa";

const services = [
  {
    icon: <FaBolt />,
    title: "Criação de Bots para Discord",
    text: "Automatize tarefas e melhore a eficiência do seu negócio com bots personalizados."
  },
  {
    icon: <FaWeebly />,
    title: "Sites Personalizados",
    text: "Desenvolvimento de sites modernos, responsivos e otimizados para o seu negócio."
  },
  {
    icon: <FaSitemap/>,
    title: "sistemas sob medida",
    text: "Soluções tecnológicas personalizadas para atender às necessidades específicas do seu negócio."
  },
  {
    icon: <FaHackerNews />,
    title: "Segurança + Suporte",
    text: "Garantimos a segurança dos seus dados e oferecemos suporte contínuo para o sucesso do seu negócio."
  }
];

export default function Services() {
  return (
    <section id="servicos" className=" py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Serviços
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Tecnologia para seu negócio
          </h2>

          <p className="text-gray-600 mt-5">
            Soluções modernas, atendimento humanizado e resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-7 rounded-3xl shadow-md hover:-translate-y-2 transition"
            >
              <div className="text-4xl text-blue-600 mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-blue-100 p-8 rounded-2xl text-center max-w-4xl mx-auto mt-16">
        <h3>Conheça Nosso bot para discord</h3>
        <p className="text-gray-600 mt-3 leading-7">
          Nosso bot para Discord é a solução perfeita para automatizar tarefas, melhorar a eficiência e criar uma experiência personalizada para sua comunidade. Com recursos avançados e fácil integração, nosso bot é a escolha ideal para levar seu servidor ao próximo nível.
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition mt-5">
          Teste Agora
        </button>
      </div>
    </section>
  );
}