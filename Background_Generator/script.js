let btn = document.querySelector('.btn');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let h3 = document.querySelector('h3');

btn.addEventListener('click', () => {});

color1.addEventListener('click', () => {
  addCodeSnippet();
});

color2.addEventListener('click', () => {
  addCodeSnippet();
});

function addCodeSnippet() {
  h3.innerText = '';
  h3.appendChild(
    document.createTextNode(
      `background: linear-gradient(to right, ${color1.value}, ${color2.value});`
    )
  );
}
