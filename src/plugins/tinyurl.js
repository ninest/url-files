import Vue from 'vue';

const shortenUrl = async (url) => {
  const response = await fetch(`http://tinyurl.com/api-create.php?url=${url}`);
  const text = await response.text();
  return text;
}

Vue.prototype.shortenUrl = shortenUrl;
export default ({ app }, injext) => {
  app.shortenUrl = shortenUrl;
}