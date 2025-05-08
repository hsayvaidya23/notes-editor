"use client"

import { useNotesStore } from '@/store/useNotesStore' 
import NotesList from '@/components/Notes/NotesList'
import { Plus } from 'lucide-react'

export default function Sidebar() {
  const addNote = useNotesStore(state => state.addNote)
  
  return (
    <aside className="w-64 h-screen flex flex-col border-r-4 border-gray-500 bg-white text-black z-50">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Notes</h1>
        <button 
          onClick={addNote}
          className="p-1 rounded-md hover:bg-gray-700 transition-colors"
          aria-label="Add new note"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <NotesList />
      </div>
    </aside>
  )
}