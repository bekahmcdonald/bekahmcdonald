<template lang="pug">
  .o-container
    header
      nuxt-link(to="/").logo Bekah
      nav 
        .link(@click="scrollTo('work')") Work
        .link(@click="scrollTo('contact')") Contact
</template>

<script>
export default {
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  @include mq($from: lg) {
    height: 80px;
  }
}

.logo {
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-size: 16px;
  user-select: none;

  @include mq($from: md) {
    font-size: 18px;
  }

  @include mq($from: md) {
    font-size: 24px;
  }
}

nav {
  .link {
    @extend %label;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: inherit;
    margin-left: 40px;
    font-weight: 400;
    border-bottom: solid 1px transparent;
    padding-bottom: 2px;
    transition: border-color 0.3s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-bottom-color: currentColor;
      }
    }
  }
}
</style>
