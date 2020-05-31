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
  </Default>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      password: '',
    }
  },
  methods: {
    save() {
      
      console.log(this.content, this.password)
    }
  },
}
</script>