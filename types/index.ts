export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  noteId: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export interface NotesState {
  notes: Note[];
  activeNoteId: string | null;
  addNote: () => void;
  updateNoteTitle: (id: string, title: string) => void;
  updateNoteContent: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
  setActiveNote: (id: string) => void;
}

export interface ChatState {
  chatHistories: Record<string, ChatMessage[]>;
  chatVisibility: Record<string, boolean>;
  addMessage: (noteId: string, content: string, sender: "user" | "ai") => void;
  toggleChatVisibility: (noteId: string) => void;
  clearChatHistory: (noteId: string) => void;
}
