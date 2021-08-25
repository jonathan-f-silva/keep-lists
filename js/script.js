const inputItem = document.getElementById('addItem');
const keepList = document.querySelector('.list');

function addItemElement(text) {
  const itemElement = document.createElement('li');
  itemElement.innerText = text;
  keepList.appendChild(itemElement);
}

function addItem(event) {
  if (event.keyCode === 13) {
    addItemElement(event.target.value);
    event.target.value = '';
  }
}

inputItem.addEventListener('keyup', addItem)