[<-- back to README.md](../README.md)

Для звернення до Pixabay API за допомогою бібліотеки Axios у JavaScript, можна
використати наступний код:

```javascript
import axios from 'axios';

async function getImagesFromPixabay(searchQuery, apiKey) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: searchQuery,
        image_type: 'photo',
        safesearch: true,
        per_page: 20,
        page: 1,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images from Pixabay:', error);
    throw error;
  }
}

// Приклад використання
const pixabayApiKey = 'YOUR_PIXABAY_API_KEY';
const searchQuery = 'nature';

getImagesFromPixabay(searchQuery, pixabayApiKey)
  .then(images => {
    console.log('Images from Pixabay:', images);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Ключові моменти:

1. Імпортуйте бібліотеку Axios.
2. Створіть асинхронну функцію `getImagesFromPixabay`, яка приймає пошуковий
   запит та API-ключ Pixabay.
3. Використайте `axios.get()` для здійснення GET-запиту до Pixabay API з
   необхідними параметрами (пошуковий запит, API-ключ, тип зображення, безпечний
   пошук, кількість зображень на сторінці, номер сторінки).
4. Поверніть масив зображень з відповіді API.
5. Обробіть помилки, якщо виникнуть.
6. Викличте функцію `getImagesFromPixabay` із необхідними аргументами та
   обробіть результат.

Пам'ятайте замінити `'YOUR_PIXABAY_API_KEY'` на ваш власний API-ключ Pixabay.
