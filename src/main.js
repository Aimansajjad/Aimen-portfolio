import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router' // yhn router import karo
import 'flowbite';    // 👈 Add this line
import 'animate.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

// Smooth fade-up animations with scroll trigger
AOS.init({
  duration: 1000,           // animation duration
  easing: 'ease-in-out',    // smooth animation
  once: false,              // har scroll par dobara animate ho
  offset: 100,              // jab element 100px tak viewport mein aaye tab start ho
  mirror: false,            // jab element scroll se bahar jaye to animate na kare
  startEvent: 'DOMContentLoaded', // jab page load ho tab AOS initialize ho
});


const app = createApp(App);

app.use(router);

app.mount('#app')
