const body = document.body;

// Step 1: Create elements
const grandparentDiv = document.createElement("div");
const parentDiv1 = document.createElement("div");
const childDiv1 = document.createElement("div");
const childDiv2 = document.createElement("div");

const parentDiv2 = document.createElement("div");
const childDiv3 = document.createElement("div");
const childDiv4 = document.createElement("div");

// Step 2: Set class names
grandparentDiv.className = "grandparent";
parentDiv1.className = "parent";
childDiv1.className = "child";
childDiv2.className = "child";

parentDiv2.className = "parent";
childDiv3.className = "child";
childDiv4.className = "child";

// Step 3: Append child elements to parent elements
parentDiv1.appendChild(childDiv1);
parentDiv1.appendChild(childDiv2);

parentDiv2.appendChild(childDiv3);
parentDiv2.appendChild(childDiv4);

grandparentDiv.appendChild(parentDiv1);
grandparentDiv.appendChild(parentDiv2);

body.appendChild(grandparentDiv);

// Step 4: Apply inline styles
grandparentDiv.style.backgroundColor = "red";
grandparentDiv.style.flexDirection = "column";

parentDiv1.style.backgroundColor = "green";
parentDiv2.style.backgroundColor = "green";

childDiv1.style.backgroundColor = "blue";
childDiv2.style.backgroundColor = "blue";
childDiv3.style.backgroundColor = "blue";
childDiv4.style.backgroundColor = "blue";

// Step 5: Query selectors
const grandParent = document.querySelector(".grandparent");
const parents = document.querySelectorAll(".parent");

// Step 6: Function to change background color
const yellowMaker = (element) => {
    element.style.backgroundColor = "yellow";
}

// Step 7: Apply yellowMaker to all parent elements
parents.forEach((parent) => {
    yellowMaker(parent);
});

// Step 8: Add h1 tag with text content to grandParent
const newElement = document.createElement("h1");
newElement.textContent = "Jeg ble laget i JavaScript!";
grandParent.appendChild(newElement);

// Step 9: Add p tag with text content to each parent
const newChildElement1 = document.createElement("p");
newChildElement1.textContent = "Jeg ble også laget av JS!";
parents[0].appendChild(newChildElement1);

const newChildElement2 = document.createElement("p");
newChildElement2.textContent = "Og jeg også!";
parents[1].appendChild(newChildElement2);
