<template lang="pug">
  .clipboard-confirmation#animation
    .message Copied to clipboard
    - var n = 0;
    ul.confetti
      while n < 80
        li.piece= n++
</template>

<style lang="scss">
.clipboard-confirmation {
  position: fixed;
  z-index: 10;
  transform: translate(0, -200%);
  pointer-events: none;

  @media (min-width: 401px) {
    transform: translate(-50%, -200%);
  }
}

.message {
  background-color: #7dcfb6;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 0 rgba($ink, 0.1);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 8px;
  position: relative;
  text-shadow: 0px 1px 1px rgba($ink, 0.1);
  z-index: 2;
}

.confetti {
  z-index: 1;
}

@keyframes bang {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.piece {
  background: red;
  display: block;
  font-size: 0;
  height: 5px;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 3px;

  @for $i from 1 through 50 {
    &:nth-of-type(#{$i}) {
      transform: translate3d(
          random(190) - 100 + px,
          (random() * 100) - 50 + px,
          0
        )
        rotate(random(360) + deg);
      animation: bang 700ms ease-out forwards;
      background: hsla(random(360), 100%, 50%, 1);
      opacity: 0;
    }
  }
}

#background {
  cursor: pointer;
  position: relative;
  text-align: center;

  span {
    color: #333;
    font-size: 0.9em;
  }
}
</style>
