<template>
    <ul class="todo-list">
        <transition-group name="list" tag="p" appear>
        <todoItem
            v-for="item in todos"
          :key="item.id"
          :id="item.id"
          :text="item.text"
          :completed="item.completed"
        />
        </transition-group>
    </ul>
</template>

<script>
import { mapState } from "vuex";
import todoItem from "./todoItem";
import { FilterTypes } from "../../store/constants";

export default {
  components: {
    todoItem
  },
  computed: mapState({
    todos(state) {
      return this.selectVisibleTodos(state.todos, state.filter);
    }
  }),
  methods: {
    selectVisibleTodos(todos, filter) {
      switch (filter) {
        case FilterTypes.ALL:
          return todos;
        case FilterTypes.COMPLETED:
          return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
          return todos.filter(item => !item.completed);
        default:
          throw new Error("unsupported filter");
      }
    }
  }
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.todo-list {
  list-style: none;
  margin: 0;
  padding: 0;

  font-size: 30px;
}
</style>

