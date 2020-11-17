<template lang="pug">
  .project.js-project(:data-project="project.thumbnail.caption")
    component.image-container(:is="link ? 'a' : 'div'" :href="link" rel="noopener noreferrer")
      lazy-image(:src="project.thumbnail.image")
    .meta 
      ul.tags
        li.tag(v-for="tag in project.tags") {{ tag }}
      component(:is="link ? 'a' : 'div'" :href="link" rel="noopener noreferrer")
        h3.label {{ project.thumbnail.caption }}
        <svg v-if="link" class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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

.meta {
  text-align: center;
  font-weight: 400;
  margin: 8px auto 48px;
}

.meta a {
  color: inherit;
}

.meta .label {
  user-select: none;
  padding-bottom: 2px;
  display: inline-block;
  margin-bottom: 8px;
  color: $ink;
}

.meta a > .label {
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  border-bottom: solid 0.5px transparent;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-bottom-color: currentColor;
    }
  }
}

.meta .icon {
  display: inline-block;
  width: 0.75em;
  height: auto;
  margin-left: 0.5em;
}

.tags {
  margin-bottom: 32px;
  margin-left: -8px;
  margin-top: -8px;
  padding-top: 8px;
}

.tag {
  @extend %label;
  font-size: 12px;
  background-color: darken($cotton, 5%);
  display: inline-block;
  margin-left: 8px;
  margin-top: 8px;
  padding: 4px 6px;
  user-select: none;
  font-weight: 300;
}
</style>
