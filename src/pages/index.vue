<template>
  <Default>
    <h1>File URL</h1>
    <form>
      <div>
        <label for="content">content:</label>
        <textarea v-model="content" name="content"></textarea>
      </div>
      <div>
        <label for="password">password:</label>
        <input v-model="password" name="text" type="password">
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
      content: '',
      password: '',
      longUrl: '',
      // url: ''
    }
  },
  methods: {
    async save () {
      // const ciphertext = this.encrypt(this.content, this.password);
      const cipher = this.encrypt({
        content: this.content
      }, this.password)
      // const original = this.decrypt(ciphertext, this.password);
      const escaped = btoa(cipher)
      this.longUrl = `localhost:3000/${escaped}`
      // const tinyurl = await this.shortenUrl(this.longUrl);
      // const tag = tinyurl.split('tinyurl.com/')[1]

      // const location = document.location.href;
      // // if not ends in '/', add '/' to end
      // if (!location.endsWith('/')) {
      //   location = `${location}/`
      // }
      // this.url = `${location}${tag}`;
    }
  },
}
</script>