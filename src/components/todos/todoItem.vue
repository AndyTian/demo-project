<template>
    <li class="todo-item"
            :style="{
                textDecoration: completed ? 'line-through' : 'none'
            }"
        >
            <input class="toggle" type="checkbox" :checked="{completed}" readOnly @click="onToggle" />
            <label class="text">{{text}}</label>
            <button class="remove" @click="onRemove"></button>
        </li>
</template>

<script>

export default {
  props: {
    id: Number,
    text: String,
    completed: Boolean
  },
  methods: {
    onToggle() {
      this.$store.commit("TOGGLE_TODO", this.id);
    },
    onRemove() {
      this.$store.commit("REMOVE_TODO", this.id);
    }
  }
};
</script>


