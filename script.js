//console.log('Hello!');

let bubbles = document.querySelector('.bubbles');
let bubbleCount = 60;
let i = 0;

while (i < bubbleCount) {
  let bubble = document.createElement('div');
  let size = Math.floor(Math.random() * 200) + 100;
  let top = Math.floor(Math.random() * window.innerHeight);
  let left = Math.floor(Math.random() * window.innerWidth);

  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.top = top + 'px';
  bubble.style.left = left + 'px';
  bubbles.appendChild(bubble);

  i++;
}
