<template>
  <Default>
    <main>
      <article>
        <h1 v-html="md.render(original.title)"></h1>
        <div v-html="md.render(original.content)" class="content"></div>
      </article>
    </main>
  </Default>
</template>

<script>
const md = require('markdown-it')();

export default {
  data() {
    return {
      md,
      original: {
        title: '',
        content: ''
      }
    }
  },
  async asyncData({ params, app }) {
    const escaped = params.slug;
    return { escaped }
  },
  mounted() {
    const cipher = atob(this.escaped);
    this.original = this.decrypt(cipher, 'password')
    console.log(this.original);
  }
}
</script>