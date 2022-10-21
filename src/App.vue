<template>
  <div v-show="!opened" class="h-screen w-screen flex bg-[#432818] items-center justify-center" >
    <img src="/src/assets/loffee.png" alt="">
  </div>
  <div v-show="opened"  class="h-screen w-screen flex flex-col">
    <router-view class="üst"></router-view>
    <div class="w-screen h-[64px] flex gap-10 justify-evenly items-center  bg-[#432818]">
      <router-link active-class=" transition-all bg-[#bb9457] border-[#432818] border-2 rounded-t-full" to="/"><img class="cursor-pointer hover:scale-125 transition-all m-4" src="/src/assets/line/home.svg"  alt=""></router-link>
      <router-link active-class=" transition-all bg-[#bb9457] border-[#432818] border-2 rounded-t-full" to="/menu"><img class="cursor-pointer hover:scale-125 transition-all m-4" src="/src/assets/line/coffee-menu.svg"  alt=""></router-link>
      <router-link active-class=" transition-all bg-[#bb9457] border-[#432818] border-2 rounded-t-full" to="/card"><img class="cursor-pointer hover:scale-125 transition-all m-4" src="/src/assets/line/credit-card.svg"  alt=""></router-link>
    </div>
  
  </div>
  
</template>

<script setup>
import { ref } from "@vue/reactivity";


const opened = ref(false)

setTimeout(() => {
    opened.value= !opened.value
  }, 2000);
</script>

<style>
.üst{

  height: calc(100vh - 64px);

}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #BB9457;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #BB9457;
    border-radius: 10px;
  }
</style>