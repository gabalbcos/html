//creating the container selector
const CONTAINER = document.querySelector('#container');

//Adding new Div
const DIV2 = document.createElement('div');
//adding a class atribute
DIV2.classList.add('content');
DIV2.textContent = 'String inside the div';

//append to container
CONTAINER.appendChild(DIV2);

//CREATE P ELEMENT
const P_CONTENT = document.createElement('p');
//adding class atribute to turn it red
P_CONTENT.classList.add('redColor');
P_CONTENT.textContent = "I'm a red text!";

//append to container
CONTAINER.appendChild(P_CONTENT)

//Create div with h2 element inside
const DIV3 = document.createElement('div');
DIV3.classList.add('content');

const H3 = document.createElement('h3');
H3.classList.add('blueColor');
H3.textContent = "I'm blue and inside a DIV"
DIV3.appendChild(H3)




CONTAINER.appendChild(DIV3);