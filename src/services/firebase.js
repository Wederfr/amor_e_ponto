
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBxsqKbsiEXUzJaKUatiw4DN-dEu8MhaVk",
  authDomain: "amor-e-ponto.firebaseapp.com",
  projectId: "amor-e-ponto",
  storageBucket: "amor-e-ponto.firebasestorage.app",
  messagingSenderId: "742450915232",
  appId: "1:742450915232:web:3fd772a3b5689aafdc26c5"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app)
export default db;


const produtos = [
  { id: 1, title: 'Casa nova', price: 100, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/imagemTeste.jpeg' },
  { id: 2, title: 'Personalizado', price: 150, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/personalizado.jpg' },
  { id: 3, title: 'Porta maternidade', price: 200, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/porta%20maternidade.jpeg' },
  { id: 4, title: 'Porta alianças', price: 120, pictureUrl: 'https://raw.githubusercontent.com/Wederfr/amor_e_ponto/refs/heads/master/porta%20alian%C3%A7a.jpg' },
]

console.log("firebase");

// produtos.forEach(async (obj) => {
// const docRef = await addDoc(collection(db, "produtos"), obj);
// console.log("Documents written with ID: ",docRef.id);
// });

