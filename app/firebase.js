import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNdajnMZFMaDQv5z7KscodtNKhUwuYcK8",
  authDomain: "task-tracker-bf7be.firebaseapp.com",
  projectId: "task-tracker-bf7be",
  storageBucket: "task-tracker-bf7be.firebasestorage.app",
  messagingSenderId: "1068918854279",
  appId: "1:1068918854279:web:546b8f11be8cc88cc31e22"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);