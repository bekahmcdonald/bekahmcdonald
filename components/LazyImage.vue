<template>
  <div class="image">
    <img
      v-if="src && src.sizes"
      class="lazyload"
      draggable="false"
      :data-srcset="srcset"
    />
    <div v-else class="lazyload placeholder"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: [Object, Boolean],
      default() {
        return {}
      },
    },
  },
  computed: {
    srcset() {
      if (!this.src.sizes) return
      const srcset = []
      const chunked = this.chunk(Object.values(this.src.sizes), 3)
      chunked.forEach((chunk) => {
        const str = `${chunk[0]} ${chunk[1]}w`
        !srcset.includes(str) && srcset.push(str)
      })
      return srcset.join(', ')
    },
  },
  methods: {
    chunk(array, size) {
      const chunkedArray = []
      let index = 0
      while (index < array.length) {
        chunkedArray.push(array.slice(index, size + index))
        index += size
      }
      return chunkedArray
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  overflow: hidden;
  pointer-events: none;

  img {
    @include transition($ease, opacity);
    display: block;
    font-family: 'object-fit: contain'; // For lazysizes plugin
    height: 100%;
    object-fit: cover;
    user-select: none;
    width: 100%;

    .lazyload {
      opacity: 0;
    }
    .lazyloaded {
      opacity: 1;
    }
  }
}

img {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.lazyloaded {
    opacity: 1;
  }
}

.placeholder {
  background-color: color(gainsboro, 0.5);
  font-family: 'object-fit: contain'; // For lazysizes plugin
  height: 100%;
  width: 100%;
}
</style>
