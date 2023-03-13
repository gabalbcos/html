const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const content2 = document.createElement('p');
content2.classList.add('redColor')
content2.textContent = `Hey, i\'m red!`

container.appendChild(content2);

const content3 = document.createElement('h3');
content3.classList.add('blueColor')
content3.textContent = `Hey, i'm blue!`

container.appendChild(content3);

//make new div
const content4 = document.createElement('div');
content.classList.add('content4');
container.appendChild(content4);

const thatH1 = document.createElement('h1');
thatH1.classList.add('redColor')
thatH1.textContent = `I'm in the div!`

content4.appendChild(thatH1)

const thatP = document.createElement('p');
thatP.classList.add('blueColor')
thatP.textContent = `Me too!`



