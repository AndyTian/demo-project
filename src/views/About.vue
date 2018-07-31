<template>
  <div>
    <todos />
    <filters />
  </div>
</template>

<script>

import todos from '../components/todos/todos'
import filter from '../components/filter/filter'

export default {
  components: {
    todos,
    'filters':filter
  }
}
</script>

