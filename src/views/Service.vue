<template>
  <div class="service">
    <div class="service__cover">
      <img class="service__cover__img" :src="userInfor.image" alt="" />
      <div class="service__cover__fist">
        <h1 class="service__cover__fist__name">
          Hey there,
          <h1>I'm {{ userInfor.name }}</h1>
        </h1>
        <p class="service-cover__fist__introduction">
          {{ userInfor.introduction }}
        </p>
      </div>
      <div class="service_cover--second">
        <p>
          {{ userInfor.contact.email }}
        </p>
      </div>
      <div class="service_cover--third">
        <div>
          <h1>{{ Math.round(expInfor.year) }}</h1>
          <div>
            <p>Year</p>
            <p>Experience</p>
          </div>
        </div>
        <div class="service_certificate" v-if="certificate">
          <img :src="certificate.image" alt="" />
          <p>
            {{ certificate.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="introduce">
    <div class="introduce__left">
      <div>
        <div class="icon-desktop">
          <v-icon name="io-desktop-sharp" scale="1.5 " fill="white" />
        </div>
        <div class="right-content">
          <p>Website App</p>
          <h5 class="clone-title">NodeJs</h5>
        </div>
      </div>
      <div>
        <div class="icon-phone">
          <v-icon name="bi-phone" scale="1.5 " fill="white" />
        </div>
        <div class="right-content">
          <p>Mobile Responsive</p>
          <h5 class="clone-title">VueJs</h5>
        </div>
      </div>
      <div>
        <div class="icon-database">
          <v-icon name="oi-database" scale="1.5 " fill="white" />
        </div>
        <div class="right-content">
          <p>Database Server</p>
          <h5 class="clone-title">PostgreSQl</h5>
        </div>
      </div>
    </div>
    <div class="introduce__right">
      <h1>What do i help?</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, amet
        qui sunt officia voluptatem numquam incidunt, a, blanditiis ea dicta
        nobis enim quae. Culpa deserunt optio reiciendis praesentium ducimus
        fugit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, amet
        qui sunt officia voluptatem numquam incidunt, a, blanditiis ea dicta
        nobis enim quae. Culpa deserunt optio reiciendis praesentium ducimus
        fugit?
      </p>
      <div>
        <div>
          <h1>{{ expInfor.projectNumber }}+</h1>
          <p>Project Completed</p>
        </div>
        <div>
          <h1>285+</h1>
          <p>Project Completed</p>
        </div>
      </div>
    </div>
  </div>
  <experience-summary :exp="userInfor.exp" />
</template>

<script lang="ts">
import ExperienceSummary from "@/components/ExperienceSummary/ExperienceSummary.vue";
import { UserGetter, UserItem } from "@/store/modules/user/interfaces";
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { ExperienceSummary },
  name: "Service",
  setup() {
    const store = useStore();
    const userInfor = ref<UserItem>(
      store.getters[UserGetter.USER_ITEM_BY_ID]("1")
    );

    const certificate = userInfor.value.certificate.find(
      (cert) => cert.priority
    );

    const expInfor = {
      month: 0,
      year: 0,
      projectNumber: 0,
    };

    function monthDiff(start: Date, leave: Date): { year: number } {
      const time = {
        month: 0,
        year: 0,
      };
      let diff = (leave.getFullYear() - start.getFullYear()) * 12;
      diff -= start.getMonth();
      diff += leave.getMonth();

      time.year = diff / 12;
      return {
        year: time.year,
      };
    }

    userInfor.value.exp.forEach((exp) => {
      const start = exp.start as Date;
      const leave = (exp.leave as Date) || new Date();
      const { year } = monthDiff(start, leave);
      expInfor.projectNumber += exp.projects.length;
      expInfor.year += year;
    });

    return { userInfor, expInfor, certificate };
  },
  methods: {},
});
</script>

<style lang="scss">
@import "../assets/mixin";

p {
  font-size: large;
  font-weight: 500;
  display: flex;
  align-items: center;
}
p,
h1,
h2,
h3 {
  z-index: 2;
}

.service {
  background-color: #f8f7f1;
  position: relative;
  &__cover {
    padding: 100px;
    height: 400px;
    padding-top: 0;
    position: relative;
    @include mobile {
      padding: 0;
      height: 90vh;
    }
    .service__cover__fist {
      display: flex;
      justify-content: space-between;
      &__name {
        margin-bottom: 20px;
        text-align: justify;
        display: block;
        justify-content: space-between;
        @include mobile {
          margin: 0;
          display: block;
        }
        h1 {
          margin: 0;
        }
      }
      @include mobile {
        display: block;
      }
    }
    .service_cover--second {
      text-align: start;
      margin-top: 90px;
      @include mobile {
        margin: 0;
      }
      p {
        color: rgb(223, 146, 3);
        font-weight: bold;
      }
    }
    .service_cover--third {
      display: flex;
      justify-content: space-between;
      margin-top: 90px;
      @include mobile {
        margin: 0;
        position: absolute;
        bottom: 10%;
        width: 100%;
      }
      > div {
        position: relative;
        p {
          margin: 0;
        }
        > h1 {
          font-size: 60px;
          text-align: start;
        }
        > h3 {
          position: absolute;
          bottom: 0;
        }
        > div {
          align-self: center;
          position: relative;
        }
        width: 50%;
        justify-content: start;
        display: flex;
        text-align: start;
      }
      .service_certificate {
        width: 20%;
        flex-direction: column;
        align-items: center;
        @include mobile {
          width: 50%;
          flex: 1;
          display: block;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        img {
          width: 60px;
          @include mobile {
            width: 50px;
            float: right;
            margin-left: 10px;
          }
        }
        p {
          margin-top: 10px;
          @include mobile {
            width: calc(100% - 60px);
            float: right;
            text-align: right;
            margin-top: 0;
          }
        }
      }
    }
    &__img {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      @include mobile {
        width: 100%;
      }
    }
  }
}

.introduce {
  background-color: white;
  padding: 20px;
  display: flex;
  &__left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include mobile {
      width: 100%;
    }

    > div {
      display: flex;
      width: 50%;
      padding: 10px;
      border: #cacaca 1px solid;
      border-radius: 10px;
      background-color: white;
      margin: 5px;
      position: relative;
      align-items: center;
      @include mobile {
        width: 100%;
      }

      .clone-title {
        margin: 0;
        @include mobile {
          width: 100%;
        }
      }

      .right-content {
        margin: 0;
        margin-left: 20px;
        text-align: start;
      }

      .icon-desktop {
        @include icon-desktop(green);
      }
      .icon-phone {
        @include icon-desktop(orange);
      }
      .icon-database {
        @include icon-desktop(red);
      }
      > p {
        margin-left: 20px;
        font-weight: 600;
      }
    }
  }
  &__right {
    text-align: start;
    width: 50%;
    @include mobile {
      width: 100%;
    }
    h1 {
      font-size: 50px;
    }
    > p {
      width: 80%;
      @include mobile {
        width: 100%;
      }
    }
    > div {
      display: flex;
      > div {
        margin-right: auto;
      }
    }
  }
  @include mobile {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
