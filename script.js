// Aqui você adicionará o código JavaScript do seu webapp
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth'; // Importe a biblioteca de autenticação

console.log("Olá, mundo!");

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app); // Inicialize a autenticação