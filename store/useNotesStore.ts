import { create } from "zustand";
import { NotesState, Note } from "@/types";

const DEFAULT_NOTE: Note = {
  id: "1",
  title: "Untitled Note",
  content: "<p>Start writing here...</p>",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const useNotesStore = create<NotesState>((set) => ({
  notes: [DEFAULT_NOTE],
  activeNoteId: DEFAULT_NOTE.id,

  addNote: () =>
    set((state) => {
      const newNote: Note = {
        id: Date.now().toString(),
        title: "Untitled Note",
        content: "<p>Start writing here...</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return {
        notes: [...state.notes, newNote],
        activeNoteId: newNote.id,
      };
    }),

  updateNoteTitle: (id, title) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, title, updatedAt: new Date() } : note
      ),
    })),

  updateNoteContent: (id, content) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, content, updatedAt: new Date() } : note
      ),
    })),

  deleteNote: (id) =>
    set((state) => {
      const filteredNotes = state.notes.filter((note) => note.id !== id);
      const newActiveId =
        state.activeNoteId === id && filteredNotes.length > 0
          ? filteredNotes[0].id
          : state.activeNoteId;

      return {
        notes: filteredNotes,
        activeNoteId: filteredNotes.length === 0 ? null : newActiveId,
      };
    }),

  setActiveNote: (id) => set({ activeNoteId: id }),
}));
