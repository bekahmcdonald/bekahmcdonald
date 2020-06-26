<template lang="pug">
  main
    div
      .hero(v-if="hero")
        img(:src="hero.image.url")

    .about.o-container(v-if="about")
      .block(v-for="(block,index) in about.content" :key="block.heading + index")
        h2.heading {{ block.heading }}
        div(v-html="block.copy")
  
</template>

<script>
import Axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await Axios.get(
      `https://cms.bekahmcdonald.com/wp-json/bm/v1/global`
    )
    return data
  },
}
</script>

<style lang="scss" scoped>
.hero {
  max-height: 72.5vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.about {
  margin-top: 64px;
  margin-bottom: 64px;

  @include mq($from: md) {
    max-width: 60ch;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @include mq($from: lg) {
    margin-top: 120px;
    margin-bottom: 120px;
  }
}

.block {
  margin-bottom: 48px;

  &:last-of-type {
    margin-bottom: 0;
  }
}
}
</style>
