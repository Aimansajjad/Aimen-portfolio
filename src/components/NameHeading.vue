<script setup>
import { ref } from 'vue'

defineProps({
    hello: String,
    iam: String,
    name: String,
    developer: String,
    connect: String
  
});

</script>

<template>
         <p class="text-xl text-white font-poppins leading-tight text-yellow-500 uppercase ml-7">{{hello}}</p>
         <h1 class="text-7xl font-poppins text-white leading-tight font-extrabold ml-7">{{iam}} <br> <span class="text-yellow-500"  >{{name}}</span> </h1>
        <br>
        <h3 class="text-4xl text-white font-poppins leading-tight ml-7">{{developer}}</h3>
        <h4 class="text-lg text-yellow-400 font-poppins leading-tight ml-7 uppercase">{{connect}}</h4>
</template>