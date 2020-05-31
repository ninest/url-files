import Vue from 'vue';
import { AES, enc } from 'crypto-js';

const encrypt = (obj, password) => {
  return AES.encrypt(JSON.stringify(obj), password).toString();
}

const decrypt = (cipherObject, password) => {
  const bytes = AES.decrypt(cipherObject, password);
  return JSON.parse(bytes.toString(enc.Utf8));
}

Vue.prototype.encrypt = encrypt;
Vue.prototype.decrypt = decrypt;
export default ({ app }, injext) => {
  app.encrypt = encrypt;
  app.decrypt = decrypt;
}