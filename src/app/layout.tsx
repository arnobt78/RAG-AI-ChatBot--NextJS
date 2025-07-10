import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI RAG Chatbot | Retrieval-Augmented Generation Chat App",
  description:
    "A modern AI chatbot app using Retrieval-Augmented Generation (RAG), OpenAI GPT, and Upstash Vector. Chat with context-aware answers, website and PDF ingestion, and blazing-fast semantic search.",
  keywords: [
    "AI chatbot",
    "RAG chatbot",
    "Retrieval Augmented Generation",
    "OpenAI",
    "Upstash Vector",
    "semantic search",
    "Next.js chatbot",
    "website ingestion",
    "PDF ingestion",
    "context-aware AI",
    "chatbot app",
    "gpt-3.5-turbo",
    "gpt-4-turbo",
    "Upstash Redis",
    "vector database",
    "Arnob T.",
    "AI assistant"
  ],
  authors: [{ name: "Arnob T.", url: "https://github.com/arnob78" }],
  creator: "Arnob T.",
  openGraph: {
    title: "AI RAG Chatbot | Retrieval-Augmented Generation Chat App",
    description:
      "A modern AI chatbot app using Retrieval-Augmented Generation (RAG), OpenAI GPT, and Upstash Vector. Chat with context-aware answers, website and PDF ingestion, and blazing-fast semantic search.",
    url: "https://ai-rag-chatbot.vercel.app/",
    siteName: "AI RAG Chatbot",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "AI RAG Chatbot App Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI RAG Chatbot | Retrieval-Augmented Generation Chat App",
    description:
      "A modern AI chatbot app using Retrieval-Augmented Generation (RAG), OpenAI GPT, and Upstash Vector. Chat with context-aware answers, website and PDF ingestion, and blazing-fast semantic search.",
    creator: "@arnob78",
    images: ["/next.svg"]
  },
  metadataBase: new URL("https://ai-rag-chatbot.vercel.app/")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <Providers>
          <main className="h-screen dark text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
