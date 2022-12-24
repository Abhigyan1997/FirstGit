//PARENT ELEMENT
var items=document.querySelector('#items');
console.log(items.parentElement);
//LAST ELEMENTCHILD
console.log(items.lastElementChild);
//LAST CHILD
console.log(items.lastChild);
//FIRST ELEMENTCHILD
console.log(items.firstElementChild);
//FIRST CHILD
console.log(items.firstChild);
//NEXT SIBLING
console.log(items.nextSibling);
//NEXT ELEMENT SIBLING
console.log(items.nextElementSibling);
//PREVIOUS SIBLING
console.log(items.previousSibling);
//PREVIOUS ELEMENT SIBLING
console.log(items.previousElementSibling);

//CREATE ELEMENT
var newDiv=document.createElement('div');
console.log(newDiv);

//SET ATTRIBUTE
var newDiv=document.createElement('div');
newDiv.setAttribute('title','Hello world');
console.log(newDiv);

//CREATE TEXTNODE
var divTextNode=document.createTextNode('Hello Javascript');
//APPEND CHILD
newDiv.appendChild(divTextNode);

//Add HEllo word before Item Lister
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1')
console.log(newDiv);
container.insertBefore(newDiv,h1);
