<template>
  <div class="card">
    <div>{{ msg }}-{{ count }}</div>
    <button @click="onAddOne">+ 1</button>
    <button @click="onSubOne">- 1</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String,
    },
  },
  setup() {
    const count = ref(0);

    const onAddOne = () => {
      count.value = count.value + 1;
    };

    const onSubOne = () => {
      count.value = count.value - 1;
    };

    return {
      count,
      onAddOne,
      onSubOne,
    };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

.card {
  padding: 16px;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
