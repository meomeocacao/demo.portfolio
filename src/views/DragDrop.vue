<template>
  <div>ASDASDASD</div>
  <draggable
    v-model="data"
    :disabled="!enabled"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
    class="list-user"
  >
    <template #item="{ element }">
      <div>
        <img
          class="img-star-1"
          src="https://iconarchive.com/download/i106902/goodstuff-no-nonsense/free-space/stars.ico"
          width="60"
          alt=""
        />
        <img
          class="img-star-2"
          src="https://iconarchive.com/download/i106902/goodstuff-no-nonsense/free-space/stars.ico"
          width="60"
          alt=""
        />
        <img
          class="img-star-3"
          src="https://iconarchive.com/download/i106902/goodstuff-no-nonsense/free-space/stars.ico"
          width="60"
          alt=""
        />
        <p>{{ element.name }}</p>
        <p>{{ element.age }}</p>
        <p>{{ element.job }}</p>
        <p>{{ element.level }}</p>
      </div>
    </template>
  </draggable>
  <cate-weather />
</template>

<script lang="ts">
import { UserProfile } from "@/store";
import { defineComponent, ref } from "@vue/runtime-core";
import draggable from "vuedraggable";
import CateWeather from "../components/CateWeather/CateWeather.vue";
export default defineComponent({
  name: "DragDrop",
  components: {
    draggable,
    CateWeather,
  },
  setup() {
    const data = ref<UserProfile[]>([
      {
        id: 1,
        name: "Quan",
        age: 23,
        job: "Nodejs",
        level: "Fresher",
      },
      {
        id: 2,
        name: "Tuyen",
        age: 23,
        job: "VueJs",
        level: "Senior Vip Pro",
      },
      {
        id: 3,
        name: "Thanh",
        age: 20,
        job: "Nodejs - Angular",
        level: "Junior",
      },
      {
        id: 4,
        name: "Duong",
        age: 21,
        job: "UX-UI Designer",
        level: "Leader",
      },
      {
        id: 5,
        name: "Tri",
        age: 23,
        job: "Nodejs - Angular",
        level: "Junior",
      },
      {
        id: 6,
        name: "Cong",
        age: 22,
        job: "Nodejs - Angular",
        level: "Junior",
      },
      {
        id: 7,
        name: "Luan",
        age: 22,
        job: "Nodejs - Angular",
        level: "Junior",
      },
      {
        id: 8,
        name: "Khang",
        age: 21,
        job: "Nodejs - Aws",
        level: "Junior",
      },
    ]);
    const drag = ref<boolean>(false);
    return { data, enabled: true, drag };
  },
});
</script>

<style lang="scss">
@mixin animationStart($timing) {
  animation: twinkleStart $timing infinite alternate;
}

.list-user {
  width: 60%;
  margin: 0 auto;
  // animation: rotation 5s normal;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    background-color: aliceblue;
    margin: 10px;
    width: fit-content;
    // animation: rotation 3s infinite;
  }
  .img-star-1 {
    @include animationStart(1s);
  }
  .img-star-2 {
    @include animationStart(2s);
  }
  .img-star-3 {
    @include animationStart(1s);
  }
}

@keyframes twinkleStart {
  0% {
    opacity: 30%;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 40%;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
