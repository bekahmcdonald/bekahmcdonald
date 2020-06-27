<template lang="pug">
  .contact(id="contact" v-if="content")
    .o-container
      h2.heading {{ content.title }}
      div(v-html="content.copy")
      
      .social(v-if="social")
        a.icon(v-for="link in social" :key="link.url" :href="link.url" rel="noopener noreferrer")
          img(v-if="link.icon" :alt="link.platform" :src="link.icon")
          span(v-else) {{ link.platform }}

</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      },
    },
    social: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  background-color: $cotton;
  padding: 32px 0;

  /deep/ a {
    color: inherit;
    text-decoration-thickness: 0.5px;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        text-decoration-thickness: 1px;
      }
    }
  }
}

.social {
  display: flex;
  margin: 32px 0;
}

.icon {
  max-height: 24px;
  max-width: 24px;
  margin-right: 16px;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.75;
      transform: scale(1.1);
    }
  }

  &:last-child {
    margin-right: 0;
  }

  img {
    object-fit: contain;
  }
}
</style>
