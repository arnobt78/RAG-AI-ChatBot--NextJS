# RAG AI ChatBot - NextJS Vector Search

![Screenshot 2024-09-10 at 20 10 31](https://github.com/user-attachments/assets/d73cafe5-22a2-4356-944f-0f5601be9da8) ![Screenshot 2024-09-10 at 17 57 55](https://github.com/user-attachments/assets/b338d3e4-db6e-425a-8a13-1b2055ba2afc)

---

## Project Summary

**RAG-AI-ChatBot--NextJS** is a production-ready, modern AI ChatBot web application built on Retrieval-Augmented Generation (RAG) techniques. It leverages the Next.js 14 framework, TypeScript, Upstash Vector Database, QStash, Redis, and Vercel AI SDK to provide highly contextual, dynamic, and scalable chatbot experiences for any website. The project is modular, cloud-ready, and demonstrates state-of-the-art approaches for integrating LLMs with vector search, middleware, and real-time streaming UIs.

---

## Live Demo

- **Localhost:** http://localhost:3000/www.wikipedia.org
- **Live-Demo:** https://ai-rag-chatbot-arnob.vercel.app/www.wikipedia.org

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Component Overview](#component-overview)
- [API & Routing](#api--routing)
- [How It Works (Detailed Walkthrough)](#how-it-works-detailed-walkthrough)
- [Installation & Setup](#installation--setup)
- [Usage Instructions](#usage-instructions)
- [Environment Variables](#environment-variables)
- [Integrations & Dependencies](#integrations--dependencies)
- [Customization](#customization)
- [Deployment](#deployment)
- [Learning Resources](#learning-resources)
- [Keywords](#keywords)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **Retrieval-Augmented Generation (RAG):** Fuses LLM-based Q&A with vector search for deep, context-aware conversations.
- **Dynamic Webpage Support:** Instantly chat with *any* webpage—just enter the URL.
- **Scalable Vector Storage:** Upstash Vector provides cost-effective, serverless vector embedding storage.
- **Queue Management:** Upstash QStash handles scheduled/background jobs and queue management.
- **Duplicate Prevention:** Upstash Redis ensures the same webpage/vector isn’t processed multiple times.
- **Modern, Responsive UI/UX:** Built with TailwindCSS, Shadcn-UI, NextUI, and Lucide React icons.
- **Advanced Middleware:** Next.js middleware used for request pre-processing and dynamic routing.
- **Type-Safe & Modular:** Full TypeScript support, modular code for easy extension.
- **Vercel AI SDK:** Enables efficient client-side AI hooks and real-time chat streaming.
- **Easy Deployment:** Deploy instantly to Vercel or your favorite cloud.

---

## Technology Stack

- **Frontend:** Next.js 14, React, TypeScript, TailwindCSS, Shadcn-UI, NextUI, Lucide React
- **Backend/Data:** Upstash Vector, Upstash Redis, Upstash QStash
- **AI/LLM:** Vercel AI SDK, Retrieval-Augmented Generation
- **Dev Tools:** Node.js, npm
- **Deployment:** Vercel

---

## Project Structure

A typical structure (may vary slightly):

```
.
├── app/                  # Main app directory (pages, API routes)
│   └── [...url]/         # Dynamic route folder for website-based RAG
│       └── page.tsx      # Dynamic RAG chat page
├── components/           # UI Components (chat UI, inputs, buttons, etc.)
├── lib/                  # Helper libs/utilities (vector, redis, qstash integration, etc.)
├── public/               # Static assets (images, icons, etc.)
├── styles/               # Tailwind and custom styles
├── middleware.ts         # Middleware for request pre-processing
├── tailwind.config.ts    # TailwindCSS configuration
├── .env                  # Environment variables (not committed)
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---

## Component Overview

**Key Components:**

- `app/[...url]/page.tsx` — Main dynamic chat page for any website URL.
- `components/` — Reusable UI components (chat window, message bubble, input, button, loader, etc.)
- `lib/` — Contains API code for working with Upstash Vector, Redis, QStash, and more.
- `middleware.ts` — Handles advanced routing and request pre-processing (e.g., URL validation, logging).
- `tailwind.config.ts` — UI theming and style management.

---

## API & Routing

- **Dynamic Routing:** Uses `[...url]` wildcard in Next.js to create a unique chat interface for *any* provided website.
- **API Integration:**
  - Upstash Vector: Stores/fetches vector embeddings for RAG.
  - Upstash Redis: Prevents duplication and manages session state.
  - QStash: Handles background tasks and scheduled jobs (like vectorization or refresh).
  - Vercel AI SDK: Provides AI/LLM chat hooks and streaming.

---

## How It Works (Detailed Walkthrough)

1. **Enter a Website URL:**  
   User visits `/www.example.com` — the app dynamically spins up a chat page for that site.

2. **Vectorization & Retrieval:**
   - The site’s content is pulled, chunked, and embedded as vectors (if not already in Upstash Vector).
   - Redis checks if the vectors/Webpage have already been added to avoid duplicate work.

3. **RAG Chat with LLM:**
   - When the user asks a question, the app performs vector search for relevant context.
   - The context is passed to the LLM via Vercel AI SDK, producing an accurate, context-aware response.

4. **Queue Management:**
   - Heavy or scheduled tasks (like re-vectorizing large sites) are offloaded to QStash.
   - This keeps the UI snappy and scalable.

5. **UI/UX:**
   - Real-time chat is streamed using Vercel AI SDK hooks.
   - UI is responsive and feels like a modern chat experience.

6. **Customization:**
   - Easily swap out LLMs, change UI themes, or extend middleware and components.

---

## Installation & Setup

### 1. Prerequisites

- **Node.js:** [Install Node.js](https://nodejs.org/en/) (v18+ recommended)
- **npm:** Comes with Node.js

---

### 2. Clone the Repository

```bash
git clone https://github.com/arnobt78/RAG-AI-ChatBot--NextJS.git
cd RAG-AI-ChatBot--NextJS
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Environment Variables

- Sign up at [Upstash](https://upstash.com/) and create projects for Vector, QStash, and Redis.
- Copy your API keys/URLs from the Upstash dashboard.
- Create a `.env` file in the root folder:

```
UPSTASH_VECTOR_REST_URL=""
UPSTASH_VECTOR_REST_TOKEN=""
QSTASH_TOKEN=""
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

> ⚠️ **Note:** The provided example keys may be expired. Please generate your own from your Upstash account.

---

## Usage Instructions

### 1. Start Development Server

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- To test with a webpage, use: [http://localhost:3000/www.wikipedia.org](http://localhost:3000/www.wikipedia.org)

---

### 2. Dynamic Webpage Integration

- To enable RAG chat for any website, the app uses a dynamic route.
- Folder: `app/[...url]/`
- File: `page.tsx`

---

### 3. Editing & Customization

- Main logic/UI: `app/[...url]/page.tsx` and `components/`
- Tailwind/NextUI config: `tailwind.config.ts`
- Middleware: `middleware.ts`

---

## Environment Variables

Create a `.env` file in the project root with your Upstash and QStash credentials:

```
UPSTASH_VECTOR_REST_URL=your_vector_url
UPSTASH_VECTOR_REST_TOKEN=your_vector_token
QSTASH_TOKEN=your_qstash_token
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

---

## Integrations & Dependencies

- **Upstash Vector:**  
  `npm install @upstash/rag-chat`
- **Upstash Redis:**  
  `npm install @upstash/redis`
- **Upstash QStash:**  
  Used for background job management.
- **Vercel AI SDK:**  
  `npm install ai`
- **TailwindCSS:**  
  `npm install tailwindcss`
- **Shadcn-UI:**  
  `npx shadcn-ui@latest init`
- **Lucide React (Icons):**  
  `npm i lucide-react`
- **NextUI:**  
  `npm i @nextui-org/react`

---

#### NextUI & Tailwind Integration Example

In `tailwind.config.ts`:

```js
content: [
  // ...your existing globs
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
const { nextui } = require("@nextui-org/react");
plugins: [require("tailwindcss-animate"), nextui()],
```
[See NextUI Docs](https://nextui.org/docs/frameworks/nextjs) for more details.

---

## Customization

- **Add More AI Providers:** Swap LLM sources in the API integration layer.
- **Custom UI Themes:** Change Tailwind config or swap Shadcn/NextUI themes.
- **Extend Middleware:** Add custom logic in `middleware.ts`.
- **Component-based Development:** Easily add/modify components in `/components`.

---

## Deployment

Deploy to Vercel for best results:

- [Deploy on Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app)

See [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel AI SDK](https://www.npmjs.com/package/ai)
- [Upstash Vector/Redis Docs](https://upstash.com/docs/vector/sdks/rag-chat/gettingstarted)
- [Shadcn-UI Docs](https://ui.shadcn.com/docs/installation/next)
- [TailwindCSS Docs](https://tailwindcss.com/docs/guides/nextjs)
- [NextUI Docs](https://nextui.org/docs/frameworks/nextjs)

---

## Keywords

`RAG`, `AI ChatBot`, `Next.js`, `TypeScript`, `Vercel`, `Upstash`, `Vector Database`, `Redis`, `QStash`, `TailwindCSS`, `Shadcn-UI`, `NextUI`, `Lucide React`, `Vercel AI SDK`, `Dynamic Routing`, `Chatbot`, `LLM`, `Middleware`, `Streaming`, `Production-ready`, `Open Source`, `Context-aware AI`

---

## Screenshots

See images at the top of this README.

---

## License

[MIT](LICENSE)

Happy Coding!
