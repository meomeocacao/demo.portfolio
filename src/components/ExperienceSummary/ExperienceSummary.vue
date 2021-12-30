<template>
  <div class="work-experience">
    <h1>My Work Experience</h1>
    <div v-for="(e, i) in exp" :key="i" class="work-experience-timeline">
      <div class="work-company">
        <a :href="e.website" target="_blank">{{ e.company }} </a>
        <p>
          {{ moment(e.start).format("MMM   YYYY") }} -
          {{ e.leave ? moment(e.leave).format("MMM   YYYY") : "present" }}
        </p>
      </div>

      <div class="work-information">
        <div v-for="(p, i) in e.projects" :key="i" class="time-line">
          <h2>{{ e.position }}</h2>
          <h4>{{ p.title }}</h4>
          <p>{{ p.content }}</p>
          <h4 v-if="p.technology.length > 0">Technology:</h4>
          <div>
            <a
              v-for="(t, i) in p.technology"
              :key="i"
              :href="t.link"
              target="_blank"
              >{{ t.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Exp } from "@/store/modules/user/interfaces";
import { defineComponent, PropType } from "@vue/runtime-core";
import moment from "moment";
export default defineComponent({
  name: "ExperienceSummary",
  props: {
    exp: { require: true, type: Array as PropType<Exp[]> },
  },
  setup() {
    return { moment };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/mixin";
.work-experience {
  padding: 100px;
  position: relative;
  @include mobile {
    display: block;
    padding: 0;
    margin-left: 30px;
  }
  > div {
    text-align: start;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: flex-start;
    @include mobile {
      display: block;
      padding: 0;
    }
    .work-company {
      margin: 0;
      width: 50%;
      @include mobile {
        width: 100%;
      }
      > a {
        font-size: 3rem;
        text-decoration: none;
        font-weight: bold;
        color: #2c3e50;
        &:hover {
          color: rgb(80, 77, 77);
        }
        @include mobile {
          font-size: 2rem;
        }
      }
    }

    .work-information {
      width: 50%;
      margin-left: 100px;
      @include mobile {
        width: 100%;
        margin: 0;
      }
      > div {
        > h4 {
          margin-bottom: 0;
        }
        > h2 {
          margin: 0;
        }
        > div {
          display: flex;
          flex-wrap: wrap;

          > a {
            text-decoration: none;
            padding: 10px;
            font-weight: 500;
            color: #2c3e50;

            cursor: pointer;
            &:hover {
              background-color: rgb(196, 196, 196);
              border-radius: 10px;
            }
          }
        }
      }
    }
    .work-information::before {
      @include desktop {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: white;
        border: 4px solid #ff9f55;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: 1;
      }
      @include mobile {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: white;
        border: 4px solid #ff9f55;
        top: 5%;
        left: -5%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: 1;
      }
    }
    .work-information::before {
      @include desktop {
        @include circle-timeline(50%);
      }
      @include mobile {
        @include circle-timeline(-5%);
      }
    }
  }
}
.work-experience-timeline ::after {
  @include desktop {
    @include time-line(50%);
  }
  @include mobile {
    @include time-line(-5%);
  }
}
</style>
