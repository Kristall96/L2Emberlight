// Wait for the page to load fully
window.addEventListener("load", function () {
  // Get the menu element
  const menu = document.querySelector(".menu");

  // Add the 'animate' class to trigger the animation
  menu.classList.add("animate");
});
window.addEventListener("load", function () {
  // Get the vertical divider element
  const verticalDivider = document.querySelector(".vertical-divider");

  // Add the 'animate' class to trigger both height and shimmer animation
  verticalDivider.classList.add("animate");
});

// Set the date for grand opening
const grandOpeningDate = new Date("November 1, 2024 00:00:00").getTime();

// Update countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = grandOpeningDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in respective elements
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over, display some message
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("grand-opening-div").innerHTML =
      "<h1>We're live!</h1>";
  }
}, 1000);

// Get elements
const sideBarLeft = document.getElementById("sideBarLeft");
const sideBarRight = document.getElementById("sideBarRight");
const openLeftBtn = document.getElementById("openLeft");
const openRightBtn = document.getElementById("openRight");

// Open/Close the Left Sidebar
openLeftBtn.addEventListener("click", () => {
  sideBarLeft.classList.toggle("open");
  openLeftBtn.innerHTML = sideBarLeft.classList.contains("open")
    ? '<i class="fa-solid fa-times"></i>' // Icon for "Close Left"
    : '<i class="fa-solid fa-play"></i>'; // Icon for "Open Left"
});

// Open/Close the Right Sidebar
openRightBtn.addEventListener("click", () => {
  sideBarRight.classList.toggle("open");
  openRightBtn.innerHTML = sideBarRight.classList.contains("open")
    ? '<i class="fa-solid fa-times"></i>' // Icon for "Close Right"
    : '<i class="fa-solid fa-play"></i>'; // Icon for "Open Right"
});

// Get elements
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnailGallery = document.querySelector(".thumbnail-gallery");

let currentImageIndex = 0;
let autoPlayInterval;

// Open the lightbox with the clicked image
galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
    startAutoPlay(); // Start autoplay when opened
  });
});

// Close the lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  stopAutoPlay(); // Stop autoplay when closed
});

// Show the previous image
prevBtn.addEventListener("click", showPrevImage);

// Show the next image
nextBtn.addEventListener("click", showNextImage);

// Function to open lightbox and show thumbnails
function openLightbox(index) {
  lightbox.style.display = "block";
  lightboxImage.src = galleryImages[index].src;
  currentImageIndex = index;
  displayThumbnails();
}

// Function to show the previous image
function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

// Function to show the next image
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

// Function to display thumbnails in the lightbox
function displayThumbnails() {
  thumbnailGallery.innerHTML = ""; // Clear previous thumbnails

  galleryImages.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.classList.add("thumbnail");
    thumbnail.addEventListener("click", () => {
      lightboxImage.src = image.src;
      currentImageIndex = index;
    });
    thumbnailGallery.appendChild(thumbnail);
  });
}

// Auto-play feature
function startAutoPlay() {
  autoPlayInterval = setInterval(showNextImage, 6000); // Change image every 3 seconds
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Get the thumbnail gallery container

// Enable horizontal scrolling with the mouse wheel
if (thumbnailGallery) {
  thumbnailGallery.addEventListener("wheel", (e) => {
    e.preventDefault();
    thumbnailGallery.scrollLeft += e.deltaY * 2; // Adjust the scroll speed multiplier
  });

  // Drag-to-scroll functionality
  let isDown = false;
  let startX;
  let scrollLeft;

  thumbnailGallery.addEventListener("mousedown", (e) => {
    isDown = true;
    thumbnailGallery.classList.add("active");
    startX = e.pageX - thumbnailGallery.offsetLeft;
    scrollLeft = thumbnailGallery.scrollLeft;
  });

  thumbnailGallery.addEventListener("mouseleave", () => {
    isDown = false;
    thumbnailGallery.classList.remove("active");
  });

  thumbnailGallery.addEventListener("mouseup", () => {
    isDown = false;
    thumbnailGallery.classList.remove("active");
  });

  thumbnailGallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - thumbnailGallery.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the scroll speed multiplier
    thumbnailGallery.scrollLeft = scrollLeft - walk;
  });
}

// Open lightbox and display image
galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  lightbox.style.display = "block";
  lightboxImage.src = galleryImages[index].src;
  currentImageIndex = index;
  displayThumbnails();
}

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next and Previous buttons in lightbox
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

