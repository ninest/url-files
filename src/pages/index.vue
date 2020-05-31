<template>
  <Default>
    <header>
      <h1>File URL</h1>
    </header>

    <main>
      <form>
        <div>
          <label for="title">title:</label>
          <input v-model="title" class="title" name="title" type="text" placeholder="Enter a title ...">
        </div>
        <div>
          <label for="content">content:</label>
          <textarea v-model="content" name="content" placeholder="Write your document ..."></textarea>
        </div>
        <div>
          <label for="password">password:</label>
          <input v-model="password" name="password" type="text" placeholder="Enter a password ...">
        </div>
        <button v-on:click.prevent="save">save</button>
      </form>

      <div v-if="longUrl != ''">
        <div>
          {{ longUrl}}
        </div>
      </div>
    </main>

  </Default>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      password: 'password',
      longUrl: '',
      // url: ''
    }
  },
  methods: {
    async save () {
      // const ciphertext = this.encrypt(this.content, this.password);
      const cipher = this.encrypt({
        title: this.title,
        content: this.content
      }, this.password)
      // const original = this.decrypt(ciphertext, this.password);
      const escaped = btoa(cipher)

      const location = document.location.href;
      // if not ends in '/', add '/' to end
      if (!location.endsWith('/')) {
        location = `${location}/`
      }

      this.longUrl = `${location}${escaped}`
      // const tinyurl = await this.shortenUrl(this.longUrl);
      // const tag = tinyurl.split('tinyurl.com/')[1]

      // this.url = `${location}${tag}`;
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  padding: var(--dense-p) var(--page-hor-p);
  h1 {
    font-size: 1.1em;
    margin:0;
  };
  border-bottom: 1px solid black;
}

form {
  padding: 1em var(--page-hor-p);
  label {
    display: none;
  }

  input.title {
    font-size: 2em;
    font-weight: 900;
    margin-top: var(--dense-p);
    margin-bottom: var(--main-p);
  }
}
</style>