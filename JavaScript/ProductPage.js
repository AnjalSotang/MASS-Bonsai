// JS for image slider for dicounted offer
window.addEventListener('load', function() {
    var discountElement = document.querySelector('.specialOffer');
    var position = 0;
    setInterval(function() {
      position -= 1;
      discountElement.style.backgroundPosition = position + 'px 0';
    }, 50);
  });


  