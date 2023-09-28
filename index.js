// Add content class
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// add red paragraph
const redParagraph = document.createElement('p');
redParagraph.style.color = 'red';
redParagraph.textContent = 'Hey I\'m red!';
container.appendChild(redParagraph);

// add blue header
const blueHeader = document.createElement('h3');
blueHeader.style.color = 'blue';
blueHeader.textContent = 'I\'m a blue h3!';
container.appendChild(blueHeader);

// add div with black border and pink background
const blackPinkDiv = document.createElement('div');
blackPinkDiv.style.backgroundColor = 'pink';
blackPinkDiv.style.border = 'black';

    // add h1 inside blackPinkDiv
    const h1Div = document.createElement('h1');
    h1Div.textContent = 'I\'m in a div';
    blackPinkDiv.appendChild(h1Div);
    
    // add para inside blackPinkDiv
    const paraDiv = document.createElement('p');
    paraDiv.textContent = 'Me too!';
    blackPinkDiv.appendChild(paraDiv);

container.appendChild(blackPinkDiv);