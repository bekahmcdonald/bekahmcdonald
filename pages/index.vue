<template lang="pug">
main
  .o-container(v-if='about')
    .about
      the-header
      .block(
        v-for='(block, index) in about.content',
        :key='block.heading + index'
      )
        div(v-html='block.copy')

    skills(:skills='skills')

  contact(:content='contact', :social='social')
</template>

<script>
import Axios from 'axios'
import Header from '@/components/Header'
import LazyImage from '@/components/LazyImage'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'

export default {
  components: {
    'the-header': Header,
    LazyImage,
    Contact,
    Skills,
  },
  async asyncData({ params }) {
    const { data } = await Axios.get(
      `https://cms.bekahmcdonald.com/wp-json/bm/v1/global`
    )
    return data
  },
}
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 4rem;
  font-size: 1.8rem;
  margin-left: 0;

  @include mq($from: md) {
    font-size: 2rem;
    max-width: 60ch;
    padding-top: 8rem;
    padding-bottom: 6rem;
  }
}

.block {
  margin-bottom: 5rem;

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
