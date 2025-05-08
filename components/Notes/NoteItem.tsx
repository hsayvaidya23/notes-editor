import { useNotesStore } from "@/store/useNotesStore";
import { Note } from "@/types";
import { formatDistanceToNow } from "@/lib/dateUtils";
import { File, Trash2 } from "lucide-react";
import { useMemo } from "react";

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  const { activeNoteId, setActiveNote, deleteNote } = useNotesStore();

  const isActive = activeNoteId === note.id;

  // Format the date to a relative time (e.g., "2 hours ago")
  const formattedDate = useMemo(() => {
    try {
      return formatDistanceToNow(note.updatedAt);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Just now";
    }
  }, [note.updatedAt]);

  return (
    <div
      className={`p-3 cursor-pointer hover:bg-gray-200 transition-colors ${
        isActive ? "bg-gray-200" : ""
      }`}
      onClick={() => setActiveNote(note.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <File size={16} />
          <span className="font-medium truncate">{note.title}</span>
        </div>

        <button
          className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            deleteNote(note.id);
          }}
          aria-label="Delete note"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="text-xs text-gray-500 mt-1">{formattedDate}</div>
    </div>
  );
}
