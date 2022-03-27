// get slider items | Array.from [ES6 Feature]
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get number of slides
let slidesCount = sliderImages.length;

// Set current slide to begin from
let currentSlide = 1;

// Slide number element
let slideNumberElement = document.getElementById("slide-number");

// Previous and next buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create the main ul element
let paginationElement = document.createElement("ul");

// Set id on created ui element
paginationElement.setAttribute("id", "pagination-ul");

// Create list of items based on slides count
for (let i = 1; i <= slidesCount; i++) {
  // Create the li
  let paginationItem = document.createElement("li");

  // Set custom attribute
  paginationItem.setAttribute("data-index", i);

  // Set item conetent
  paginationItem.appendChild(document.createTextNode(i));

  // Append items to the main ui list
  paginationElement.appendChild(paginationItem);
}

// Add the created ul element to the page
document.getElementById("indicators").appendChild(paginationElement);

// Get the new created ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// get pagination items | Array.from [ES6 Feature]
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop through all bullets items
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// Trigger the checker function
theChecker();

// Next slide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // Do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// previous slide function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // Do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create the checker function()
function theChecker() {
  // Set the slide number
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;

  // Remove all active classes
  removeAllActive();

  // Set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set active class on current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if current slide is the first or the last
  if (currentSlide == 1) {
    // Add disabled class on previous button
    prevButton.classList.add("disabled");
  } else {
    // Remove disabled class on previous button
    prevButton.classList.remove("disabled");
  }

  // Check if current slide isthe last
  if (currentSlide == slidesCount) {
    // Add disabled class on next  button
    nextButton.classList.add("disabled");
  } else {
    // Remove disabled class on previous button
    nextButton.classList.remove("disabled");
  }
}

// Remove all active classes from images and bullets
function removeAllActive() {
  // Loop through images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  // Loop through pagination
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
