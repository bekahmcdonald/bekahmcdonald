<template lang="pug">
  .skills(v-if="skills")
    h2.heading
      .outline {{ skills.heading }}
      .solid {{ skills.heading }}
    div(v-for="section in skills.preference" :key="section.heading")
      h3.subheading {{ section.heading }}
      ul.skill-list
        li.skill(v-for="skill in section.list" :key="skill.language") {{ skill.language }}
</template>

<script>
export default {
  props: {
    skills: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.heading {
  font-size: clamped(4rem, 6rem, breakpoint(xs), breakpoint(md));
  display: inline-grid;
  grid-template-areas: 'content';
  letter-spacing: 0.5px;

  .solid,
  .outline {
    grid-area: content;
  }
  .solid {
    font-family: $solid;
    color: $london;
    transform: translate(-0.15rem, -0.2rem);
  }
  .outline {
    font-family: $outline;
    position: relative;
    z-index: 1;
  }
}

.subheading {
  font-family: $inter;
  font-weight: 500;
}
.skill-list {
  margin-bottom: 3.2rem;
  margin-left: -0.8rem;
  margin-top: -0.8rem;
  padding-top: 0.8rem;
}

.skill {
  @extend %label;
  background-color: darken($cotton, 5%);
  display: inline-block;
  margin-left: 0.8rem;
  margin-top: 0.8rem;
  padding: 0.75rem 1rem;
  user-select: none;
}
</style>
