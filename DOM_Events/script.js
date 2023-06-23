let ul = document.querySelector('ul');
let input = document.getElementById('userinput');
let btn = document.querySelector('#btn');
let li = document.querySelectorAll('li');

function addToList() {
  if (input.value.trim().length != 0) {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let button = document.createElement('button');
    let text = document.createTextNode(capFirst(input.value));

    button.addEventListener('click', (e) => e.target.parentNode.remove()); // deletes the parent node of the button which is the div
    button.appendChild(document.createTextNode('Delete'));

    div.appendChild(li);
    div.appendChild(button);

    li.addEventListener('click', toggleDone);
    li.appendChild(text); // append a child to the li (the text is a child of the li)

    ul.appendChild(div);

    input.value = '';
  }

  input.value = '';
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addToList();
  }
});

btn.addEventListener('click', () => {
  addToList();
});

function capFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// toggle done class if there or add a done class if not there
function toggleDone(event) {
  let item = event.target;
  if (item.classList.contains('done')) {
    return item.classList.toggle('done');
  }
  return item.classList.add('done');
}
