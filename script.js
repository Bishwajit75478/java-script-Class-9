//
//(1) GetElementBy ID Method
const id1 = document.getElementById("id1");
// console.log(id1);

console.log(id1.innerHTML);

id1.innerHTML = "java script text";
document.getElementById("id1").innerHTML = " new java script text";

//
// (2) get Elementby tagname methood
const tag1 = document.getElementsByTagName("h1")[0];
console.log(tag1.innerHTML);
tag1.innerText = "javascript  header two";

//
//(3) get Element by class name method
const class1 = document.getElementsByClassName("class1")[0];
console.log(class1.innerHTML);
class1.innerText = "java script text!";

//
// (4) dom element style
const id1 = document.getElementById("id1");
console.log(id1.innerText);
id1.style.color = "red";
id1.style.backgroundColor = "pink";
id1.style.fontSize = "40px";

//
/// (5) dom ELEMENT ATTRIBUTES
const id1 = document.getElementById("id1");
console.log(id1.innerText);
console.log(id1.attributes);
console.log(id1.attributes.length);

//
// (6) getAttribute
const id1 = document.getElementById("id1");
console.log(id1.innerText);
console.log(id1.getAttribute("class"));
console.log(id1.getAttribute("id"));

//
// (7) remove Attribute
const id1 = document.getElementById("id1");
console.log(id1.innerText);
id1.removeAttribute("class");

//
// (8) set Attribute
const id2 = document.getElementById("id2");
console.log(id2.innerText);

id2.setAttribute("class", "class2");
