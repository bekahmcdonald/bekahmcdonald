<template lang="pug">
  main
    about(:about="about")
    .about
    skills(:skills='skills')
    contact(:content='contact', :social='social')
</template>

<script>
import Axios from 'axios'
import About from '@/components/About'
import LazyImage from '@/components/LazyImage'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'

export default {
  components: {
    About,
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
