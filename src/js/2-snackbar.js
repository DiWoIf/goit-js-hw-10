import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;

  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  createPromise(delay, state)
    .then(d => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${d}ms`,
        position: 'topRight',
      });
    })
    .catch(d => {
      iziToast.error({
        message: `❌ Rejected promise in ${d}ms`,
        position: 'topRight',
      });
    });
  event.currentTarget.reset();
});
