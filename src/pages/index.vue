<template>
  <Default>

    <main>
      <div class="top">
        <input v-model="title" class="title" name="title" type="text" placeholder="Enter a title ..." autocomplete="off" tabindex="1">
        <div class="has-dropdown">
          <a href="#" class="dropdown-indicator">v</a>

          <nav class="dropdown" tabindex="-1">
            <button @click="setPassword" tabindex="2">set password</button>
            <button @click="copyGiantUrl" tabindex="2">copy link</button>
            <button @click="copyTinyUrl" tabindex="2">copy tiny</button>
            <input class="link-input" id="link" type="text" tabindex="-1">
          </nav>
        </div>
      </div>
      <!-- <div> -->
        <textarea v-model="content" class="content" name="content" placeholder="Write your document ..." tabindex="1"></textarea>
      <!-- </div> -->
    </main>

  </Default>
</template>

<script>
export default {
  data() {
    return {
      location: 'https://url-files.now.sh/',
      title: '',
      content: '',
      password: '',

      escaped: '',
      urls: {
        giant: 'https://url-files.now.sh/',
        tiny: ''
      }
    }
  },
  methods: {
    async save () {
      // const ciphertext = this.encrypt(this.content, this.password);
      const cipher = this.encrypt({
        title: this.title,
        content: this.content
      }, this.password)

      this.escaped = btoa(cipher)
    },
    setPassword () {
      this.password = prompt('Enter a password: ', this.password)
    },
    async copyGiantUrl () {
      await this.save();
      this.urls.giant = `${this.location}${this.escaped}`
      this.copyText(this.urls.giant)
    },
    async copyTinyUrl () {
      await this.save();
      await this.copyGiantUrl();

      // get tiny url from giant url
      const id = await this.getTinyId(this.urls.giant)
      console.log(id);
      this.urls.tiny = `${this.location}${id}`;
      console.log(this.urls.tiny)
      this.copyText(this.urls.tiny);
    },
    copyText (text) {
      const $link = document.getElementById('link');
      $link.style.display = 'block';
      $link.value = text;
      $link.select();

      try {
        const success = document.execCommand('copy');
      } catch (err) {
        prompt('Copy the text', text);
      }

      $link.style.display = 'none';
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  // background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    align-items: center;
    justify-self: center;

    input.title {
      padding: var(--main-p) var(--page-hor-p);
      font-size: 2rem;
      font-weight: 900;
    }

    .has-dropdown {
      .dropdown-indicator {
        // background-color: green;
        // display: block;
        // height: 100%;
        display: grid;
        align-content: center;

        padding: 0 var(--main-p);
        margin-right: var(--dense-p);

        color: rgba(0, 0, 0, 0.64);
        text-decoration: unset;
        font-weight: 900;
      }

      .dropdown {
        position: absolute;
        right: var(--dense-p);

        width: 200px;
        opacity: 0;
        z-index: 100;

        display: flex;
        flex-direction: column;

        transition: opacity 0.1s ease-out;

        .link-input {
          // no need display. It will only be shown when reqired to copy the urls
          display: none;
        }

        button {
          padding: var(--main-p);
        }
      }
    }
    .has-dropdown:focus-within {
      .dropdown {
        opacity: 1;
      }
    }
  }

  textarea.content {
    height: 100%;
    padding: var(--main-p) var(--page-hor-p);
    // extra padding at the top for more breathing space. this space is gone on scroll down
    padding-top: calc(2* var(--main-p));
  }
}

</style>