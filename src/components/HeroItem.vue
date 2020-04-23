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
    cursor: pointer;
    box-shadow: 0 5px 15px #000000;
    transition: all 200ms ease-in;

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    &:hover {
      transform: scale(1.7, 1.7);
      filter: brightness(1.2);    
      transition: all 200ms ease-out;
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
