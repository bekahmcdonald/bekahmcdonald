<template lang="pug">
  .social
    a(href="https://medium.com/bekah-mcdonald" rel="noopener")
      bm-medium.icon
    a(href="https://twitter.com/bekah_mcdonald" rel="noopener")
      bm-twitter.icon
    a(href="mailto:website@bekahmcdonald.com" rel="noopener")
      bm-email.icon
</template>

<script>
import Medium from '@/assets/svg/Medium.vue';
import Twitter from '@/assets/svg/Twitter.vue';
import Email from '@/assets/svg/Email.vue';

export default {
  components: {
    'bm-email': Email,
    'bm-twitter': Twitter,
    'bm-medium': Medium,
  },
};
</script>

<style lang="scss" scoped>
.social {
  align-items: center;
  display: flex;
  justify-content: center;
}

.icon {
  margin: 0 10px;
  transition: transform 0.1s ease-in-out;
  width: 50px;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.125);
    }
  }
}
</style>
