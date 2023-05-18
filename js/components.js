// Define uma função para incluir o conteúdo de um arquivo HTML em um elemento
function includeHTML(element, url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      element.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

const headerElement = document.querySelector('header');
if (headerElement) {
  includeHTML(headerElement, 'components/header.html');
}

const formElement = document.querySelector('#form-section');
if (formElement) {
  includeHTML(formElement, 'components/form-section.html');
}

const resultsElement = document.querySelector('#results-section');
if (resultsElement) {
  includeHTML(resultsElement, 'components/results-section.html');
}

const cardsElement = document.querySelector('#cards-section');
if (cardsElement) {
  includeHTML(cardsElement, 'components/cards-section.html');
}

const accountElement = document.querySelector('#account-section');
if (accountElement) {
  includeHTML(accountElement, 'components/account-section.html');
}

const videoElement = document.querySelector('#video-section');
if (videoElement) {
  includeHTML(videoElement, 'components/video-section.html');
}

const toolsElement = document.querySelector('#tools-section');
if (toolsElement) {
  includeHTML(toolsElement, 'components/tools-section.html');
}

const footerElement = document.querySelector('footer');
if (footerElement) {
  includeHTML(footerElement, 'components/footer.html');
}

const toastElement = document.querySelector('#info-toast');
if (toastElement) {
  includeHTML(toastElement, 'components/toast.html');
}
