<template>
  <div class="heroes-grid">
    <hero-item v-for="hero in heroes" :key="hero.id" :hero="hero"></hero-item>
  </div>
</template>

<style lang="scss">
.heroes-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 10px;
  row-gap: 5px;
  justify-items: center;
  margin: 65px 0;
}
</style>

<script>
import HeroItem from "components/HeroItem";

export default {
  name: "HeroesGrid",
  components: {
    HeroItem,
  },
  props: {
    heroes: Array,
  },
};
</script>
