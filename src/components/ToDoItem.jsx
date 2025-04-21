import React, { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-3 rounded-lg mb-2 shadow-sm transition">
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 mr-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-2 ml-4">
        <button
          onClick={handleEdit}
          className="text-sm text-blue-500 hover:text-blue-700 font-medium"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-sm text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
