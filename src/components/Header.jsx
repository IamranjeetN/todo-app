import React from "react";

function Header({ input, setInput, addTodo }) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        📝 To-Do List
      </h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Header;
