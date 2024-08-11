import CryptoJS from 'crypto-js'; // бібліотека вже вважається застарілою

// Шифрування
const plaintext = 'Це секретний текст, який потрібно зашифрувати.';
const secret_key = 'mySecretKey123';

const encrypted = CryptoJS.AES.encrypt(plaintext, secret_key).toString();
console.log('Зашифрований текст:', encrypted);
const encrypted2 =
  'U2FsdGVkX1+tvK0DxYzekrSUG68imwYDP1YN1t5o8R5UwaXaocpZi4kgO33ab39yC/Dl80E7pCgEDZoJC+YAd7Zf4aaLfos/+u/sLabAxAdq4xF6HQBLzSI1T78We9gFAY716XOxyy7rU8CIRtauSA==';

// Розшифровка
const decrypted = CryptoJS.AES.decrypt(encrypted, secret_key).toString(
  CryptoJS.enc.Utf8
);

const decrypted2 = CryptoJS.AES.decrypt(encrypted, secret_key).toString(
  CryptoJS.enc.Utf8
);

console.log('Розшифрований текст:', decrypted);
console.log('Розшифрований текст 2:', decrypted2);

// захист так собі, але краще ніж захардкоджений ключ у відкритому репозиторії.
export function getApiKey() {
  const encApiKey =
    'U2FsdGVkX1+17bTfSmnFs2tSRlV4rBWWRkysV6VVJBdzQG5Rv4j5mr00F+fRI1DG30R8E2QbnWav3CgE94Qibg==';
  return CryptoJS.AES.decrypt(encApiKey, secret_key).toString(
    CryptoJS.enc.Utf8
  );
}
