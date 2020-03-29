const data = document.querySelector('.data');
console.log(data.dataset);
console.log(data.dataset.extraInfo);
data.dataset.extraText = 'text';
console.log(data.dataset.extraText);

// element box dimensions
const box = document.getElementById('box');
console.log(box.getBoundingClientRect());

// element sizes and positions
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(document.documentElement.offsetWidth);
console.log(document.documentElement.offsetHeight);
console.log(box.offsetTop);
console.log(box.offsetLeft);
console.log(box.clientTop);
console.log(box.clientLeft);
console.log(box.offsetWidth);
console.log(box.offsetHeight);
console.log(box.clientWidth);
console.log(box.clientHeight);
console.log(box.scrollHeight);
console.log(box.scrollTop);

// scrolling
box.scrollTo(0, 20);
box.scrollBy(0, 40);
box.scrollIntoView({ behavior: 'smooth' });
