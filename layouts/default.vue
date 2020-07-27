<template lang="pug">
  div
    the-header
    nuxt
    the-footer
</template>

<script>
import TheHeader from '@/components/Header'
import TheFooter from '@/components/Footer'
import structuredData from '@/assets/json-ld.json'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  head() {
    return {
      script: [
        { type: 'application/ld+json', src: JSON.stringify(structuredData) },
      ],
    }
  },
}
</script>
