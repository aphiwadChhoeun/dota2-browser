<template>
  <div class="hero-details">
    <div class="hero-box">
      <div class="hero-thumbnail">
        <img
          :src="`https://api.opendota.com${hero.img}`"
          :alt="hero.localized_name"
        />
      </div>
      <div class="hero-name">{{ hero.localized_name }}</div>
      <div class="hero-roles">
        <span v-for="role in hero.roles" :key="role" class="hero-tag">{{
          role
        }}</span>
      </div>
      <div class="hero-props">Attack Type: {{ hero.attack_type }}</div>
      <div class="hero-props">Base Health: {{ hero.base_health }}</div>
      <div class="hero-props">Base Mana: {{ hero.base_mana }}</div>
      <div class="hero-props">Base Armor: {{ hero.base_armor }}</div>
      <div class="hero-props">Movement Speed: {{ hero.move_speed }}</div>

      <div class="hero-lore">
        {{ lore }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/variables";

.hero-details {
  margin: 65px 0;
}

.hero-tag {
  margin: 0 4px 0 0;
  padding: 1px 4px;
  background-color: $PRIMARYCOLOR;
}

.hero-lore {
  padding: 10px 0;
}
</style>

<script>
export default {
  name: "HeroDetails",
  data() {
    return {
      hero: null,
      lore: null,
    };
  },
  created() {
    this.hero = this.$store.getters.heroByid(this.$route.params.id);
    this.lore = this.$store.getters.lorebyHero(this.hero.localized_name);
  },
};
</script>
