<template lang="pug">
  .skills.o-container(v-if="skills")
      h2.heading {{ skills.heading }}
      div(v-for="section in skills.preference" :key="section.heading")
        h3.subheading {{ section.heading }}
        ul.skill-list
          li.skill(v-for="skill in section.list" :key="skill") {{ skill.language }}
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
.skills {
  margin-top: 64px;
  margin-bottom: 64px;

  @include mq($from: md) {
    max-width: 60ch;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @include mq($from: lg) {
    margin-top: 120px;
    margin-bottom: 120px;
  }
}

.skill-list {
  margin-top: -8px;
  margin-left: -8px;
  padding-top: 8px;
  margin-bottom: 32px;
}

.skill {
  @extend %label;
  background-color: darken($cotton, 5%);
  padding: 8px 12px;
  margin-top: 8px;
  margin-left: 8px;
  display: inline-block;
}
</style>
