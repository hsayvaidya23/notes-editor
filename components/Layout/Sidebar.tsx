"use client"

import { useNotesStore } from '@/store/useNotesStore' 
import NotesList from '@/components/Notes/NotesList'
import { Plus } from 'lucide-react'

export default function Sidebar() {
  const addNote = useNotesStore(state => state.addNote)
  
  return (
    <div className="w-64 bg-gray-100 h-full flex flex-col border-r border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Notes</h1>
        <button 
          onClick={addNote}
          className="p-1 rounded-md hover:bg-gray-200 transition-colors"
          aria-label="Add new note"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <NotesList />
      </div>
    </div>
  )
}