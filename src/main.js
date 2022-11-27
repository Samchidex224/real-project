import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import firebase from "firebase/app";
import "firebase/auth";
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false
const firebaseConfig = {
    apiKey: "AIzaSyBw8CRRGOLSAN7B2AwhSc8RzS3ExxFKvBs",
    authDomain: "real-project-9cbad.firebaseapp.com",
    projectId: "real-project-9cbad",
    storageBucket: "real-project-9cbad.appspot.com",
    messagingSenderId: "913107189658",
    appId: "1:913107189658:web:ddd2dc6d2fb50a7c52c423"
  };

firebase.initializeApp(firebaseConfig);


new Vue({
  pinia,
  router,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBw8CRRGOLSAN7B2AwhSc8RzS3ExxFKvBs",
//   authDomain: "real-project-9cbad.firebaseapp.com",
//   projectId: "real-project-9cbad",
//   storageBucket: "real-project-9cbad.appspot.com",
//   messagingSenderId: "913107189658",
//   appId: "1:913107189658:web:ddd2dc6d2fb50a7c52c423"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
