<template>
    <div class="todos">
            <addTodo />
            <todoList />
        </div>
</template>

<script>
import addTodo from './addTodo'
import todoList from './todoList'

export default {
  components: {
    addTodo,
    todoList
  }
};
</script>

<style>
.todos {
  width: 500px;
  font-size: 30px;
}
</style>


