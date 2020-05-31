<template>
  <Default>
    <header>
      <h1>File URL</h1>

      <div class="right">
        <button @click="setPassword">set password</button>

        <div v-if="longUrl != ''" class="right">
          <input class="link" id="link" type="text" :value="longUrl">
          <button @click="copyLink">copy link</button>
      </div>
      </div>
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
      </form>
    </main>

  </Default>
</template>

<script>
export default {
  data() {
    return {
      title: '',
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
    },
    setPassword () {
      this.password = prompt('Enter a password: ', '')
    },
    copyLink () {
      const $link = document.getElementById('link');
      $link.style.display = 'block';
      $link.select();

      try {
        const success = document.execCommand('copy');
      } catch (err) {
        prompt('Copy the text', this.longUrl);
      }

      $link.style.display = 'none';
    }
  },
  watch: {
    title() { this.save(); },
    content() { this.save(); },
    password() { this.save(); }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: var(--dense-p) var(--page-hor-p);
  display: flex;

  justify-content: space-between;


  h1 {
    font-size: 1.1em;
    margin:0;
  };

  .right {
    display: flex;

    button {
      white-space: nowrap;
    }

    .link {
      // hidden, only required to copy link
      display: none;
    }
  }

  border-bottom: 1px solid var(--light-gray);
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