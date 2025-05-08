"use client"

import { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-full">
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}