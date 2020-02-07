<template lang="pug">
  main
    bm-masthead
    bm-social
    bm-footer
</template>

<script>
import Social from "@/components/Social.vue";
import Footer from "@/components/Footer.vue";
import Masthead from "@/components/Masthead.vue";

export default {
  components: {
    "bm-social": Social,
    "bm-footer": Footer,
    "bm-masthead": Masthead
  }
};
</script>