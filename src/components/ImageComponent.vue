<script setup>
import { ref } from 'vue'


defineProps({
  imgsrc: String,
  className: String
  
});

</script>

<template>

        <img :src="imgsrc" alt="Model" :class="className" />

        
        

      
</template>
