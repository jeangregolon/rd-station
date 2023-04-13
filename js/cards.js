const cardsData = [
  {
    title: 'Torne sua operação de Marketing Digital mais produtiva',
    description:
      'Chega de usar várias ferramentas separadas e perder as informações no caminho! Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de Marketing Digital em um só lugar para sua operação ser mais eficaz.',
    image: '/assets/chart-line.svg',
  },
  {
    title: 'Crie facilmente campanhas que funcionam',
    description:
      'É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas poderosas, e contam com dezenas de modelos — como de Landing Pages, Pop-ups, emails — para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.',
    image: '/assets/bullhorn.svg',
  },
  {
    title: 'Construa jornadas personalizadas e gere vendas em escala',
    description:
      'Envie a mensagem certa na hora certa e construa jornadas personalizadas que geram até 5x mais conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade de Marketing e Vendas.',
    image: '/assets/chart-network.svg',
  },
  {
    title: 'Encontre automaticamente as melhores oportunidades',
    description:
      'Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários. Defina critérios para identificar automaticamente Leads com maior potencial de compra e envie para o comercial oportunidades qualificadas.',
    image: '/assets/star.svg',
  },
  {
    title: 'Saia da incerteza e comprove resultados',
    description:
      'Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing Digital traz mais vendas e clientes.',
    image: '/assets/chart-pie.svg',
  },
  {
    title: 'Suporte ágil e na sua língua',
    description:
      'Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97% entre nossos clientes e um tempo médio de resolução de 6 horas. E o melhor: tudo isso em português.',
    image: '/assets/globe.svg',
  },
];

function renderCards() {
  const cardsContainer = document.getElementById('cards');
  if (
    cardsContainer &&
    (cardsContainer.offsetWidth > 0 || cardsContainer.offsetHeight > 0)
  ) {
    const sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add('slider-wrapper');
    cardsContainer.appendChild(sliderWrapper);

    const slider = document.createElement('div');
    slider.classList.add('slider');
    sliderWrapper.appendChild(slider);

    for (let i = 0; i < cardsData.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');

      const imageBg = document.createElement('div');
      imageBg.classList.add('image-bg');
      card.appendChild(imageBg);

      const cardImage = document.createElement('img');
      cardImage.src = cardsData[i].image;
      imageBg.appendChild(cardImage);

      const cardTitle = document.createElement('h2');
      cardTitle.textContent = cardsData[i].title;
      card.appendChild(cardTitle);

      const cardDescription = document.createElement('p');
      cardDescription.textContent = cardsData[i].description;
      card.appendChild(cardDescription);

      slider.appendChild(card);
    }

    const sliderDots = document.createElement('div');
    sliderDots.classList.add('slider-dots');
    sliderWrapper.appendChild(sliderDots);

    const dotsContainer = document.querySelector('.slider-dots');
    const cards = document.querySelectorAll('.card');

    let currentCard = 0;

    // Adiciona as bolinhas correspondentes ao número de cards
    for (let i = 0; i < cards.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('slider-dot');
      if (i === currentCard) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        changeCard(i);
      });
      dotsContainer.appendChild(dot);
    }
    // Função para alterar o card atual e a bolinha correspondente
    function changeCard(index) {
      cards[currentCard].classList.remove('active');
      dotsContainer.children[currentCard].classList.remove('active');
      currentCard = index;
      cards[currentCard].classList.add('active');
      dotsContainer.children[currentCard].classList.add('active');
      cards[currentCard].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  } else {
    window.requestAnimationFrame(renderCards);
  }
}

renderCards();
