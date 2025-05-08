"use client"

import { useNotesStore } from '@/store/useNotesStore';
import Editor from '@/components/Editor/Editor';
import ChatButton from '@/components/Chat/ChatButton';
import ChatInterface from '@/components/Chat/ChatInterface';
import { useChatStore } from '@/store/useChatStore';

export default function NotesContainer() {
  const { notes, activeNoteId, updateNoteTitle } = useNotesStore();
  const chatVisibility = useChatStore(state => state.chatVisibility);
  
  const activeNote = notes.find(note => note.id === activeNoteId);
  
  if (!activeNote) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">
          No note selected or available. Create a new note to get started.
        </p>
      </div>
    );
  }
  
  const isChatVisible = chatVisibility[activeNoteId] || false;
  
  return (
    <div className="flex flex-col h-full relative">
      <div className="p-4 border-b">
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => updateNoteTitle(activeNote.id, e.target.value)}
          className="text-2xl font-bold w-full outline-none"
          placeholder="Untitled Note"
        />
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <Editor noteId={activeNote.id} initialContent={activeNote.content} />
        </div>
      </div>
      
      {/* Chat UI */}
      {isChatVisible && (
        <div className="border-t border-gray-200">
          <ChatInterface noteId={activeNote.id} />
        </div>
      )}
      
      {/* Chat Button */}
      <div className="absolute bottom-4 right-4">
        <ChatButton noteId={activeNote.id} />
      </div>
    </div>
  );
}