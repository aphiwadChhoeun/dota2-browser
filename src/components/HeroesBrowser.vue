<template>
  <div class="heroes-browser">
    <heroes-grid :heroes="strHeroes"></heroes-grid>
    <heroes-grid :heroes="agiHeroes"></heroes-grid>
    <heroes-grid :heroes="intHeroes"></heroes-grid>
  </div>
</template>

<script>
import axios from "axios";
import HeroesGrid from "components/HeroesGrid";

export default {
  name: "HeroesBrowser",
  components: {
    HeroesGrid,
  },
  computed: {
    strHeroes() {
      return this.$store.getters.heroesByAttr('str');
    },
    agiHeroes() {
      return this.$store.getters.heroesByAttr('agi');
    },
    intHeroes() {
      return this.$store.getters.heroesByAttr('int');
    }
  },
};
</script>
