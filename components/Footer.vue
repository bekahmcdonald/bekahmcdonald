<template lang="pug">
  footer
    .o-container
      .content
        .small &copy; #{ new Date().getFullYear() } Bekah McDonald
        .xsmall Built with #[a(href="https://vuejs.org/") Vue] and the WordPress REST API
    
</template>

<style lang="scss" scoped>
footer {
  background-color: $cotton;
  padding: 8px 0 24px;

  a {
    color: inherit;
    text-decoration: none;
  }

  .content {
    @include mq($until: lg) {
      *:last-child {
        margin-top: 8px;
      }
    }
    @include mq($from: lg) {
      flex-direction: row;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
