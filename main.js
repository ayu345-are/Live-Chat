// 1. Impor module yang diperlukan dari firebase dan firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
    doc,
    updateDoc,
    deleteDoc,
    increment
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

// 2. konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9Y7W9t_3MFRj4oRybnr8MuUU8IiVC1b0",
  authDomain: "rpl2528-720aa.firebaseapp.com",
  projectId: "rpl2528-720aa",
  storageBucket: "rpl2528-720aa.firebasestorage.app",
  messagingSenderId: "715967831691",
  appId: "1:715967831691:web:475f2e70041657c2bd3e8e"
}

// 3. Inisialisasi aplikasi Firebase dan Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const messagesCollection = collection(db, "messages")
