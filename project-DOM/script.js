var galeri = document.querySelector('.galeri');
var utama = document.querySelector('.utama');

galeri.addEventListener('click',function(e) {
  if (e.target.className == 'thumb') {
    utama.src = e.target.src;
    utama.classList.add('fading');

    setTimeout(function() {
      utama.classList.remove('fading');
    }, 100)
  }
})
