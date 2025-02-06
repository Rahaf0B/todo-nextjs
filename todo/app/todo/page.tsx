"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ITodo } from "../interface/todo";
import TodoCard from "../components/TodoCard"; // Adjust the path as necessary
const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/todo/"
      )
      .then((response) => {
        console.log(response.data);
        setTodos(response.data.items);
      })
      .catch((err) => {
        setError("Failed to load todos");
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">NoteMaster</h1>
          <div className="flex space-x-4">

            <Link
              href="/todo/new"
              className="text-gray-700 hover:text-gray-900"
            >
              Create Note
            </Link>
          </div>
        </nav>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            todos Overview
          </h2>

          <div className="space-y-4">
            {Array.isArray(todos) && todos.length !== 0 ? (
              todos.map((todo: ITodo) => <TodoCard key={todo.id} todo={todo} />)
            ) : (
              <p className="text-xl font-semibold text-blue-500 mb-6">
                No todos available
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TodoPage;
