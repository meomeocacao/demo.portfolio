<template>
  <content-header-vue />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ContentHeaderVue from "./views/ContentHeader.vue";
export default defineComponent({
  name: "ContentHeader",
  components: {
    ContentHeaderVue,
  },
});
</script>
<style lang="scss">
@import "./assets/mixin.scss";
body {
  overflow-x: hidden;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f7f1;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
