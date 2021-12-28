<template>
  <div class="noel">
    <div class="noel__star1-1">
      <img
        width="50"
        src="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+stars-1319964495853900697.png"
        alt=""
      />
    </div>
    <div class="noel__star1-2">
      <img
        width="50"
        src="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+stars-1319964495853900697.png"
        alt=""
      />
    </div>
    <div class="noel__star1-3">
      <img
        width="50"
        src="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+stars-1319964495853900697.png"
        alt=""
      />
    </div>
    <div class="noel__star1-4">
      <img
        width="50"
        src="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+stars-1319964495853900697.png"
        alt=""
      />
    </div>
    <div class="noel__star1-5">
      <img
        width="50"
        src="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+stars-1319964495853900697.png"
        alt=""
      />
    </div>
    <div class="noel__star1-6">
      <img
        width="50"
        src="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+stars-1319964495853900697.png"
        alt=""
      />
    </div>

    <div class="noel__tree">
      <img
        src="https://www.pikpng.com/pngl/b/198-1983126_retronator-pixel-startt-top-pixel-art-december-2015.png"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NoelTree",
});
</script>

<style lang="scss">
@mixin animationTwinkle($time1, $time2) {
  animation: twinkleStar $time1 ease-in-out infinite;
  animation: rotationStar $time2 ease-in-out infinite;
}

.noel {
  position: relative;
  &__star1-1 {
    position: absolute;
    top: -5%;
    left: -22px;
    right: 0;
    margin: 0 auto;
    // @include animationTwinkle(3.5s, 3.5s);
  }
  &__star1-2 {
    position: absolute;
    top: 50%;
    left: 60%;
    @include animationTwinkle(1.5s, 2.5s);
  }
  &__star1-3 {
    position: absolute;
    top: 50%;
    left: 50%;
    @include animationTwinkle(1.5s, 2.5s);
  }
  &__star1-4 {
    position: absolute;
    top: 40%;
    left: 40%;
    @include animationTwinkle(3s, 2s);
  }
  &__star1-5 {
    position: absolute;
    top: 40%;
    left: 50%;
    @include animationTwinkle(2s, 1s);
  }
  &__star1-6 {
    position: absolute;
    top: 40%;
    left: 60%;
    @include animationTwinkle(3s, 2s);
  }
}

@keyframes twinkleStar {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

@keyframes rotationStar {
  0% {
    opacity: 0.3;
    transform: rotate3d(1, 1, 1, 90deg);
  }
  50% {
    opacity: 1;
    transform: rotate3d(1, 2, 1, 0deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 25deg);

    opacity: 0.2;
  }
}
</style>
