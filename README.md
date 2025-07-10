# AI RAG Chatbot – Retrieval-Augmented Generation Chat App

![Screenshot 2024-09-10 at 20 10 31](https://github.com/user-attachments/assets/d73cafe5-22a2-4356-944f-0f5601be9da8) ![Screenshot 2024-09-10 at 17 57 55](https://github.com/user-attachments/assets/b338d3e4-db6e-425a-8a13-1b2055ba2afc)

---

A modern, full-stack AI chatbot application built with Next.js 14, OpenAI GPT, Upstash Vector, Upstash Redis, and more. This project demonstrates how to build a context-aware, memory-enabled chatbot using Retrieval-Augmented Generation (RAG) and state-of-the-art cloud technologies.

- **Localhost:** [http://localhost:3000/www.wikipedia.org](http://localhost:3000/www.wikipedia.org)
- **Live-Demo:** [https://ai-rag-chatbot-arnob.vercel.app/www.wikipedia.org](https://ai-rag-chatbot-arnob.vercel.app/www.wikipedia.org)

---

## Table of Contents

- Project Summary
- What is RAG?
- What is Vector Search?
- What is an LLM?
- What is OpenAI?
- What is Machine Learning?
- Features
- Project Structure
- Technology Stack
- How It Works
- Setup & Installation
- Environment Variables (.env)
- Running the Project
- Component & API Walkthrough
- Reusing Components
- Deployment
- Troubleshooting & Notes
- Keywords
- Conclusion

---

## Project Summary

**AI RAG Chatbot** is a Next.js 14 application that leverages Retrieval-Augmented Generation (RAG) to provide context-aware, accurate, and memory-enabled chat experiences. It uses OpenAI's GPT models for language generation, Upstash Vector for semantic search and context storage, and Upstash Redis for chat history and deduplication. The app supports dynamic website and PDF ingestion, blazing-fast semantic search, and a beautiful, modern UI.

---

## What is RAG?

**Retrieval-Augmented Generation (RAG)** is a technique that combines the power of large language models (LLMs) with external knowledge sources. Instead of relying solely on the model's internal knowledge (which can be outdated or limited), RAG retrieves relevant information from a database (like a vector store) and augments the model's prompt with this context. This leads to more accurate, up-to-date, and context-aware responses.

---

## What is Vector Search?

**Vector search** is a method of finding similar items (like text chunks, images, or documents) by comparing their vector representations (embeddings). In AI, text is converted into high-dimensional vectors using embedding models. When a user asks a question, its embedding is compared to those in the database, and the most similar (relevant) chunks are retrieved. This is the backbone of semantic search and RAG.

---

## What is an LLM?

A **Large Language Model (LLM)** is an AI model trained on massive amounts of text data to understand and generate human-like language. Examples include OpenAI's GPT-3.5 and GPT-4. LLMs can answer questions, write code, summarize text, and much more. In this project, the LLM is used to generate chat responses, augmented with external context via RAG.

---

## What is OpenAI?

**OpenAI** is an AI research and deployment company. Their GPT models (like GPT-3.5 and GPT-4) are among the most advanced LLMs available. OpenAI provides APIs for developers to integrate these models into their applications for tasks like chatbots, summarization, translation, and more.

---

## What is Machine Learning?

**Machine Learning (ML)** is a field of AI where computers learn from data to make predictions or decisions without being explicitly programmed. LLMs, vector search, and RAG are all applications of ML. This project demonstrates how modern ML techniques can be combined to build powerful, real-world applications.

---

## Features

- **Retrieval-Augmented Generation (RAG):** Combines LLMs with external knowledge for accurate, context-rich answers.
- **OpenAI GPT Integration:** Uses `gpt-3.5-turbo` or `gpt-4-turbo` for chat completions.
- **Upstash Vector Database:** Stores and retrieves document chunks for semantic search.
- **Upstash Redis:** Manages chat history and prevents duplicate vector storage.
- **Dynamic Webpage Ingestion:** Chat with any website by visiting `/www.example.com`.
- **PDF Ingestion:** Easily add and query PDF content.
- **Memory-Enabled Chat:** Remembers previous conversations for seamless context.
- **Modern UI:** Built with TailwindCSS, NextUI, Shadcn-UI, and Lucide-React icons.
- **Streaming Responses:** Real-time chat experience with Vercel AI SDK.
- **TypeScript & Best Practices:** Fully typed, modular, and production-ready.
- **Easy Deployment:** Deploy to Vercel or Netlify in minutes.

---

## Project Structure

```bash

ai-rag-chatbot/
├── public/
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── middleware.ts
│   │   ├── api/
│   │   │   └── chat-stream/route.ts
│   │   └── [...url]/page.tsx
│   ├── components/
│   │   ├── ChatInput.tsx
│   │   ├── ChatWrapper.tsx
│   │   ├── Message.tsx
│   │   ├── Messages.tsx
│   │   └── Providers.tsx
│   ├── lib/
│   │   ├── rag-chat.ts
│   │   ├── redis.ts
│   │   └── utils.ts
├── .env
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
├── README.md
└── ...
```

---

## Technology Stack

- **Frontend:** Next.js 14, React 18, TypeScript, TailwindCSS, NextUI, Shadcn-UI, Lucide-React
- **Backend:** Next.js API routes, Upstash Vector, Upstash Redis, OpenAI API
- **AI/ML:** OpenAI GPT-3.5/4, Retrieval-Augmented Generation (RAG)
- **Other:** Vercel AI SDK, PostCSS, modern ESLint/TypeScript config

---

## How It Works

1. **User asks a question** via the chat UI.
2. **Text is embedded** and queried against Upstash Vector to retrieve the most relevant context chunks.
3. **Prompt is constructed** by combining the user question and retrieved context.
4. **OpenAI GPT model** generates a response using the prompt.
5. **Chat history** is stored in Upstash Redis for memory and deduplication.
6. **Streaming response** is sent back to the UI for a real-time chat experience.

---

## Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-rag-chatbot.git
cd ai-rag-chatbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Node.js

Make sure you have Node.js installed: [https://nodejs.org/en/](https://nodejs.org/en/)

---

## Environment Variables (.env)

Create a .env file in your project root with the following:

```env
# OpenAI API Key (required if you use OpenAI models other than Upstash)
OPENAI_API_KEY="sk-..."

# UPSTASH API KEYS for Upstash Vector and Redis
# UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN are used for vector storage
# QSTASH_TOKEN is used for QStash API
# UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are used for Redis storage

# Upstash Vector Database
UPSTASH_VECTOR_REST_URL="https://your-vector-url.upstash.io"
UPSTASH_VECTOR_REST_TOKEN="your-vector-token"

# Upstash QStash (optional, for advanced features)
QSTASH_TOKEN="your-qstash-token"

# Upstash Redis (for chat history)
UPSTASH_REDIS_REST_URL="https://your-redis-url.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-redis-token"
```

> **Note:** As of now, the free tier for OpenAI API keys is expired, so you must add a payment method to your OpenAI account to receive responses. The project and code are fully up-to-date and working.

---

## Running the Project

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

To chat with a website, use:  
`http://localhost:3000/www.wikipedia.org`

---

## Component & API Walkthrough

### Main Components

- **ChatInput.tsx:** Handles user input and message sending.
- **Messages.tsx / Message.tsx:** Displays chat history and streaming responses.
- **ChatWrapper.tsx:** Wraps the chat UI and manages state.
- **Providers.tsx:** Sets up context providers for theme, state, etc.

### API

- **/api/chat-stream:** Handles chat requests, retrieves context from Upstash Vector, calls OpenAI, and streams responses.

### Dynamic Routing

- **[...url]/page.tsx:** Enables chatting with any website by dynamically ingesting and indexing its content.

### Middleware

- **middleware.ts:** Runs logic before page loads (e.g., authentication, logging).

---

## Reusing Components

- All components are modular and can be imported into other Next.js/React projects.
- Example:
  
  ```tsx
  import { ChatInput } from "@/components/ChatInput";
  ```

- The `ChatInput` component can be used in any React app to capture user input and send messages.

- The rag-chat.ts logic can be adapted for any RAG-based AI project.

---

## Deployment

- Deploy easily to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
- For Vercel, connect your repo and set environment variables in the dashboard.

---

## Troubleshooting & Notes

- **OpenAI 429 Error:** If you see a quota error, your OpenAI free tier is expired. Add a payment method at <https://platform.openai.com/account/billing>.
- **Upstash Limits:** Free Upstash plans have usage limits. Upgrade if you need more capacity.
- **Dynamic Ingestion:** For best results, use well-structured websites or PDFs.

---

## Keywords

AI chatbot, RAG chatbot, Retrieval Augmented Generation, OpenAI, Upstash Vector, semantic search, Next.js chatbot, website ingestion, PDF ingestion, context-aware AI, chatbot app, gpt-3.5-turbo, gpt-4-turbo, Upstash Redis, vector database, Arnob T., AI assistant, machine learning, LLM, ML, education

---

## Conclusion

This project is a production-ready, extensible example of how to build a modern, context-aware AI chatbot using RAG, OpenAI, and Upstash. Use it as a learning resource, a starter kit, or a foundation for your own AI-powered apps.

---

- Happy Coding! 🚀  
- Thank you!

---
