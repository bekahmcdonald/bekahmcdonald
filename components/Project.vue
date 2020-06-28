<template lang="pug">
  .project
    component.image-container(:is="link ? 'a' : 'div'" :href="link" rel="noopener noreferrer")
      lazy-image(:src="project.thumbnail.image")
    div.caption 
      component(:is="link ? 'a' : 'div'" :href="link" rel="noopener noreferrer")
        h3.label {{ project.thumbnail.caption }}
      div.note
        span(v-if="project.thumbnail.coming_soon") Coming soon
        span &nbsp;

</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    link() {
      if (this.project.thumbnail.coming_soon) return false
      return this.project.thumbnail.link || false
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  color: inherit;
  text-decoration: none;
  overflow: hidden;
}

.image-container {
  background-color: $cotton;
  display: block;
  overflow: hidden;
  padding-bottom: (200% / 3);
  position: relative;
}

a.image-container {
  .image {
    transition: transform 0.4s ease-in-out;
    cursor: pointer;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover .image {
      transform: scale(1.1);
    }
  }
}

.image {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.caption {
  text-align: center;
  font-weight: 400;
  margin: 8px auto 48px;

  .label {
    user-select: none;
    padding-bottom: 2px;
    display: inline-block;
    margin-bottom: 8px;
  }

  a > .label {
    cursor: pointer;
    color: $ink;
    transition: border-color 0.3s ease-in-out;
    border-bottom: solid 0.5px transparent;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-bottom-color: currentColor;
      }
    }
  }
}
</style>
