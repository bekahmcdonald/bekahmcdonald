<template lang="pug">
  footer
    .o-container
      .content
        .small &copy; #{ new Date().getFullYear() } Bekah McDonald
        .xsmall Built with #[a(href="https://vuejs.org/") Vue] and the WordPress REST API
    
</template>

<style lang="scss" scoped>
footer {
  padding: 1rem 0 2.5rem;

  a {
    color: inherit;
    text-decoration: none;

    &[href*='vue'] {
      color: #33a06f;
      font-weight: 500;
      transition: color 0.2s ease-in-out;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: $ink;
        }
      }
    }
  }

  .content {
    @include mq($until: lg) {
      *:last-child {
        margin-top: 1rem;
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
