<template>
  <div>
    {{ original.content }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      original: {}
    }
  },
  async asyncData({ params, app }) {
    const escaped = params.slug;
    return { escaped }
  },
  mounted() {
    const cipher = atob(this.escaped);
    this.original = this.decrypt(cipher, 'password')
  }
}
</script>