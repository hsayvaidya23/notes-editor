"use client";

import { useRef, useEffect, useState } from "react";
import { useChatStore } from "@/store/useChatStore";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { getAIResponse } from "@/lib/dummyApi";
import { X } from "lucide-react";

interface ChatInterfaceProps {
  noteId: string;
}

export default function ChatInterface({ noteId }: ChatInterfaceProps) {
  const { chatHistories, addMessage, toggleChatVisibility, clearChatHistory } =
    useChatStore();

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages = chatHistories[noteId] || [];

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    addMessage(noteId, content, "user");

    // Simulate AI response
    setIsLoading(true);
    try {
        const response = await getAIResponse(content);
        addMessage(noteId, response, "ai");
    } catch (error) {
      console.error("Error fetching AI response:", error);
      addMessage(
        noteId,
        "Sorry, I couldn't process your request. Please try again.",
        "ai"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-64 bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <h3 className="font-medium">Chat Assistant</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => clearChatHistory(noteId)}
            className="text-xs text-gray-500 hover:text-gray-700"
            aria-label="Clear chat history"
          >
            Clear history
          </button>
          <button
            onClick={() => toggleChatVisibility(noteId)}
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-gray-500 text-center">
              No messages yet. Start a conversation with your AI assistant!
            </p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className="p-4 border-t">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
