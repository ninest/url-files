<template>
  <div class="default-layout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '~/assets/styles/normalize.css';
@import '~/assets/styles/main.scss';
@import '~/assets/styles/inputs.scss';

.default-layout {
  position: relative;
  min-height: 100vh;
}
</style>