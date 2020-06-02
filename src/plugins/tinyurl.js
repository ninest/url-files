import Vue from 'vue';

const getTinyId = async (url) => {
  const response = await fetch(`http://tinyurl.com/api-create.php?url=${url}`);
  const text = await response.text();
  return text.split('tinyurl.com/')[1];
}

const getCipherFromTinyId = async (id) => {
  const url = `https://tiny-expander.now.sh/api/tinyurl.com/${id}`
  const response = await fetch(url);
  const text = await response.text();

  // remove the location name (url-file.now.sh/), and get the id after the slash
  return text // https://host.com/xxxxxxxx
          .split('//')[1] // host.com/xxxxxxxx
          .split('/')[1]; // xxxxxxxx
}

Vue.prototype.getTinyId = getTinyId;
Vue.prototype.getCipherFromTinyId = getCipherFromTinyId;
export default ({ app }, injext) => {
  app.getTinyId = getTinyId;
  app.getCipherFromTinyId = getCipherFromTinyId;
}