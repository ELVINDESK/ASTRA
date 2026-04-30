import { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
    const [form, setForm] = useState({
        name: "",
        telefone: "",
        serviço: "",
        data: "",
        hora: "",
    });

    if (!isOpen) return null;

    const enviarWhats = () => {
        const msg =
            `Olá, gostaria de agendar um horário.\n` +
            `Nome: ${form.name}\n` +
            `Telefone: ${form.telefone}\n` +
            `Serviço: ${form.serviço}\n` +
            `Data: ${form.data}\n` +
            `Hora: ${form.hora}`;

        const url = `https://wa.me/5599984786595?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-lg rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6">Agendar Consulta</h2>

                <div className="space-y-4">
                    <input placeholder="Nome"
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    />w

                    <input placeholder="Telefone"
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    />

                    <select
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) => setForm({ ...form, servico: e.target.value })}
                    >
                        <option>Selecione serviço</option>
                        <option>Clareamento</option>
                        <option>Implante</option>
                        <option>Limpeza</option>
                    </select>

                    <input type="date"
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) => setForm({ ...form, data: e.target.value })}
                    />

                    <input type="time"
                        className="w-full border p-3 rounded-xl"
                        onChange={(e) => setForm({ ...form, hora: e.target.value })}
                    />
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={enviarWhats}
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full"
                    >
                        Confirmar
                    </button>

                    <button
                        onClick={onClose}
                        className="border px-6 py-3 rounded-xl w-full"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}