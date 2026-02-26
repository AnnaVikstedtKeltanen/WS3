// Obtain element reference
let element = document.getElementsByTagName('h1')[0];

// Define function for listener
function sayHello() { 
    alert("Hello World!"); 
}

// Add listener
element.addEventListener("click", sayHello);

// Function to remove (must use same function reference)
function removeListener() {
    element.removeEventListener("click", sayHello);
    console.log("Listener removed!");
}