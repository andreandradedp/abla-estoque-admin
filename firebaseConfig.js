
const firebaseConfig = {
  apiKey: "AIzaSyDTd29E--PE2-DGYYMUsXMhejzGdN0owqs",
  authDomain: "abla-estoque-admin.firebaseapp.com",
  projectId: "abla-estoque-admin",
  storageBucket: "abla-estoque-admin.firebasestorage.app",
  messagingSenderId: "471991248046",
  appId: "1:471991248046:web:d43f222c0b92a0a85af93f",
  measurementId: "G-6PQQTEFBF7"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Inicializa o Realtime Database