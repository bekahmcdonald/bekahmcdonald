<template>
  <div class="container">
    <div class="gradient">Bekah</div>
    <div class="outline">Bekah</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: inline-grid;
  grid-template-areas: 'content';
}

.gradient,
.outline {
  grid-area: content;
  font-family: $solid;
  font-size: clamped(6rem, 10rem, breakpoint(xs), breakpoint(md));
}

.gradient {
  background-image: linear-gradient(92deg, $powder, $sunflower, $pink);
  background-clip: text;
  color: transparent;
  transform: translate(-2px, -2px);

  @include mq($from: sm) {
    transform: translate(-3px, -3px);
  }

  @include mq($from: md) {
    transform: translate(-4px, -4px);
  }
}

.outline {
  font-family: $outline;
  position: relative;
  z-index: 1;
}
</style>
