import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrzZp4DMA3TlJdYqk1cS1cZpWi-9f2OfY",
  authDomain: "munichi-store.firebaseapp.com",
  projectId: "munichi-store",
  storageBucket: "munichi-store.appspot.com",
  messagingSenderId: "633850219811",
  appId: "1:633850219811:web:5ed9ac37478f53c04cd096"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
