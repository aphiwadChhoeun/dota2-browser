<template>
  <div class="hero-details">
    <div class="hero-box">
      <div class="hero-name">{{ hero.localized_name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroDetails",
  data() {
    return {
      hero: null,
    };
  },
  created() {
    this.hero = this.$store.getters.heroByid(this.$route.params.id);
  },
};
</script>