// Display Thumbnails in Lightbox
function displayThumbnails() {
  thumbnailGallery.innerHTML = "";
  galleryImages.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.classList.add("thumbnail");
    thumbnail.addEventListener("click", () => {
      lightboxImage.src = image.src;
      currentImageIndex = index;
    });
    thumbnailGallery.appendChild(thumbnail);
  });
}

// Thumbnail navigation with buttons
const thumbPrevBtn = document.getElementById("thumbPrevBtn");
const thumbNextBtn = document.getElementById("thumbNextBtn");

thumbPrevBtn.addEventListener("click", () => {
  thumbnailGallery.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  });
});

thumbNextBtn.addEventListener("click", () => {
  thumbnailGallery.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  });
});

// Mouse scroll for thumbnails
thumbnailGallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  thumbnailGallery.scrollBy({
    top: 0,
    left: e.deltaY < 0 ? -200 : 200,
    behavior: "smooth",
  });
});

// Close the lightbox when the Esc key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
    stopAutoPlay(); // Stop autoplay when closed
  }
});

// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image element
var modalImg = document.getElementById("imgModal");

// Get all images in the gallery
var images = document.getElementsByClassName("gallery-img");

// Get the close button
var closeBtns = document.getElementsByClassName("close")[0];

// Loop through all images and add click event
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

// Close the modal when clicking on the "x" button
closeBtns.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside of the image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function isMobile() {
  return window.innerWidth <= 768; // Ширина за мобилни устройства
}

if (isMobile()) {
  const videoContainer = document.getElementById("top-videos");

  // Премахваме старите видеа
  videoContainer.innerHTML = `
    <h2 class="best-videos-title">Best Videos</h2>
    <div class="video-container">
      <div class="video-box">
        <video id="video1" src="/l2images/newVideoMed.mp4" poster="/l2images/208929.jpg"></video>
        <!-- Потребителски play бутон -->
        <button class="custom-play-button" id="playButton1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <!-- Потребителски pause бутон -->
        <button class="custom-pause-button" id="pauseButton1" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      </div>

      <div class="video-box">
        <video id="video2" src="/l2images/newVideoMed.mp4" poster="/l2images/123428.jpg"></video>
        <!-- Потребителски play бутон -->
        <button class="custom-play-button" id="playButton2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <!-- Потребителски pause бутон -->
        <button class="custom-pause-button" id="pauseButton2" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      </div>

      <div class="video-box">
        <video id="video3" src="/l2images/newVideoMed.mp4" poster="/l2images/104514.jpg"></video>
        <!-- Потребителски play бутон -->
        <button class="custom-play-button" id="playButton3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <!-- Потребителски pause бутон -->
        <button class="custom-pause-button" id="pauseButton3" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      </div>

      <div class="video-box">
        <video id="video4" src="/l2images/newVideoMed.mp4" poster="/l2images/208929.jpg"></video>
        <!-- Потребителски play бутон -->
        <button class="custom-play-button" id="playButton4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <!-- Потребителски pause бутон -->
        <button class="custom-pause-button" id="pauseButton4" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      </div>

      <div class="video-box">
        <video id="video5" src="/l2images/newVideoMed.mp4" poster="/l2images/90528.jpg"></video>
        <!-- Потребителски play бутон -->
        <button class="custom-play-button" id="playButton5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <!-- Потребителски pause бутон -->
        <button class="custom-pause-button" id="pauseButton5" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      </div>
    </div>
  `;

  // Добавяме JavaScript логика за play/pause бутоните
  function setupCustomControls(videoId, playButtonId, pauseButtonId) {
    const video = document.getElementById(videoId);
    const playButton = document.getElementById(playButtonId);
    const pauseButton = document.getElementById(pauseButtonId);

    playButton.addEventListener("click", function () {
      video.play();
      playButton.style.display = "none";
      pauseButton.style.display = "flex";
    });

    pauseButton.addEventListener("click", function () {
      video.pause();
      playButton.style.display = "flex";
      pauseButton.style.display = "none";
    });

    video.addEventListener("pause", function () {
      playButton.style.display = "flex";
      pauseButton.style.display = "none";
    });

    video.addEventListener("play", function () {
      playButton.style.display = "none";
      pauseButton.style.display = "flex";
    });
  }

  // Настройваме бутоните за всички 5 видеа
  setupCustomControls("video1", "playButton1", "pauseButton1");
  setupCustomControls("video2", "playButton2", "pauseButton2");
  setupCustomControls("video3", "playButton3", "pauseButton3");
  setupCustomControls("video4", "playButton4", "pauseButton4");
  setupCustomControls("video5", "playButton5", "pauseButton5");
}
