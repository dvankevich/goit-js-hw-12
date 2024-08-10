# goit-js-hw-11

https://poe.com/s/VzNwAvhia5Y1CYZSr3g1

Для правильної обробки помилок при використанні методу `fetch()` в JavaScript,
рекомендується наступний підхід:

1. **Перевірка відповіді на успіх**: Спочатку перевіряємо, чи відповідь була
   успішною (статус в діапазоні 200-299):

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Обробляємо успішну відповідь
    console.log(data);
  })
  .catch(error => {
    // Обробляємо помилки
    console.error('Error:', error);
  });
```

2. **Обробка мережевих помилок**: Якщо на етапі `fetch()` виникає мережева
   помилка (наприклад, відсутнє з'єднання), можна використати `Promise.race()`
   для обробки таймауту:

```javascript
const timeout = 5000; // 5 секунд

Promise.race([
  fetch('https://api.example.com/data'),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeout)
  ),
])
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Обробляємо успішну відповідь
    console.log(data);
  })
  .catch(error => {
    // Обробляємо помилки
    console.error('Error:', error);
  });
```

3. **Глобальна обробка помилок**: Для глобальної обробки помилок, можна
   використати `window.onerror` або `process.on('unhandledRejection')` (у
   Node.js):

```javascript
window.onerror = (message, source, lineno, colno, error) => {
  // Обробляємо всі необроблені помилки
  console.error('Unhandled error:', error);
};

// або для Node.js

process.on('unhandledRejection', (reason, promise) => {
  // Обробляємо всі необроблені відхилення Promise
  console.error('Unhandled promise rejection:', reason);
});
```

Використовуючи цей підхід, ви можете ефективно обробляти як помилки відповіді
HTTP, так і мережеві помилки, гарантуючи, що всі помилки будуть належним чином
оброблені у вашому додатку.
