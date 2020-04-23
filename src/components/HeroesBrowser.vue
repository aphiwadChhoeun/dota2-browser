<template>
  <div>
    <div v-for="hero in heroes" :key="hero.id">{{ hero.localized_name }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeroesBrowser",
  computed: {
    heroes() {
      return this.$store.state.heroes;
    },
  },
};
</script>
