import { useState } from "react";

export default function ChatIA() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage() {
    const userMessage = input;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);

    setInput("");

    const res = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "ai", text: data.reply }
    ]);
  }

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <h2>Minha IA</h2>

      <div>
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.role === "user" ? "Você" : "IA"}:</b> {msg.text}
          </p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite algo..."
      />

      <button onClick={sendMessage}>
        Enviar
      </button>
    </div>
  );
}