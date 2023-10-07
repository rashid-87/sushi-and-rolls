window.addEventListener('click', (e) => {
  let counter;
  if (e.target.dataset.action === 'minus' || e.target.dataset.action === 'plus') {
    const wrapper = e.target.closest('.row__item')
    counter = wrapper.querySelector('[data-counter]')
  }

  if (e.target.dataset.action === 'minus') {
    if (parseInt(counter.textContent) > 1) {
      counter.textContent --;
    } else if (e.target.closest('.row__tops') && parseInt(counter.textContent) === 1) {
      e.target.closest('.row__top').remove()
      calcCard()
    }
  }

  if (e.target.hasAttribute('data-action') && e.target.closest('.row__top')) {
    calcCard()
  }

  if (e.target.dataset.action === 'plus') {
    if (parseInt(counter.textContent) < 10) {
      counter.textContent ++;
      calcCard()
    } else {
      alert('Больше 10 roll добавить нельзя')
    }
  }
   
})
