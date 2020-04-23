<template>
  <div id="heroes-browser">
    <hero-item v-for="hero in heroes" :key="hero.id" :hero="hero"></hero-item>
  </div>
</template>

<style lang="scss" scoped>
#heroes-browser {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  justify-items: center;
}
</style>

<script>
import axios from "axios";
import HeroItem from "components/HeroItem";

export default {
  name: "HeroesBrowser",
  components: {
    HeroItem,
  },
  computed: {
    heroes() {
      return this.$store.state.heroes;
    },
  },
};
</script>
