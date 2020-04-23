<template>
  <div class="hero-item">
    <div class="hero-item__thumbnail">
      <img
        :src="`https://api.opendota.com${hero.img}`"
        :alt="hero.localized_name"
      />
    </div>
    <div class="hero-item__meta">
      <span class="hero__name">{{ hero.localized_name }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.hero-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__thumbnail {
    width: 85px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>

<script>
export default {
  name: "HeroItem",
  props: {
    hero: Object,
  },
};
</script>
