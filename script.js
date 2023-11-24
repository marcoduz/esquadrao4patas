/*let count = 1
document.getElementById('r1').checked = true

setInterval(function () {
  nextImage()
}, 2000)

function nextImage() {
  count++
  if (count > 4) {
    count = 1
  }

  document.getElementById('r' + count).checked = true
}*/
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  let intervalId;

  function showCards() {
      const cards = carousel.querySelectorAll('.card');
      for (let i = 0; i < cards.length; i++) {
          cards[i].style.display = 'none';
      }

      for (let i = 0; i < 3; i++) {
          const index = (currentIndex + i) % cards.length;
          cards[index].style.display = 'block';
      }
      
  }

  function nextCard() {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      showCards();
  }

  function startAutoPlay() {
      intervalId = setInterval(nextCard, 3000); // Troque 3000 por qualquer intervalo desejado em milissegundos (3 segundos neste exemplo)
  }

  function stopAutoPlay() {
      clearInterval(intervalId);
  }

  nextBtn.addEventListener('click', function () {
      nextCard();
      stopAutoPlay();
  });

  prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      showCards();
      stopAutoPlay();
  });

  // Iniciar a reprodução automática quando a página carregar
  startAutoPlay();

  // Pausar a reprodução automática quando o mouse entrar no carrossel
  carousel.addEventListener('mouseenter', stopAutoPlay);

  // Retomar a reprodução automática quando o mouse sair do carrossel
  carousel.addEventListener('mouseleave', startAutoPlay);

  // Mostrar os cartões iniciais
  showCards();
});



function exibeMenu(){
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'block'? 'none' : 'block');
}