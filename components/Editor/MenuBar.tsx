"use client";

import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
} from "lucide-react";

interface MenuBarProps {
  editor: Editor;
}

export default function MenuBar({ editor }: MenuBarProps) {
  if (!editor) {
    return null;
  }

  const menuItems = [
    {
      icon: <Bold size={18} />,
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: <Italic size={18} />,
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
    },
    {
      type: "divider",
    },
    {
      icon: <Heading1 size={18} />,
      title: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 size={18} />,
      title: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 size={18} />,
      title: "Heading 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
    },
    {
      type: "divider",
    },
    {
      icon: <List size={18} />,
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered size={18} />,
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
    },
    {
      type: "divider",
    },
    {
      icon: <Undo size={18} />,
      title: "Undo",
      action: () => editor.chain().focus().undo().run(),
      disabled: () => !editor.can().undo(),
    },
    {
      icon: <Redo size={18} />,
      title: "Redo",
      action: () => editor.chain().focus().redo().run(),
      disabled: () => !editor.can().redo(),
    },
  ];

  return (
    <div className="flex items-center gap-1 p-2 border border-gray-200 rounded-md bg-white">
      {menuItems.map((item, index) =>
        item.type === "divider" ? (
          <div key={index} className="w-px h-6 bg-gray-200 mx-1" />
        ) : (
          <button
            key={index}
            onClick={item.action}
            className={`p-2 rounded hover:bg-gray-100 ${
              item.isActive ? "bg-gray-100 text-blue-600" : ""
            } ${item.disabled?.() ? "opacity-30" : "opacity-100"}`}
            disabled={item.disabled?.()}
            title={item.title}
          >
            {item.icon}
          </button>
        )
      )}
    </div>
  );
}
