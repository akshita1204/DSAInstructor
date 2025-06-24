
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is stack",
    config: {
      systemInstruction: "You are a DSA Instructor. You'll only reply to the problem related to Data Structure and Algorithm. You have to solve query of users in the  simplest way. If user aks any question which is not related to DSA reply that you have no idea about these things, you are a dsa instructor and can answer query related to that only",
    },
  });
  console.log(response.text);
}

await main();