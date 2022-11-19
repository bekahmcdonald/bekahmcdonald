<template lang="pug">
  .contact(id="contact" v-if="content")
    .o-container
      h2.heading
        .outline {{ content.title }}
        .solid {{ content.title }}

      clipboard-confirmation(v-show="copied" :style="confirmPosition")
      .copy.js-email(ref="copy" data-location="footer" v-html="content.copy")
      
      .social(v-if="social")
        a.icon.js-social-icon(:data-icon="link.platform" v-for="link in social" :key="link.url" :href="link.url" :rel="link.platform == 'Mastodon' ? 'me' : 'noopener'")
          img(v-if="link.icon" :alt="link.platform" :src="link.icon")
          span(v-else) {{ link.platform }}

</template>

<script>
import copyToClipboard from '@/assets/mixins/copyToClipboard'
import ClipboardConfirmation from '@/components/ClipboardConfirmation'

export default {
  components: {
    ClipboardConfirmation,
  },
  mixins: [copyToClipboard],
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
  data() {
    return {
      copied: false,
      confirmPosition: {
        top: 0,
        left: 0,
      },
    }
  },
  mounted() {
    this.replaceMailtoLinks()
  },
  methods: {
    replaceMailtoLinks() {
      const copy = this.$refs.copy
      copy.querySelectorAll('a').forEach((anchor) => {
        anchor.addEventListener('click', this.clickToCopy)
      })
    },

    clickToCopy(e) {
      e.preventDefault()
      const email = event.target.href.replace('mailto:', '')
      this.copyToClipboard(email)
      this.displayCopyConfirmation(e)
    },

    displayCopyConfirmation(e) {
      const mq = window.matchMedia('(max-width: 400px)')
      if (mq.matches) {
        this.confirmPosition.left = '20px'
      } else {
        this.confirmPosition.left = e.clientX + 'px'
      }

      this.confirmPosition.top = e.clientY + 'px'
      this.copied = true

      setTimeout(() => {
        this.copied = false
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 5rem 0 4rem;
  margin-top: 4rem;

  @include mq($from: md) {
    margin-top: 10rem;
    padding-bottom: 8rem;
  }

  ::v-deep a {
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
  margin: 4rem 0;
}

.icon {
  margin-right: 1.5rem;
  max-height: 3.5rem;
  max-width: 3.5rem;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  user-select: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.9;
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

.copy {
  font-size: 1.6rem;

  @include mq($from: md) {
    font-size: 2rem;
  }
}
</style>
