<template>
  <div class="heroes-grid">
    <hero-item
      v-for="hero in heroes"
      :key="hero.id"
      :hero="hero"
      v-on:heroClicked="heroItemClicked"
    ></hero-item>
  </div>
</template>

<style lang="scss">
@import "../styles/mixins";

.heroes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 5px;
  justify-items: center;
  margin: 65px 0;

  @include breakpoint("tablet") {
    grid-template-columns: repeat(4, 1fr);
  }

  @include breakpoint("desktop") {
    grid-template-columns: repeat(8, 1fr);
  }
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
  methods: {
    heroItemClicked(id) {
      this.$router.push({ name: "details", params: { id: id } });
    },
  },
};
</script>
