const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const { message } = req.body;

  const texto = message.toLowerCase();

  let reply = "";

  if (texto.includes("preço") || texto.includes("valor")) {
    reply = "Nossos projetos começam a partir de R$499.";
  }

  else if (texto.includes("site")) {
    reply = "Criamos sites modernos, rápidos e profissionais. Me fale seu projeto.";
  }

  else if (texto.includes("loja")) {
    reply = "Também criamos lojas virtuais completas.";
  }

  else if (texto.includes("prazo")) {
    reply = "Normalmente entre 5 a 10 dias úteis.";
  }

  else if (texto.includes("contato")) {
    reply = "Pode nos chamar no WhatsApp para atendimento rápido.";
  }

  else if (texto.includes("oi") || texto.includes("olá")) {
    reply = "Olá! Sou a Astra. Como posso ajudar você hoje?";
  }

  else {
    reply = "Entendi 😊 Pode me explicar melhor para eu te ajudar?";
  }

  res.json({ reply });
});

app.listen(3001, () => {
  console.log("Astra raiz online 🚀");
});