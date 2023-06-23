<template lang="pug">
  .about
    .o-container
      .block(
        v-for='(block, index) in about.content',
        :key='block.heading + index'
      )
        div(v-html='block.copy')
    girl-code
</template>

<script>
import GirlCode from '@/components/GirlCode'


export default {
  components: {
    GirlCode
  },
  props: {
    about: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  font-size: 1.8rem;
  margin-bottom: 5rem;
  margin-left: 0;

  @include mq($from: md) {
    font-size: 2rem;
    padding-bottom: 6rem;
  }
}

.block {
  margin-bottom: 5rem;
  max-width: 60ch;

  &:last-of-type {
    margin-bottom: 0;
  }

  // Links
  ::v-deep a {
    box-shadow: inset 0 -0.625em rgba($flax, 0.5);
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.3s ease-in-out, font-weight 0.3s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        box-shadow: inset 0 -1.25em rgba($flax, 0.75);
        font-weight: 350;
      }
    }
  }
}
</style>
