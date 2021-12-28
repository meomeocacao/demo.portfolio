<template>
  <NavbarVue :phone="userInfor.contact.phone" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import NavbarVue from "@/components/Navbar/Navbar.vue";
import { ref } from "vue";
import { UserGetter, UserItem } from "@/store/modules/user/interfaces";
import { useStore } from "vuex";
export default defineComponent({
  name: "ContentHeader",
  components: {
    NavbarVue,
  },
  setup() {
    const store = useStore();
    const userInfor = ref<UserItem>(
      store.getters[UserGetter.USER_ITEM_BY_ID]("1")
    );
    return { userInfor };
  },
});
</script>

<style lang="scss"></style>
