<template>
  <div class="about">
    <h1>List TodoItems</h1>
    {{ currentTime }}
  </div>
  <TodoFormVue :msg="message.title" />
  <div class="items">
    <div>
      <h2>To do</h2>
      <el-table
        :data="
          todoItems.filter(
            (data) =>
              !search || data.title.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column prop="title" label="Title" />
        <el-table-column prop="todo" label="Work" />
        <el-table-column prop="start" label="Start" />
        <el-table-column prop="end" label="End" />
        <el-table-column prop="status" label="Status">
          <template #header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="Search By Title"
            />
          </template>
          <template #default="scope">
            <el-dropdown>
              <span class="el-dropdown-link">
                <button
                  :class="formatStyleStatus(todoItems[scope.$index].status)"
                >
                  {{ todoItems[scope.$index].status }}
                </button>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu class="dropdown">
                  <el-dropdown-item
                    class="dropdown__open-style"
                    @click="handleClick(TodoStatus.OPEN, scope.$index)"
                  >
                    {{ TodoStatus.OPEN }}
                  </el-dropdown-item>
                  <el-dropdown-item
                    class="dropdown__in-progress-style"
                    @click="handleClick(TodoStatus.IN_PROGRESS, scope.$index)"
                  >
                    {{ TodoStatus.IN_PROGRESS }}
                  </el-dropdown-item>
                  <el-dropdown-item
                    class="dropdown__canceled-style"
                    @click="handleClick(TodoStatus.CANCELED, scope.$index)"
                  >
                    {{ TodoStatus.CANCELED }}
                  </el-dropdown-item>
                  <el-dropdown-item
                    class="dropdown__completed-style"
                    @click="handleClick(TodoStatus.COMPLETED, scope.$index)"
                  >
                    {{ TodoStatus.COMPLETED }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import TodoFormVue from "@/components/TodoForm.vue";
import { useStore } from "vuex";
import {
  TodoActions,
  TodoGetter,
  TodoItem,
  TodoStatus,
} from "@/store/modules/todo/interfaces";
import { formatStyleStatus } from "@/core";
export default defineComponent({
  name: "About",
  components: { TodoFormVue },
  setup() {
    const message = reactive({ title: "Hello Nah Nah" });
    const store = useStore();
    console.log(store.getters.todoItems);
    const search = ref<string>("");
    const todoItems = ref<TodoItem[]>(store.getters[TodoGetter.TODO_ITEMS]);
    const currentTime = ref<Date>(new Date());
    setInterval(() => {
      currentTime.value = new Date();
    }, 1000);
    watch(todoItems, () => {
      store.dispatch(TodoActions.SET, todoItems.value);
    });

    const handleClick = (status: TodoStatus, index: number) => {
      todoItems.value[index].status = status;
    };

    return {
      message,
      todoItems,
      formatStyleStatus,
      search,
      TodoStatus,
      currentTime,
      handleClick,
    };
  },
  methods: {
    deleteRow(index: number, array: TodoItem[]) {
      array.splice(index, 1);
    },
    checkExp(expiredDate: Date): boolean {
      console.log(expiredDate);

      return true;
    },
  },
});
</script>

<style lang="scss">
.items {
  div {
    text-align: start;
  }
}

@mixin button-status($bgColor) {
  width: 100px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  text-align: center;
  background-color: $bgColor;
}

@mixin select-status($bgColor) {
  @include button-status($bgColor);
  padding: 5px;
  margin: 5px 0 5px 0;
}

.dropdown {
  &__open-style {
    @include select-status(var(--status-open));
  }
  &__in-progress-style {
    @include select-status(var(--status-in-progress));
  }
  &__canceled-style {
    @include select-status(var(--status-canceled));
  }
  &__completed-style {
    @include select-status(var(--status-completed));
  }
}

.button-item {
  &__open-style {
    @include button-status(var(--status-open));
  }
  &__in-progress-style {
    @include button-status(var(--status-in-progress));
  }
  &__canceled-style {
    @include button-status(var(--status-canceled));
  }
  &__completed-style {
    @include button-status(var(--status-completed));
  }
}
</style>
