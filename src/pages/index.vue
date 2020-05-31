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

    <div v-if="url != ''">
      {{ url }}
    </div>

  </Default>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      password: '',
      url: ''
    }
  },
  methods: {
    async save () {
      const ciphertext = this.encrypt(this.content, this.password);
      // const original = this.decrypt(ciphertext, this.password);

      const tinyurl = await this.shortenUrl(`https://url-file.ninest/${ciphertext}`);
      const tag = tinyurl.split('tinyurl.com/')[1]

      const location = document.location.href;
      // if not ends in '/', add '/' to end
      if (!location.endsWith('/')) {
        location = `${location}/`
      }
      this.url = `${location}${tag}`;
    }
  },
}
</script>