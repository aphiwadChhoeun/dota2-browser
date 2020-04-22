<template>
  <div>
    <div v-for="hero in heroes" :key="hero.id">{{hero.localized_name}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeroesBrowser",
  data() {
    return {
      heroes: null,
    };
  },
  created() {
    axios.get("https://api.opendota.com/api/constants/heroes").then((resp) => {
      this.heroes = resp.data;
    });
  },
};
</script>
