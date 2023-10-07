function calcCard() {
  const rowTabs = document.querySelectorAll('.row__curren')
  const priceElem = document.querySelector('.row__total')

    
  let totalPrice = 0

  rowTabs.forEach((item) => {
    const countElem = item.closest('.row__top').querySelector('[data-counter]')
    totalPrice += parseInt(item.textContent) * parseInt(countElem.textContent)
  })
  priceElem.textContent = totalPrice
}
