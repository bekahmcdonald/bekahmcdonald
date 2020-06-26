<template lang="pug">
  main
    div
      .hero(v-if="hero")
        img(:src="hero.image.url")

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

}
</style>
