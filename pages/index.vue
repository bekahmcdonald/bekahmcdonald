<template lang="pug">
  main
    h1 bekahmcdonald.com
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
h1 {
  color: blue;
}
</style>
