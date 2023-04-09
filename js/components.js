// Define uma função para incluir o conteúdo de um arquivo HTML em um elemento
function includeHTML(element, url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      element.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// Inclui o componente de cabeçalho
const headerElement = document.querySelector("header");
if (headerElement) {
  includeHTML(headerElement, "components/header.html");
}

// Inclui o componente de recursos
const featuresElement = document.querySelector("#features");
if (featuresElement) {
  includeHTML(featuresElement, "components/features.html");
}

// Inclui o componente de preços
const pricingElement = document.querySelector("#pricing");
if (pricingElement) {
  includeHTML(pricingElement, "components/pricing.html");
}

// Inclui o componente de rodapé
const footerElement = document.querySelector("footer");
if (footerElement) {
  includeHTML(footerElement, "components/footer.html");
}
