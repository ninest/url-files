<template>
  <div class="default-layout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '~/assets/styles/normalize.css';

.default-layout {
  margin: 2em 23%;

  @include mobile-screen {
    margin: 2em;
  }
}
</style>