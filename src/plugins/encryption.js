import Vue from 'vue';
import { AES, enc } from 'crypto-js';

const encrypt = (text, password) => {
  return AES.encrypt(text, password).toString();
}

const decrypt = (ciphertext, password) => {
  const bytes = AES.decrypt(ciphertext, password);
  return bytes.toString(enc.Utf8);
}

Vue.prototype.encrypt = encrypt;
Vue.prototype.decrypt = decrypt;
export default ({ app }, injext) => {
  app.encrypt = encrypt;
  app.decrypt = decrypt;
}