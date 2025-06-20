import { db } from "@/lib/config";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

export interface Ticket {
  id?: string;
  message: string;
  response: string;
  date?: Timestamp;
}

const generateResonse = (message: string): string => {
  if (message.toLocaleLowerCase().includes("error")) {
    return "Gracias por reportar el error, estamos trabajando para solucionarlo.";
  }
  return "Gracias por tu mensaje, nos pondremos en contacto contigo pronto.";
};

export const createTicket = async (message: string): Promise<void> => {
  const response = generateResonse(message);
  await addDoc(collection(db, "tickets"), {
    message:message,
    response: response,
    date: serverTimestamp(),
  });
};

export const getTickets = async (): Promise<Ticket[]> => {
  const snapshot = await getDocs(collection(db, "tickets"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      message: data.message,
      response: data.response,
      date: data.date
    };
  })
  .sort((a, b) => (b.date?.seconds ?? 0) - (a.date?.seconds ?? 0));
};
