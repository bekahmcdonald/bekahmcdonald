<template lang="pug">
  .contact(id="contact" v-if="content")
    .o-container
      h2.heading {{ content.title }}
      clipboard-confirmation(v-show="copied" :style="confirmPosition")
      .copy.js-email(ref="copy" data-location="footer" v-html="content.copy")
      
      .social(v-if="social")
        a.icon.js-social-icon(:data-icon="link.platform" v-for="link in social" :key="link.url" :href="link.url" rel="noopener noreferrer")
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
  background-color: $cotton;
  padding: 32px 0;

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
  margin: 32px 0;
}

.icon {
  margin-right: 16px;
  max-height: 24px;
  max-width: 24px;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  user-select: none;

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
