"use client";
import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";
import { db } from "./firebase";
import { collection, onSnapshot, query, orderBy, addDoc, serverTimestamp, deleteDoc, doc } from "firebase/firestore";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }));
      setTasks(list);
    });
    return unsubscribe;
  }, []);

  const addTask = async () => {
    if (text === "") return;
    await addDoc(collection(db, "tasks"), {
      title: text,
      isDone: false,
      createdAt: serverTimestamp(),
    });
    setText("");
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  return (
    <main>
      <h1>My Tasks</h1>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={addTask}>Add</button>
      {tasks.length === 0 && <p>No tasks yet!</p>}
      <ul>
        {tasks.map((task) => <TaskItem key={task.id} id={task.id} title={task.title} onDelete={deleteTask} />)}
      </ul>
    </main>
  );
}