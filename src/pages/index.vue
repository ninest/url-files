<template>
  <Default>
    <h1>File URL</h1>
    <form>
      <div>
        <label for="title">title:</label>
        <input v-model="title" name="title" type="text">
      </div>
      <div>
        <label for="content">content:</label>
        <textarea v-model="content" name="content"></textarea>
      </div>
      <div>
        <label for="password">password:</label>
        <input v-model="password" name="password" type="text">
      </div>
      <button v-on:click.prevent="save">save</button>
    </form>

    <div v-if="longUrl != ''">
      <div>
        {{ longUrl}}
      </div>
    </div>

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