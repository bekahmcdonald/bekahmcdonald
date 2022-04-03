<template lang="pug">
main
  div
    .hero(v-if='hero')
      lazy-image(:src='hero.image', class='ratio-1:1 md:ratio-4:3 lg:ratio-16:9')

  .about.o-container(v-if='about')
    .block(
      v-for='(block, index) in about.content',
      :key='block.heading + index'
    )
      h2.heading {{ block.heading }}
      div(v-html='block.copy')

    skills(:skills='skills')

  div(class='lg:o-container')
    #work.work(v-if='work')
      project(v-for='project in work', :key='project.id', :project='project')

  contact(:content='contact', :social='social')
</template>

<script>
import Axios from 'axios'
import LazyImage from '@/components/LazyImage'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'

export default {
  components: {
    LazyImage,
    Project,
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
.hero {
  background-color: $cotton;
  overflow: hidden;

  ::v-deep .image {
    max-height: 72.5vh;
  }

  ::v-deep img {
    object-position: right;
  }
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

.work {
  @include mq($from: lg) {
    margin-bottom: 120px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -40px;

    .project {
      width: 50%;
      padding-left: 40px;
    }
  }

  @include mq(lg, xl) {
    .project:nth-child(3n - 2) {
      width: 100%;
    }
  }

  @include mq($from: xl) {
    .project {
      width: 50%;
    }
  }
}
</style>
