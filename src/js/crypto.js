import CryptoJS from 'crypto-js'; // бібліотека вже вважається застарілою

const secret_key = 'mySecretKey123';

// захист так собі, але краще ніж захардкоджений ключ у відкритому репозиторії.
export function getApiKey() {
  const encApiKey =
    'U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==';
  return CryptoJS.AES.decrypt(encApiKey, secret_key).toString(
    CryptoJS.enc.Utf8
  );
}
