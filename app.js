const data = document.querySelector('.data');
console.log(data.dataset);
console.log(data.dataset.extraInfo);
data.dataset.extraText = 'text';
console.log(data.dataset.extraText);

// element box dimensions
const box = document.getElementById('box');
console.log(box.getBoundingClientRect());
