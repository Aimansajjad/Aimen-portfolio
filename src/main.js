import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router' // yhn router import karo
import 'flowbite';    // 👈 Add this line
import 'animate.css';
import ScrollSpy from 'vue3-scroll-spy';

const app = createApp(App);

app.use(ScrollSpy, {
  offset: 80,
  time: 600,
  easing: 'ease-in-out'
});

app.use(router);

app.mount('#app');
