const toolsData = [
  {
    title: 'RD Station CRM',
    image: '/assets/rd-station-crm.svg',
  },
  {
    title: 'Salesforce',
    image: '/assets/salesforce.svg',
  },
  {
    title: 'Google',
    image: '/assets/google.svg',
  },
  {
    title: 'Facebook',
    image: '/assets/facebook.svg',
  },
  {
    title: 'LinkedIn',
    image: '/assets/linkedin.svg',
  },
  {
    title: 'Wordpress',
    image: '/assets/wordpress.svg',
  },
  {
    title: 'Hotmart',
    image: '/assets/hotmart.svg',
  },
  {
    title: 'PagSeguro',
    image: '/assets/pagseguro.svg',
  },
  {
    title: 'Shopify',
    image: '/assets/shopify.svg',
  },
  {
    title: 'Zapier',
    image: '/assets/zapier.svg',
  },
];

function renderTools() {
  const toolsContainer = document.getElementById('tools');
  if (
    toolsContainer &&
    (toolsContainer.offsetWidth > 0 || toolsContainer.offsetHeight > 0)
  ) {
    for (let i = 0; i < toolsData.length; i++) {
      const tool = document.createElement('div');
      tool.classList.add('tool');

      const toolImage = document.createElement('img');
      toolImage.src = toolsData[i].image;
      tool.appendChild(toolImage);

      const toolTitle = document.createElement('h2');
      toolTitle.textContent = toolsData[i].title;
      tool.appendChild(toolTitle);

      toolsContainer.appendChild(tool);
    }
  } else {
    window.requestAnimationFrame(renderTools);
  }
}

renderTools();
