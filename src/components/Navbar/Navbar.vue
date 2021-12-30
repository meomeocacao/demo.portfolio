<template>
  <div class="nav-bar">
    <v-icon
      class="icon-menu"
      name="io-settings-sharp"
      scale="2.5"
      :class="{ openMenu: openNavbar }"
      @click="onToggleMenu"
    />
    <p class="nav-bar--logo">Liang</p>
    <div class="nav-bar__content" :class="{ open: openNavbar }">
      <div>
        <router-link to="/">
          <div
            @click="onClickButton(ButtonNavBar.service)"
            :class="click[ButtonNavBar.service] && 'active-button'"
          >
            <p>Service</p>
          </div>
        </router-link>

        <router-link to="/work">
          <div
            @click="onClickButton(ButtonNavBar.work)"
            :class="click[ButtonNavBar.work] && 'active-button'"
          >
            <p>Work</p>
          </div>
        </router-link>
        <router-link to="/notes">
          <div
            @click="onClickButton(ButtonNavBar.notes)"
            :class="click[ButtonNavBar.notes] && 'active-button'"
          >
            <p>Notes</p>
          </div>
        </router-link>
        <router-link to="/exp">
          <div
            @click="onClickButton(ButtonNavBar.exp)"
            :class="click[ButtonNavBar.exp] && 'active-button'"
          >
            <p>Experience</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="nav-bar__contact">
      <p>{{ userPhone }}</p>
      <div class="nav-bar__contact--icon---phone">
        <v-icon
          name="bi-telephone-inbound"
          animation="ring"
          speed="slow"
          scale="1.5"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ButtonNavBar, tplotOptions } from "@/store";
import { defineComponent, reactive } from "@vue/runtime-core";
import { ref } from "vue";
export default defineComponent({
  name: "NavBar",
  props: {
    phone: {
      require: true,
      type: String,
    },
  },
  setup(props) {
    const click: tplotOptions = reactive({
      service: true,
      work: false,
      notes: false,
      exp: false,
    });

    const openNavbar = ref<boolean>(false);

    const userPhone = ref<string | undefined>(props.phone);

    const onToggleMenu = (event: any) => {
      console.log(event.target);
      openNavbar.value = !openNavbar.value;
    };

    const onClickButton = (button: ButtonNavBar) => {
      for (const property in click) {
        click[property] = property === button ? true : false;
      }
    };

    return {
      userPhone,
      click,
      onClickButton,
      ButtonNavBar,
      openNavbar,
      onToggleMenu,
    };
  },
});
</script>

<style lang="scss">
@import "../../assets/mixin";

.nav-bar {
  .icon-menu {
    display: none;
    margin: 0;
    @include mobile {
      display: block;
      animation: rotationMenuButtonIn 0.3s ease-in-out;
    }
  }
  .openMenu {
    animation: rotationMenuButton 0.3s ease-in-out;
    transform: rotate(90deg);
  }
  &--logo {
    font-weight: bold;
    font-size: 2rem;
  }
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  margin: 0 auto;
  a {
    color: black;
    text-decoration: none;
  }
  &__content {
    display: flex;
    width: 40%;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    display: flex;
    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      @include mobile {
        display: block;
      }
    }
    p {
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
      &:hover {
        color: #00bcd4;
        cursor: pointer;
      }
    }
    @include mobile {
      visibility: hidden;
      position: absolute;
      left: 5%;
      top: 11%;
      z-index: 2;
      background-color: white;
      height: fit-content;
      border-radius: 10px;
      padding: 10px;
      height: 0;
      transition: all 0.3s linear;
      > a {
        margin: 10px;
      }
    }
  }
  &__contact {
    justify-content: space-between;
    display: flex;
    &--icon---phone {
      padding: 15px;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
      margin-left: 5px;
      cursor: pointer;
    }
  }
  @include mobile {
    padding: 0;
  }
}

.active-button {
  border-left: 2px solid #00bcd4;
  border-right: 2px solid #00bcd4;
  border-radius: 20px;
  padding: 0 10px 0 10px;
  font-weight: bold;
  color: #00bcd4;
}

.open {
  height: 150px;
  visibility: visible;
  z-index: 999999999;
  > div {
    > a {
      margin: 10px;
    }
  }
}

@keyframes rotationMenuButton {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}
@keyframes rotationMenuButtonIn {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
