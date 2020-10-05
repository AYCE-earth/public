const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: false,
  autoplay: false
})
.add({
  translateX: [
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => anime.random(-35, 35),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(8, {from: 'last'})
})


staggersAnimation.play();
