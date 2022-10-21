<template>
    <div v-auto-animate class="flex flex-col items-center justify-between font-cMidnight select-none  w-screen m-auto">
        <div class="w-full h-28 py-2 text-[#99582a] bg-[#432818] flex justify-center gap-10 text-3xl items-center">
            <p class="font-extrabold">Loffe' </p>
            <img src="/src/assets/loffee.png" width="64px" alt="">
            <p class="font-extrabold">Coffee</p>
        </div>
        <div class="w-full py-12 pl-40 bg-[#bb9457] h-28 flex justify-start items-center">
            <div class="rank flex items-center justify-center text-2xl font-extrabold !font-cSugar text-[#432818]">
                <p class="hover:scale-125 transition-all">%10</p>
            </div>
            <div class="ml-4">
                <div class="flex gap-3">
                <p class="text-3xl  text-[#432818]">Batuhan</p>
                <p class="text-3xl  text-[#432818] font-extrabold">Boran</p>
                </div>
                <p class="text-md text-[#432818] font-thin opacity-80 hover:scale-125 transition-all origin-left"> LCN:120391230</p>
            </div>
        </div>
        <div class="w-full py-2 relative  bg-[#ffe6a7] flex flex-col justify-center items-center  gap-4">
            <img @click="tıkla" class=" z-30   scale-125  origin-bottom  h-[200px]" :src="bottleArray[chipCount]" alt="">
            <div class="flex z-30 items-center hover:scale-125 transition-all flex-row-reverse gap-2"><p class="font-bold text-2xl">{{chipCount}}/10</p><img class="!stroke-black" src="/src/assets/line/cpu.svg" alt=""> </div>
            <img v-show="isFull" src="/src/assets/Adsız.png" class=" blur-xl absolute z-10 hue w-72 h-72">
        </div>
        <div class="w-full h-28 bg-[#bb9457] text-[#432818] flex  gap-24 p-2 justify-center items-center">
            
            <div class="flex items-center hover:scale-125 transition-all flex-row-reverse gap-2"><p class="font-bold text-2xl">{{coffeeCount}}</p><img style="transform: scale(-1,1);" src="/src/assets/line/coffee.svg" alt=""> </div>
            <div class="flex items-center hover:scale-125 transition-all flex-row-reverse gap-2"><p class="font-bold text-2xl">83,25 ₺</p><img width="24px" src="/src/assets/line/cash.svg" alt=""> </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";


import b0 from "/src/assets/bottle/botte-0.png"
import b1 from "/src/assets/bottle/botte-1.png"
import b2 from "/src/assets/bottle/botte-2.png"
import b3 from "/src/assets/bottle/botte-3.png"
import b4 from "/src/assets/bottle/botte-4.png"
import b5 from "/src/assets/bottle/botte-5.png"
import b6 from "/src/assets/bottle/botte-6.png"
import b7 from "/src/assets/bottle/botte-7.png"
import b8 from "/src/assets/bottle/botte-8.png"
import b9 from "/src/assets/bottle/botte-9.png"
import b10 from "/src/assets/bottle/botte-10.png"

const bottleArray = ref([b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,])


const isFull = ref(false)
const chipCount = ref(0)
const coffeeCount = ref(0)
const tıkla =()=>{
    chipCount.value++
    console.log('counter.value', chipCount.value)
    if(chipCount.value>=11)
    {
        chipCount.value=0
        coffeeCount.value++
    }
    if(chipCount.value==10){
        isFull.value=true
    }
    else{
        isFull.value=false
    }
}
const foto=computed(()=>{

    return 
})
</script>

<style>
.rank{
    width: 64px;
    height: 64px;
    border-radius: 11px;
background: #BB9457;
box-shadow: inset -5px 5px 10px #4b3b23,
            inset 5px -5px 10px #ffed8b;
}


.hue{
    animation: rotatehue 2s linear infinite;
}

@keyframes rotatehue {
    to{
        transform: rotate(360deg);
    }
}
</style>