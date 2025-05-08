import { useNotesStore } from "@/store/useNotesStore";
import NoteItem from "./NoteItem";

export default function NotesList() {
  const notes = useNotesStore((state) => state.notes);

  return (
    <div className="py-2">
      {notes.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          No notes yet. Create one by clicking the + button.
        </div>
      ) : (
        notes.map((note) => <NoteItem key={note.id} note={note} />)
      )}
    </div>
  );
}
