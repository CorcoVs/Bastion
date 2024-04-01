// Splitting the text into an array of characters
let currentServiceIndex = 0;
// Array of services to cycle through
const services = [
  "design",
  "create",
  "market",
  "visualize",
  "develop",
  "deliver",
  "innovate",
  "grow",
  "benchmark",
  "optimize",
  "reinvent",
  "explore",
  "transform",
];

const txtArr = services[currentServiceIndex].split("");

// Index to keep track of the current service being displayed

// Function to generate a random time delay
function getRandomTime() {
  return Math.random() * 0.5;
}

// Function to get an HTML element by its ID
function getEle(id) {
  return document.getElementById(id);
}

// Function to modify the text content of an HTML element
function modifyTxt(el, txt) {
  el.innerHTML = txt;
}

// Function to write out the text character by character
function writeOut(txtArr, curChar = 0) {
  const randomTime = getRandomTime();
  const el = getEle("text");

  setTimeout(() => {
    const elTxt = el.innerHTML + txtArr[curChar];
    modifyTxt(el, elTxt);

    if (curChar + 1 === services[currentServiceIndex].length) {
      setTimeout(() => {
        deleteService(); // Change here
      }, 4000);
      return;
    }

    return writeOut(txtArr, curChar + 1);
  }, randomTime * 800);
}

// Function to delete the text character by character
function deleteService(curChar = services[currentServiceIndex].length - 1) {
  // Generate a random time delay for a more natural deletion effect
  const randomTime = getRandomTime();

  setTimeout(() => {
    // Get the HTML element with the ID "text"
    const el = getEle("text");

    // Remove the last character from the current text
    const newElTxt = el.innerHTML.slice(0, -1);

    // Update the text content of the element
    modifyTxt(el, newElTxt);

    // Check if all characters are deleted
    if (curChar < 0) {
      // Move to the next service in the array
      currentServiceIndex = (currentServiceIndex + 1) % services.length;
      //call writeOut with the current service
      return writeOut(services[currentServiceIndex].split(""), 0);
    }

    // Continue deleting characters
    return deleteService(curChar - 1);
  }, randomTime * 700);
}

// Start the initial animation by writing out the text
writeOut(txtArr);
