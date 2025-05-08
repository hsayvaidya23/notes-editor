"use client"

import { useCallback, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useNotesStore } from '@/store/useNotesStore'
import MenuBar from './MenuBar'

interface EditorProps {
  noteId: string;
  initialContent: string;
}

export default function Editor({ noteId, initialContent }: EditorProps) {
  const updateNoteContent = useNotesStore(state => state.updateNoteContent);
  
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      updateNoteContent(noteId, editor.getHTML());
    },
  });

  // Update editor content when note changes
  useEffect(() => {
    if (editor && editor.getHTML() !== initialContent) {
      editor.commands.setContent(initialContent);
    }
  }, [editor, initialContent, noteId]);

  if (!editor) {
    return null;
  }

  return (
    <div className="py-4 px-6">
      <MenuBar editor={editor} />
      <div className="mt-2 border rounded-md">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
