<template>
        <p class="filters">
            <filterLink :filter="FilterTypes.ALL" /> 
            <filterLink :filter="FilterTypes.COMPLETED" /> 
            <filterLink :filter="FilterTypes.UNCOMPLETED" />
        </p>
</template>

<script>
import link from "./link";
import { FilterTypes } from "../../store/constants";

export default {
  data() {
    return {
      FilterTypes: FilterTypes
    };
  },
  components: {
    filterLink: link
  }
};
</script>

<style>
.filters {
  font-size: 20px;
}

.filters .filter {
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
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


