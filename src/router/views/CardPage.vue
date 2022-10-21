<template>

    <div class="w-full bg-grad flex flex-col gap-10 justify-start pt-16 items-center select-none ">
        <div class="lcCard relative overflow-hidden flex flex-row yellowgold flex-wrap hover:scale-110 transition-all">
            <img class="absolute opacity-70 -right-32 shrink-0 " src="/src/assets/blob.svg" alt="">
            <img class="absolute opacity-60 -top-32 shrink-0 " src="/src/assets/blob-1.svg" alt="">
            <img class="absolute opacity-90 -left-32 -top-10 shrink-0 " src="/src/assets/blob-2.svg" alt="">
            <img class="absolute bottom-2 right-2 opacity-90 w-16 h-16 shrink-0 " src="/src/assets/loffee.png" alt="">
            <p class="font-cSugar m-auto text-center w-[323px] z-20 text-9xl absolute opacity-50  leading-[200px] -rotate-[30deg] text-outline text-white"> Loffe'Coffee</p>
        </div>
        <div>
          <div class="btn w-32 h-12 text-2xl font-cMidnight font-semibold text-center leading-[48px] cursor-pointer transition-all hover:!bg-[#22140c] hover:text-[#e6cb94] hover:scale-110">TL yükle</div>
        </div>        
    </div>
</template>


<style>
.bg-grad{
  background-image: linear-gradient(180deg, #432818 18%, #72452c 45%, #432818 77%);}
.lcCard{
    height: 204px;
    width: 323px;
    border: 2px #22140c solid;
    border-radius: 12px;
background: linear-gradient(225deg, #462a1a, #3b2316);
box-shadow:  -14px 14px 28px #22140c,
             14px -14px 28px #603a24;
}
.btn{
  color:#22140c;
    border: 2px #22140c solid;
    border-radius: 15px;
background: #e6cb94;

box-shadow:  -14px 14px 28px #22140c,
             14px -14px 28px #603a24;
}
.yellowgold p {
    text-shadow: 2px 2px 5px black;
}
.yellowgold {
  color: rgba(73, 45, 21, 0.72);
  text-decoration: none;
  font-weight: bold;



  background:
  -moz-linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
  background:
  -webkit-linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
  background:
  -o-linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
  background:
  linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
}

</style>