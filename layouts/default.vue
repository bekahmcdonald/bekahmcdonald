<template lang="pug">
  div
    the-header
    nuxt
    the-footer
</template>

<script>
import TheHeader from '@/components/Header'
import TheFooter from '@/components/Footer'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
