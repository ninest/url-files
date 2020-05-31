import Vue from 'vue';

const shortenUrl = async (url) => {
  const response = await fetch(`http://tinyurl.com/api-create.php?url=${url}`);
  const text = await response.text();
  return text;
}

const getFullUrl = async (id) => {
  const tinyurl = `https://tinyurl.com/${id}`
  console.log(tinyurl);
  const response = await fetch(tinyurl);
  return response;
}

Vue.prototype.shortenUrl = shortenUrl;
Vue.prototype.getFullUrl = getFullUrl;
export default ({ app }, injext) => {
  app.shortenUrl = shortenUrl;
  app.getFullUrl = getFullUrl;
}