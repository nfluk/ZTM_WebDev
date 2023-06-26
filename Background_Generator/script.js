let btn = document.querySelector('.btn');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let h3 = document.querySelector('h3');
let direction = 'right';

btn.addEventListener('click', () => {
  if (direction === 'right') {
    direction = 'left';
    return addCodeSnippet(direction);
  }
  if (direction !== 'right') {
    direction = 'right';
    addCodeSnippet(direction);
  }
});

color1.addEventListener('input', () => {
  addCodeSnippet();
});

color2.addEventListener('input', () => {
  addCodeSnippet();
});

function addCodeSnippet(direction = 'right') {
  h3.innerText = '';
  h3.appendChild(
    document.createTextNode(
      `background: linear-gradient(to ${direction}, ${color1.value}, ${color2.value});`
    )
  );
}

console.log(h3);
console.log(color1);
console.log(color2);
console.log(direction);
