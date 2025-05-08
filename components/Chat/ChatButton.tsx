"use client";

import { useChatStore } from "@/store/useChatStore";
import { MessageSquare } from "lucide-react";

interface ChatButtonProps {
  noteId: string;
}

export default function ChatButton({ noteId }: ChatButtonProps) {
  const toggleChatVisibility = useChatStore(
    (state) => state.toggleChatVisibility
  );
  const chatVisibility = useChatStore((state) => state.chatVisibility);

  const isChatVisible = chatVisibility[noteId] || false;

  return (
    <button
      onClick={() => toggleChatVisibility(noteId)}
      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${
        isChatVisible
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
      aria-label={isChatVisible ? "Close chat" : "Open chat"}
    >
      <MessageSquare size={20} />
    </button>
  );
}
