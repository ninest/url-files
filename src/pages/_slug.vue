<template>
  <Default>
    <main>
      <article>
        <h1>
          {{ original.title }}
        </h1>
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
    const slug = params.slug;
    let escaped;
    if (slug.length < 10) {
      // get data from tiny url
      console.log('using tinyurl')
      escaped = await app.getCipherFromTinyId(slug);
      console.log(escaped);
    } else {
      escaped = slug;
    }
    return { escaped }
  },
  mounted() {
    // unescape from base64
    const cipher = atob(this.escaped);

    try {
      // password is the default password
      this.original = this.decrypt(cipher, '')
    } catch {
      // if that doesn't work, ask for the password
      const password = prompt('Enter the password:');

      try {
        this.original = this.decrypt(cipher, password);
      } catch {
        alert('Incorrect password');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: var(--main-p) var(--page-hor-p);

  article {
    h1 {
      font-size: 3em;
      margin-bottom: var(--dense-p);
      border-bottom: 1px solid var(--light-gray);
    }
  }
}
</style>