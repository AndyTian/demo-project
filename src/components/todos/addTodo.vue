<template>
    <div class="add-todo">
            <form @submit="submit">
                <input class="new-todo" v-model.trim="text"/>
                <button class="add-btn" type="submit">
                添加
                </button>
            </form>
        </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    submit() {
      if (!this.text) {
        return;
      }
      this.$store.commit("ADD_TODO", this.text);
      this.text = "";
    }
  }
};
</script>

<style>
.add-todo {
  position: relative;
}

.add-todo .new-todo {
  display: block;
  margin: 0 0 0 50px;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
}

.add-todo .add-btn {
  font-size: 30px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>

