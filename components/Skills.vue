<template lang="pug">
  .skills(v-if="skills")
    h2.heading {{ skills.heading }}
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
  padding: 8px 12px;
  user-select: none;
}
</style>
