// var element = document.createElement("h2")

// var newText = document.createTextNode("This is jsut a simple text node.")

// var newComment = document.createComment("This is comment")
// console.log(newComment)

// element.appendChild(newText)

// document.getElementById("test").appendChild(element)

// target.insertBefore(element,target.childNodes[0])
// Insert adjacent Element
var target = document.getElementById("test");

var newElement = "<h1>This is heading </h1>";

target.insertAdjacentHTML("beforeend",newElement)
// console.log(newText)
console.log(newElement)