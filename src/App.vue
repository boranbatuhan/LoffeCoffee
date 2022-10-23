<template>
  <div @click="goFs" v-show="!opened" class="h-screen w-screen flex bg-[#432818] items-center justify-center" >
    <img class="animate-pulse" src="/src/assets/loffee.png" alt="">
  </div>

  <div v-show="opened"  class="h-screen w-screen flex flex-col">
    <router-view class="üst"></router-view>
    <div class="w-screen h-[64px] flex gap-10 justify-evenly items-center  bg-[#432818]">
      <router-link active-class=" transition-all bg-[#bb9457] border-[#432818] border-2 rounded-t-full" to="/"><img class="cursor-pointer hover:scale-125 transition-all m-4" src="/src/assets/line/home.svg"  alt=""></router-link>
      <router-link active-class=" transition-all bg-[#bb9457] border-[#432818] border-2 rounded-t-full" to="/menu"><img class="cursor-pointer hover:scale-125 transition-all m-4" src="/src/assets/line/coffee-menu.svg"  alt=""></router-link>
      <router-link active-class=" transition-all bg-[#bb9457] border-[#432818] border-2 rounded-t-full" to="/card"><img class="cursor-pointer hover:scale-125 transition-all m-4" src="/src/assets/line/credit-card.svg"  alt=""></router-link>
    </div>
  
  </div>
  <div class="visible sm:visible md:hidden">
    <a href="https://www.google.com.tr" class="text-[#432818] border-[#bb9457] bg-[#ffe6a7] fixed top-0 right-0 border-2 rounded-md w-6 h-6 text-center m-1 flex justify-center items-center select-none cursor-pointer ">X</a>
   <a href="javascript:window.location.reload();" class="text-[#432818] border-[#bb9457] bg-[#ffe6a7] fixed top-10 right-0 border-2 rounded-md w-6 h-6 text-center m-1 flex justify-center items-center select-none cursor-pointer ">R</a>

  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";


const opened = ref(false)

const isMobile=ref()
isMobile.value = window.matchMedia("only screen and (max-width: 480px)").matches;
const goFs=()=>{
  if( isMobile.value==true){
  
    document.body.requestFullscreen();
    opened.value= true
  }
  else{
    opened.value= true

  }

}

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