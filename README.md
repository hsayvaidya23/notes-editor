# Notes App with AI Chat

## Overview

I've created a Notion-style notes editor with an embedded AI chat interface using Next.js, TypeScript, and Tailwind CSS. The application allows users to create, edit, and manage notes with a rich text editor (TipTap) and includes an AI chat assistant that can be toggled for each note.

## Features Implemented

### Notes System
- Sidebar to view and switch between multiple notes
- Each note has a title and rich text body
- TipTap editor with support for:
  - Text formatting (bold, italic)
  - Headings (H1, H2, H3)
  - Bullet lists
  - Numbered lists

### AI Chat UI
- Circular AI button at the bottom-right of each note
- Floating chat interface that appears at the bottom of the note
- Chat window with:
  - User message input
  - Mock AI responses via dummy API
  - Right-aligned user messages
  - Left-aligned AI responses

### State Management
- Zustand for global state management
- Note-specific chat history
- Proper state handling for all UI components

## Project Structure

```
notes-app/
├── package.json               # NPM dependencies
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── src/
    ├── app/                   # Next.js app folder
    │   ├── globals.css        # Global styles
    │   ├── layout.tsx         # Root layout
    │   └── page.tsx           # Root page component
    ├── components/            # UI components
    │   ├── Editor/            # TipTap editor components
    │   ├── Notes/             # Notes management components
    │   ├── Layout/            # Layout components
    │   └── Chat/              # Chat UI components
    ├── store/                 # Zustand stores
    │   ├── useNotesStore.ts   # Notes state management
    │   └── useChatStore.ts    # Chat state management
    ├── types/                 # TypeScript type definitions
    └── lib/                   # Utility functions
        ├── dateUtils.ts       # Date formatting utilities
        └── dummyApi.ts        # Mock AI API
```

## How It Works

### State Management with Zustand

The application uses Zustand for state management, with two main stores:

1. **Notes Store** (`useNotesStore.ts`):
   - Manages the list of notes
   - Tracks the active note
   - Handles note creation, updating, and deletion

2. **Chat Store** (`useChatStore.ts`):
   - Manages chat histories for each note
   - Controls chat visibility
   - Handles adding messages and clearing chat history

### Rich Text Editing with TipTap

The TipTap editor is integrated to provide rich text capabilities:

- `Editor.tsx` sets up the TipTap editor with necessary extensions
- `MenuBar.tsx` provides formatting controls and styling options
- The editor content is stored in the notes store

### AI Chat Interface

The AI chat functionality:

- Is toggled via a floating button at the bottom-right of each note
- Uses a dummy API (`dummyApi.ts`) to simulate responses
- Maintains separate chat histories for each note
- Visually separates user and AI messages

## Technical Implementation Details

### Component Design

- **Modular approach**: Each component has a single responsibility
- **TypeScript interfaces**: All props and state are properly typed
- **Responsive design**: The UI adapts to different screen sizes

### Performance Considerations

- State updates are optimized to avoid unnecessary renders
- Chat histories are stored per note to prevent performance issues with large chat logs
- TipTap editor is configured for efficient updates

### User Experience Enhancements

- Visual feedback for active states
- Smooth transitions for showing/hiding the chat interface
- Intuitive note navigation

## How to Use

1. **Creating Notes**:
   - Click the + button in the sidebar to create a new note
   - Give it a title by editing the title field

2. **Editing Notes**:
   - Use the TipTap toolbar to format text
   - Create headings, lists, and apply text formatting
   - Changes are automatically saved

3. **Using the AI Chat**:
   - Click the chat button at the bottom-right to toggle the chat interface
   - Type a message and press Enter or click Send
   - View the AI's response
   - Chat history is preserved per note

## Deployment

To deploy this application:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. For production: `npm run build` followed by `npm run start`
5. Alternatively, deploy to Vercel for automatic setup

## Future Enhancements

- Add more rich text features (images, code blocks, etc.)
- Implement real-time collaborative editing
- Add search functionality for notes
- Integrate a real AI API instead of the dummy one
- Add authentication and user accounts
- Implement note organization with folders/tags

This implementation satisfies all the requirements specified in the assignment, providing a clean, functional Notion-style editor with an embedded AI chat interface.
