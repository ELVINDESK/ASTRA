import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// conecta na IA
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Você é uma IA simples de site, responda de forma curta e direta." },
        { role: "user", content: message }
      ],
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: "Erro na IA" });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});