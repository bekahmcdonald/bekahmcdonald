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
  color: inherit;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.3px;
  text-decoration: none;
  text-transform: uppercase;
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
    border-bottom: solid 1px transparent;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    margin-left: 40px;
    padding-bottom: 2px;
    text-decoration: none;
    transition: border-color 0.3s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-bottom-color: currentColor;
      }
    }
  }
}
</style>
