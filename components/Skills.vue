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
  font-size: 6rem;
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
    transform: translate(-1.5px, -2px);
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
  margin-bottom: 32px;
  margin-left: -8px;
  margin-top: -8px;
  padding-top: 8px;
}

.skill {
  @extend %label;
  background-color: darken($cotton, 5%);
  display: inline-block;
  margin-left: 8px;
  margin-top: 8px;

  user-select: none;
}
</style>
