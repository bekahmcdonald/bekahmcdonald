<template lang="pug">
  main
    .work.o-container(v-if="work")
      h2.heading
        .outline {{ work.title }}
        .solid {{ work.title }}
      .text(v-html="work.intro")

      .projects
        project(v-for="project in work.projects" :project="project")
      
</template>

<script>
import Axios from 'axios'
import Project from '@/components/Project'

export default {
  components: {
    Project,
  },
  async asyncData({ params }) {
    const { data } = await Axios.get(
      `https://cms.bekahmcdonald.com/wp-json/bm/v1/global`
    )
    return data
  },
  head: {
    meta: [
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 6rem;
}

.text {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  margin-left: 0;

  @include mq($from: md) {
    font-size: 2rem;
  }
}
</style>
