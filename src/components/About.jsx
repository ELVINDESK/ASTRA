// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="ASTRA Ia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">

        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://i.pinimg.com/originals/4c/27/7e/4c277e81f6fa23aec2a198d848d3ef6c.gif"
          className="rounded-3xl shadow-2xl h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            ASTRA
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3 leading-tight">
            Excelência em tecnologia para o seu negócio
          </h2>

          <p className="text-gray-600 mt-6 leading-7">
            <div className="text-blue-600 text-lg font-bold">ASTRA</div>
            <div className="bg-black p-5 text-gray-300 rounded-2xl">
              é uma empresa de tecnologia dedicada a transformar negócios por meio de soluções digitais inovadoras. Com uma equipe de especialistas apaixonados por tecnologia, oferecemos serviços personalizados que atendem às necessidades específicas de cada cliente. Desde o desenvolvimento de sites modernos e responsivos até a criação de sistemas sob medida e bots inteligentes, estamos comprometidos em impulsionar o sucesso dos nossos clientes no mundo digital. Nossa missão é fornecer soluções tecnológicas que não apenas atendam, mas superem as expectativas, ajudando nossos clientes a alcançar novos patamares de eficiência e crescimento.
            </div>
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-black p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-600">+12</h3>
              <p className="text-gray-600 mt-1">Anos de experiência</p>
            </div>

            <div className="bg-black p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-600">+5k</h3>
              <p className="text-gray-600 mt-1">Pacientes atendidos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}