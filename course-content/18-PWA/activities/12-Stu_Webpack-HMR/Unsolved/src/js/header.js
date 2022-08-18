export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'blue') {
    header.style.color = 'black';
  } else {
    header.style.color = 'blue';
  }
};
if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.error('Cannot apply HMR update.', err);
    }
  });
}
// TODO: Try changing the 'blue' to 'orange' to see if hot reloading works