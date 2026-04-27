import { useState } from "react";

function ChatIA({ fechar }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage() {
    const res = await fetch("https://astra-backend-u7jq.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: input
      })
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { user: input },
      { bot: data.reply }
    ]);

    setInput("");
  }

  return (
    <div className="border-2 border-blue-600 fixed bottom-5 right-5 bg-white p-5 rounded-xl shadow-xl w-80">

      {/* TOPO */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-blue-600 bg-gray-200 p-2 rounded-full">Astra IA</h2>

        <button
          onClick={fechar}
          className="bg-red-500 text-white font-bold text-xl p-1 rounded-full hover:bg-red-400 transition"
        >
          ×
        </button>
      </div>

      {/* MENSAGENS */}
      {messages.map((msg, i) => (
        <div key={i}>
          {msg.user && <p><b>Você:</b> {msg.user}</p>}
          {msg.bot && <p><b>Astra:</b> {msg.bot}</p>}
        </div>
      ))}

      {/* INPUT */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite..."
        className="border-2 border-blue-600 p-2 w-full mt-3 rounded"
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white w-full mt-2 p-2 rounded"
      >
        Enviar a ASTRA
      </button>
    </div>
  );
}

export default ChatIA;