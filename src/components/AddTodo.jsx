import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter Todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="btn_container">
          <button>Add TODO</button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
