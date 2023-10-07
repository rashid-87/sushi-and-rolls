let cardAdd = document.querySelector('.row__tops')
window.addEventListener('click', (event) => {

  if (event.target.getAttribute('class') === 'row__btn') {
    const card = event.target.closest('.row__wrapp')

    const wrappCard = {
      id: card.dataset.id,
      img: card.querySelector('.row__img').getAttribute('src'),
      title: card.querySelector('.row__title').textContent,
      count: card.querySelector('[data-counter]').textContent,
      price: card.querySelector('.row__currency').textContent,
    }

    const itemCard = cardAdd.querySelector(`[data-id="${wrappCard.id}"]`)

    if (itemCard) {
      const countEl = itemCard.querySelector('[data-counter]')
      countEl.textContent = parseInt(countEl.textContent) + parseInt(wrappCard.count)
    } else {
    cardAdd.innerHTML += `
    <div class="row__top" data-id="${wrappCard.id}">
    <img class="row__images" src="${wrappCard.img}" alt="${wrappCard.title}">
    <div class="row__dest">
      <h4 class="row__lead">${wrappCard.title}</h4>
      <div class="row__weith">
        <div class="row__item">
          <div class="row__control" data-action="minus">-</div>
          <div class="row__current" data-counter="">${wrappCard.count}</div>
          <div class="row__control" data-action="plus">+</div>
        </div>
        <div class="row__curren">${wrappCard.price}</div>
      </div>
    </div>
  </div>
    `
    }
    card.querySelector('[data-counter]').textContent = '1'
    calcCard()
  }

})
