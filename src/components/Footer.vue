<template lang="pug">
  footer.footer
    p &copy; {{ year }} Bekah McDonald
</template>

<script>
  export default {
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
  };
</script>

<style lang="scss">
.footer {
  @extend %squirrel;
  font-weight: 480;
  padding: $base * 2;
  text-align: center;
  text-transform: uppercase;
}
</style>