import { create } from "zustand";
import { ChatState, ChatMessage } from "@/types";

export const useChatStore = create<ChatState>((set) => ({
  chatHistories: {},
  chatVisibility: {},

  addMessage: (noteId, content, sender) =>
    set((state) => {
      const message: ChatMessage = {
        id: Date.now().toString(),
        noteId,
        content,
        sender,
        timestamp: new Date(),
      };

      const existingMessages = state.chatHistories[noteId] || [];

      return {
        chatHistories: {
          ...state.chatHistories,
          [noteId]: [...existingMessages, message],
        },
        chatVisibility: {
          ...state.chatVisibility,
          [noteId]: true, // Make sure chat is visible when a message is added
        },
      };
    }),

  toggleChatVisibility: (noteId) =>
    set((state) => ({
      chatVisibility: {
        ...state.chatVisibility,
        [noteId]: !(state.chatVisibility[noteId] || false),
      },
    })),

  clearChatHistory: (noteId) =>
    set((state) => ({
      chatHistories: {
        ...state.chatHistories,
        [noteId]: [],
      },
    })),
}));
