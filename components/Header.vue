<template lang="pug">
  header
    nuxt-link(to="/")
      the-logo
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    'the-logo': Logo,
  },
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
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  padding: 3rem 0 1rem;
}

a {
  color: inherit;
  text-decoration: none;
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
</style>
