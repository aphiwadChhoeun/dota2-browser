<template>
  <div class="hero-item">
    <div class="hero-item__thumbnail">
      <img
        :src="`https://api.opendota.com${hero.img}`"
        :alt="hero.localized_name"
        :class="{ loaded: classLoaded }"
        width="85"
        height="48"
        v-on:load="thumbnailLoaded"
      />
    </div>
    <div class="hero-item__meta">
      <span class="hero__name">{{ hero.localized_name }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/variables";

.hero-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__thumbnail {
    width: 85px;
    cursor: pointer;
    box-shadow: 0 5px 15px #000000;
    transition: all 200ms ease-in;
    position: relative;

    img {
      width: 100%;
      height: auto;
      display: block;
      opacity: 0.0;

      &.loaded {
        animation: heroIn 500ms ease-in;
        animation-fill-mode: forwards;
      }
    }

    &:hover {
      transform: scale(1.7, 1.7);
      filter: brightness(1.2);
      transition: all 200ms ease-out;
    }
  }
}

@keyframes heroIn {
  0% {
    opacity: 0;
    filter: brightness(1);
  }

  70% {
    filter: brightness(1.8);
  }

  100% {
    opacity: 1;
    filter: brightness(1);
  }
}
</style>

<script>
export default {
  name: "HeroItem",
  props: {
    hero: Object,
  },
  data() {
    return {
      classLoaded: false,
    };
  },
  methods: {
    thumbnailLoaded() {
      this.classLoaded = true;
    },
  },
};
</script>
