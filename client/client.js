const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = "http://localhost:5000/tweets";

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');

  const tweet = {
    name,
    content
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tweet)
  }

  form.style.display = 'none';
  loadingElement.style.display = '';


  fetch(API_URL, options);
});
