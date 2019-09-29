<template lang="pug">
  .masthead
    bm-logo.logo
    bm-title.title
</template>

<script>
import Title from '@/assets/svg/Title.vue';
import Logo from '@/assets/svg/Logo.vue';

export default {
  components: {
    'bm-logo': Logo,
    'bm-title': Title,
  },
};
</script>

<style lang="scss" scoped>
  .masthead {
    flex: 1;
    margin: $base * 3 auto;
    max-width: 90%;

    @include mq($from: md) {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: $base * 5 0;
    }
  }

  .title, .logo {
    display: block;
    margin: 0 auto;
    max-width: 40vw;

    @include mq($from: md) {
      margin: 0;
      max-width: 400px;
    }
  }
</style>