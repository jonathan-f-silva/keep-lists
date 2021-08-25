const inputItem = document.getElementById('addItem');
const keepList = document.querySelector('.list');

function createCustomElement(tag, className = '', innerText = '') {
  const element = document.createElement(tag);
  element.className = className;
  element.innerText = innerText;
  return element;
}

function addItemElement(text) {
  const itemElement = createCustomElement('li', 'item');
  const textElement = createCustomElement('span', 'item-text', text);
  const clearButton = createCustomElement('button', 'remove-item-btn', 'x');
  clearButton.addEventListener('click', (ev) => ev.target.parentElement.remove());
  itemElement.appendChild(textElement);
  itemElement.appendChild(clearButton);
  keepList.appendChild(itemElement);
}

function addItem(event) {
  if (event.keyCode === 13) {
    addItemElement(event.target.value);
    event.target.value = '';
  }
}

inputItem.addEventListener('keyup', addItem)