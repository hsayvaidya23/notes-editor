"use client"

import Sidebar from '@/components/Layout/Sidebar'
import NotesContainer from '@/components/Notes/NotesContainer'

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      <div className="flex-1">
        <NotesContainer />
      </div>
    </main>
  )
}