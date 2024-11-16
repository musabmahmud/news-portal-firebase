// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKDGxUZ1eKIro1XynKtrfea1g-ZvBJbPU",
    authDomain: "news-portal-firebase.firebaseapp.com",
    projectId: "news-portal-firebase",
    storageBucket: "news-portal-firebase.firebasestorage.app",
    messagingSenderId: "365925089485",
    appId: "1:365925089485:web:e48e79f588a464fd206984",
    measurementId: "G-WW556V7E7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;