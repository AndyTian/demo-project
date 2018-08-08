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

