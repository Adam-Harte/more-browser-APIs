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

// template tags
const template = document.getElementById('template');
const target = document.getElementById('target');
const templateNodes = document.importNode(template.content, true);
target.append(templateNodes);
console.log(template.content);

// loadng scripts dynamically
const analytics = document.createElement('script');
analytics.src = 'analytcis.js';
analytics.defer = true;

document.getElementById('analytics-btn').addEventListener('click', () => {
	document.head.append(analytics);
});

// timeouts and intervals
const timeout = setTimeout(() => {
	console.log('timeout!');
}, 3000);

const interval = setInterval(() => {
	console.log('interval!');
}, 5000);

console.log(timeout);
console.log(interval);

setTimeout(() => {
	clearTimeout(timeout);
	clearInterval(interval);
}, 15000);

// location and history
console.log(location);
console.log(history);

// navigator
console.log(navigator);
console.log(navigator.userAgent);

// Date
const date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

const date2 = new Date('21/11/89');
console.log(date2);
