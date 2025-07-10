import { RAGChat, upstash } from "@upstash/rag-chat";
import { redis } from "./redis";

// Create a new RAGChat instance/specify with the model and redis instance as parameters to get started
// The model is the key of the model stored in the database
// This model is a expecting QStash model API key from Upstash QStash Token
export const ragChat = new RAGChat({
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
  // You can change to "gpt-3.5-turbo" if you have access
  redis: redis,
});



// import { RAGChat, openai } from "@upstash/rag-chat";
// import { redis } from "./redis";

// // Create a new RAGChat instance using OpenAI as the LLM provider
// export const ragChat = new RAGChat({
//   model: openai("gpt-3.5-turbo"), // You can change to "gpt-4-turbo" if you have access
//   redis: redis,
// });
