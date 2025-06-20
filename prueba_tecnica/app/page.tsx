"use client";
import { createTicket, getTickets, Ticket } from "@/backend/tickets";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const loadTickets = async () => {
    const data = await getTickets();
    setTickets(data);
  };

  const sendTicket = async () => {
    await createTicket(message);
    setMessage("");
    loadTickets();
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sistema de Tickets</h1>
      <textarea className="w-full border p-3 mb-2" placeholder="Escribe tu mensaje aquí..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button className="bg-blue-600 text-white px-4 p-2 rounded" onClick={sendTicket}>Enviar</button>
      <h2 className="text-xl mt-5">Tickets</h2>
      <ul>
        {tickets.map((t, i) => (
          <li className="border p-2 my-2 rounded" key={i}>
            <p>
              <strong>Mensaje:</strong> {t.message}
            </p>
            <p>
              <strong>Respuesta:</strong> {t.response}
            </p>
            <p className="text-sm text-gray-50">
              {t.date?.toDate().toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
