<template>
    <b v-if="active" class="filter selected">{{filter}}</b>
    <a v-else  class="filter not-selected" @click="setFilter">{{filter}}</a>
</template>

<script>
export default {
  props: {
    filter: String
  },
  computed: {
      active(){
          return this.$store.state.filter === this.filter
      }
  },
  methods: {
    setFilter() {
      this.$store.commit("SET_FILTER", this.filter);
    }
  }
};
</script>

<style>
a:hover {
  cursor: pointer;
}

.filters .selected {
  border: 1px solid transparent;
  text-decoration: none;
}

.filters .not-selected {
  color: black;
  text-decoration: none;
  border: 1px solid;
  border-color: rgba(175, 47, 47, 0.2);
}

.filters .not-selected:hover {
  border-color: rgba(175, 47, 47, 0.2);
}
</style>


