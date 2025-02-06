"use client";

import axios from "axios";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const NewTodoPage = () => {
  const [error, setError] = useState<string | null>(null);

  const addNote = async (noteTitle: string, noteContent: string) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/todo/add-todo/",
        {
          title: noteTitle,
          content: noteContent,
        }
      );
      toast.success("Todo added successfully!");
    } catch (err) {
      setError("Failed to add note");
      toast.error("Failed to add note");
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const noteTitle = formData.get("noteTitle") as string;
    const noteContent = formData.get("noteContent") as string;
    addNote(noteTitle, noteContent);
  };

  const handleCancel = () => {
    window.history.back();
  };
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Create a New Note
        </h1>

        <form onSubmit={handleSave}>
          <div className="mb-6">
            <label
              htmlFor="noteTitle"
              className="block text-gray-700 font-medium mb-2"
            >
              Note Title
            </label>
            <input
              type="text"
              id="noteTitle"
              name="noteTitle"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter note title"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="noteContent"
              className="block text-gray-700 font-medium mb-2"
            >
              Note Content
            </label>
            <textarea
              id="noteContent"
              name="noteContent"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter note content"
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              onClick={handleCancel}
            >
              Return to Dashboard
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
      <ToastContainer aria-label={"undefined"} />
    </div>
  );
};

export default NewTodoPage;
