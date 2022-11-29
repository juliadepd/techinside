
var divMenu = document.getElementById('menu');
var hiddenMenu = document.querySelector('.hidden-menu');
var html = document.querySelector('html');
var imgOpen = document.querySelector('.img-open');
var imgX = false;

imgOpen.addEventListener('click', function (event) {
  divMenu.classList.toggle('show-menu');
  console.log('click', event.target)
  html.classList.toggle('hide-sections');
  var src = imgOpen.getAttribute('src');

  if (src == 'assets/img-menu.png') {
    imgOpen.setAttribute('src', 'assets/x3.png');
    imgX = true;
    imgOpen.style.margin = '0px'
    imgOpen.style.width = '25px'
    return;
  }

  else {
    imgOpen.setAttribute('src', 'assets/img-menu.png');
    imgX = false;
    imgOpen.style.margin = '3px 0 0 0'
    imgOpen.style.width = '30px'
  }

  console.log('depoisif', imgOpen.getAttribute('src'));
  console.log('imgX', imgX);

});

document.addEventListener('click', function (event) {

  if (event.target.matches('.navbar__itens')) {
    html.classList.remove('hide-sections');
  }

})


