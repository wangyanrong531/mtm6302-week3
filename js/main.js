//accessing document property.

console.log(document.title)

//Finding an element by id
const infoPara=document.getElementById("info")
//document.getElementById  没有空格，是一体的

console.log(infoPara)
console.dir(infoPara)  //if console.log ()shows us the string  version of the object we can use console.dir()method.

// addition assignment to the textContent proporty of infoPara.
infoPara.textContent+="Riley"

//finding an element using CSS selector 
let container=document.querySelector(".container")
console.log(container)

//using style object of an element
container.style.maxWidth="800px"
container.style.margin="0 auto"

//finding all the elements using CSS selector
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

//accessing the element on second position and setting its style.background
allNodes[1].style.background="cyan"

for(let eachNode of allNodes){

    // console.log(eachNode.textContent) looping through the allNodes array and assigning style.border to each items.                  
    eachNode.style.border="1px solid black"
} 


//traversing the DOM  */

//finding the element by ID
const mainNodes=document.getElementById("threeNodes")
console.log(mainNodes)

//accessing the children property of the mainNodes variable.
const listOfNodes =mainNodes.children

//selecting the second item and setting its styles
listOfNodes[1].style.margin="18px 0"

const firstNode = mainNodes.firstElementChild
console.log(firstNode.textContent)

//attibute methods 
const learnMore=document.getElementById("learn")

//getting attibute value
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

//getting attibute value that is a property like id by using the property name
console.log(learnMore.id)

//setting attribute value
learnMore.setAttribute("target","_blank")


//adding a class using classlist
learnMore.classList.add("btn")


//element.classList.name// 公式 

const fakeConsole = document.getElementById("box")
console.log(fakeConsole)
fakeConsole.setAttribute("style",`
background-color: powderblue;
padding:10px;
border: 1px solid black;`)

fakeConsole.innerHTML +="<p>This is a fakeconsole, where we can output our information</p>"

fakeConsole.innerHTML += "the above URL is" +learnMore.getAttribute("href")
fakeConsole.innerHTML +="<br>"+ document.URL