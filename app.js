(function () {
  const steps = [
      document.getElementById('step-1'),
      document.getElementById('step-2'),
      document.getElementById('step-3'),
    ],
    logos = document.querySelectorAll('.logo-image'),
    productName = document.querySelector('.product-name'),
    payButton = document.querySelector('.pay-button'),
    cancelButton = document.querySelector('.cancel-button'),
    drinkContainer = document.getElementById('drink-container');

  function showStep(step) {
    steps.forEach((value, index) => {
      value.style.display = index + 1 == step ? 'block' : 'none';
    });
  }

  //Etape 2
  logos.forEach((logo) => {
    logo.addEventListener('click', () => {
      const brandName = logo.attributes['data-value'].value;
      const shelf = document.getElementById(brandName);
      if (shelf.childElementCount == 1) {
        alert('Product is no longer available! Reload your page please!');
      } else {
        showStep(2);
        productName.textContent = logo.attributes['data-value'].value;
      }
    });
  });

  //Etape 3
  payButton.addEventListener('click', function () {
    if (drinkContainer.childNodes.length == 0) {
      showStep(3);
      const brandName = productName.textContent;
      const bottles = document.querySelectorAll(`#${brandName} .drink-image`);
      drinkContainer.appendChild(bottles[0]);
    } else {
      alert('Please take your drink first!');
    }

    const bottleToRemove = drinkContainer.children[0];
    bottleToRemove.addEventListener('click', function () {
      bottleToRemove.remove();
      showStep(1);
    });
  });

  // Etape 3.2
  cancelButton.addEventListener('click', function () {
    showStep(1);
  });
})();
