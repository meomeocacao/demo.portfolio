<template>
  <h3>{{ $props.msg }}</h3>
  <div class="form">
    <el-input placeholder="Title" v-model="formTodo.title" />
    <el-input
      :rows="2"
      type="textarea"
      placeholder="To do"
      v-model="formTodo.todo"
    />
    <div class="form__time-input">
      <el-date-picker
        v-model="formTodo.start"
        type="datetime"
        placeholder="Select date and time"
        shortcuts="Start Time"
      >
      </el-date-picker>
      <el-date-picker
        v-model="formTodo.end"
        type="datetime"
        placeholder="Select date and time"
        shortcuts="End Time"
      >
      </el-date-picker>
    </div>
  </div>
  <el-button type="primary" @click="addTodo">Add</el-button>
</template>

<script lang="ts">
import {
  TodoActions,
  TodoItem,
  TodoStatus,
} from "@/store/modules/todo/interfaces";
import { defineComponent, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
export default defineComponent({
  name: "TodoForm",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    const formTodo = ref<TodoItem>({
      id: "",
      title: "",
      todo: "",
      start: new Date(),
      end: new Date(),
      status: TodoStatus.OPEN,
    });
    const addTodo = () => {
      const newTodo: TodoItem = {
        id: uuidv4(),
        title: formTodo.value.title,
        todo: formTodo.value.todo,
        start: new Date(formTodo.value.start.getTime()),
        end: new Date(formTodo.value.end.getTime()),
        status: TodoStatus.OPEN,
      };
      if (!newTodo.title || !newTodo.todo) {
        console.log("Grao grao");
      } else {
        store.dispatch(TodoActions.ADD, newTodo);
      }
      formTodo.value.title = "";
      formTodo.value.todo = "";
    };

    return { addTodo, formTodo };
  },
});
</script>

<style lang="scss">
.form {
  width: 60%;
  margin: 0 auto;
  > div {
    margin: 5px;
    width: 100%;
  }

  &__time-input {
    display: flex;
    justify-content: space-between;
    .el-input {
      width: 49.5%;
    }
  }
}
</style>
