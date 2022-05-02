<template lang="pug">
  .project.js-project(:data-project="project.thumbnail.caption")
    .image-container
      lazy-image(:src="project.thumbnail.image")
    .meta
      h3.url {{ project.thumbnail.caption }}
      
      ul.tags
        li.tag(v-for="tag in project.tags") {{ tag }}
      .credit Design: {{ project.thumbnail.credit }}

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
  padding-bottom: calc(200% / 3);
  position: relative;
}

.image {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.meta {
  font-weight: 400;
  margin: 1rem auto 8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'url credit' 'tags tags';

  @include mq($from: md) {
    margin-bottom: 10rem;
  }

  a {
    color: inherit;
  }

  .label {
    user-select: none;
    padding-bottom: 2px;
    display: inline-block;
    margin-bottom: 8px;
    color: $ink;
  }

  a > .label {
    cursor: pointer;
    transition: border-color 0.3s ease-in-out;
    border-bottom: solid 0.5px transparent;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-bottom-color: currentColor;
      }
    }
  }

  .icon {
    display: inline-block;
    width: 0.75em;
    height: auto;
    margin-left: 0.5em;
  }
}

.tags {
  margin-left: -1rem;
  margin-top: -1rem;
  padding-top: 1rem;
  grid-area: tags;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.tag {
  @extend %label;
  font-size: 1.1rem;
  background-color: lighten($powder, 15%);
  display: inline-block;
  margin-left: 0.8rem;
  padding: 0 0.6rem;
  margin-top: 0.8rem;
  user-select: none;
  font-weight: 300;

  @include mq($from: md) {
    font-size: 1.2rem;
    padding: 0.4rem 0.6rem;
  }
}

.credit {
  grid-area: credit;
  text-align: right;
  align-self: center;
}

.url {
  grid-area: url;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;

  @include mq($from: md) {
    font-size: 2rem;
  }
}
</style>
