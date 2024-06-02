// Javascript for image slider
document.addEventListener('DOMContentLoaded', function() {
  const images = ["../images/A.jpg", "../images/R.jpg", "../images/4.jpg"];
  const find = document.getElementById("image");
  let x = 0;

  const practice = function() {
    if (x < images.length - 1) {
      x = x + 1;
    } else {
      x = 0;
    }
    find.innerHTML = "<img src='" + images[x] + "'>";
  };

  console.log(x);
  setInterval(practice, 3000);
});


// Javascript for image slider of discount offer
window.addEventListener('load', function() {
    var discountElement = document.querySelector('.discount');
    var position = 0;
    setInterval(function() {
      position -= 1;
      discountElement.style.backgroundPosition = position + 'px 0';
    }, 50);
  });


