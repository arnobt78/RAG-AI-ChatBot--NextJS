# RAG-AI-ChatBot--NextJS

![Screenshot 2024-09-10 at 20 10 31](https://github.com/user-attachments/assets/d73cafe5-22a2-4356-944f-0f5601be9da8) ![Screenshot 2024-09-10 at 17 57 55](https://github.com/user-attachments/assets/b338d3e4-db6e-425a-8a13-1b2055ba2afc)

---

## Project Overview

**RAG-AI-ChatBot--NextJS** is a modern, production-ready Retrieval-Augmented Generation (RAG) ChatBot web application built with Next.js 14 and TypeScript. It leverages Upstash Vector Database, QStash, and Redis for scalable vector search and queuing, and provides a dynamic, extensible template for building AI-driven chat interfaces. The project is also integrated with Vercel AI SDK, TailwindCSS, Shadcn-UI, Lucide React, and NextUI for a seamless, beautiful, and performant user experience.

---

## Features

- **Retrieval-Augmented Generation (RAG):** Combines LLMs with vector search for context-aware Q&A.
- **Dynamic Webpage Support:** Insert any webpage dynamically for chat-based interaction and RAG processing.
- **Scalable Vector Storage:** Uses Upstash Vector Database for efficient, serverless vector operations.
- **Queue Management:** Upstash QStash handles background or scheduled tasks and message queues.
- **Duplicate Prevention:** Upstash Redis checks and prevents duplicate webpage/vector entries.
- **Modern UI/UX:** Built with TailwindCSS, Shadcn-UI, Lucide React icons, and NextUI for a clean, responsive interface.
- **Middleware:** Next.js middleware enables request pre-processing and advanced routing.
- **Live Demo:** Instantly try the app online.
- **TypeScript:** Full type safety across the app.
- **Vercel AI SDK:** For advanced client-side AI hooks and chat streaming.

---

## Live Demo

- **Localhost:** http://localhost:3000/www.wikipedia.org
- **Online:** https://ai-rag-chatbot-arnob.vercel.app/www.wikipedia.org

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Instructions](#usage-instructions)
- [Environment Variables](#environment-variables)
- [Integrations & Dependencies](#integrations--dependencies)
- [Customization](#customization)
- [Deployment](#deployment)
- [Learning Resources](#learning-resources)

---

## Technology Stack

- **Frontend:** Next.js 14, React, TypeScript, TailwindCSS, Shadcn-UI, NextUI, Lucide React
- **Backend/Data:** Upstash Vector, Upstash Redis, Upstash QStash
- **AI/LLM:** Vercel AI SDK, Retrieval-Augmented Generation
- **Dev Tools:** Node.js, npm
- **Deployment:** Vercel

---

## Project Structure

```
.
├── app/                  # Main app directory (pages, API routes)
│   └── [...url]/         # Dynamic route folder for website-based RAG
│       └── page.tsx      # Dynamic RAG chat page
├── components/           # UI Components
├── lib/                  # Helper libraries and utilities
├── public/               # Static assets (including images)
├── styles/               # Tailwind and additional styles
├── middleware.ts         # Middleware logic for pre-processing requests
├── tailwind.config.ts    # TailwindCSS configuration
├── .env                  # Environment variables (not committed)
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---

## Installation & Setup

### 1. Prerequisites

- **Node.js**: [Install Node.js](https://nodejs.org/en/) (v18+ recommended)
- **npm**: Comes with Node.js

### 2. Clone the Repository

```bash
git clone https://github.com/arnobt78/RAG-AI-ChatBot--NextJS.git
cd RAG-AI-ChatBot--NextJS
```

### 3. Install Dependencies

```bash
npm install
```

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

---

## Usage Instructions

### 1. Start Development Server

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- To test with a webpage, use: [http://localhost:3000/www.wikipedia.org](http://localhost:3000/www.wikipedia.org)

### 2. Dynamic Webpage Integration

- To enable chat for any website, the app uses a dynamic route.
- Create a folder: `app/[...url]/`
- Add a page file: `page.tsx`

### 3. Editing & Customization

- Main logic and UI: `app/[...url]/page.tsx` and `components/`
- Tailwind and NextUI configuration: `tailwind.config.ts`
- Middleware logic: `middleware.ts`

---

## Integrations & Dependencies

- **Upstash Vector:** `npm install @upstash/rag-chat`
- **Upstash Redis:** `npm install @upstash/redis`
- **Upstash QStash:** Used for background job management.
- **Vercel AI SDK:** `npm install ai`
- **TailwindCSS:** `npm install tailwindcss`
- **Shadcn-UI:** `npx shadcn-ui@latest init`
- **Lucide React (Icons):** `npm i lucide-react`
- **NextUI:** `npm i @nextui-org/react`

#### NextUI & Tailwind Integration:

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
- **Component-based Development:** Easily add or modify components in `/components`.

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

`RAG`, `AI ChatBot`, `Next.js`, `TypeScript`, `Vercel`, `Upstash`, `Vector Database`, `Redis`, `QStash`, `TailwindCSS`, `Shadcn-UI`, `NextUI`, `Lucide React`, `Vercel AI SDK`, `Dynamic Routing`, `Middleware`, `Web Chatbot`, `Fullstack AI App`

---

## Screenshots

Look Above

---

## License

[MIT](LICENSE)
