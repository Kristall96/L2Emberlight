window.addEventListener("load", function () {
  // Get the menu element and vertical divider
  const menu = document.querySelector(".menu");
  const verticalDivider = document.querySelector(".vertical-divider");

  // Add the 'animate' class to trigger animation
  if (menu) menu.classList.add("animate");
  if (verticalDivider) verticalDivider.classList.add("animate");
});

// Sidebar toggle functionality
const sideBarLeft = document.getElementById("sideBarLeft");
const sideBarRight = document.getElementById("sideBarRight");
const openLeftBtn = document.getElementById("openLeft");
const openRightBtn = document.getElementById("openRight");

if (openLeftBtn && sideBarLeft) {
  openLeftBtn.addEventListener("click", () => {
    sideBarLeft.classList.toggle("open");
    openLeftBtn.innerHTML = sideBarLeft.classList.contains("open")
      ? '<i class="fa-solid fa-times"></i>'
      : '<i class="fa-solid fa-play"></i>';
  });
}

if (openRightBtn && sideBarRight) {
  openRightBtn.addEventListener("click", () => {
    sideBarRight.classList.toggle("open");
    openRightBtn.innerHTML = sideBarRight.classList.contains("open")
      ? '<i class="fa-solid fa-times"></i>'
      : '<i class="fa-solid fa-play"></i>';
  });
}

// Lightbox and Gallery Functionality
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnailGallery = document.querySelector(".thumbnail-gallery");
let currentImageIndex = 0;
let autoPlayInterval;

// Function to open lightbox
function openLightbox(index) {
  lightbox.style.display = "block";
  lightboxImage.src = galleryImages[index].src;
  currentImageIndex = index;
  displayThumbnails();
}

// Show the previous image
function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

// Show the next image
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  lightboxImage.src = galleryImages[currentImageIndex].src;
}

// Function to display thumbnails
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

// Auto-play feature
function startAutoPlay() {
  autoPlayInterval = setInterval(showNextImage, 6000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Lightbox Event Listeners
galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
    startAutoPlay();
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  stopAutoPlay();
});

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

// Thumbnail scrolling
const thumbPrevBtn = document.getElementById("thumbPrevBtn");
const thumbNextBtn = document.getElementById("thumbNextBtn");

thumbPrevBtn.addEventListener("click", () => {
  thumbnailGallery.scrollBy({ left: -200, behavior: "smooth" });
});

thumbNextBtn.addEventListener("click", () => {
  thumbnailGallery.scrollBy({ left: 200, behavior: "smooth" });
});

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
    stopAutoPlay();
  }
});
const imageGallery_galleryImages = document.querySelectorAll(
  ".imageGallery_galleryImg"
);
const imageGallery_lightboxModal = document.getElementById(
  "imageGallery_lightboxModal"
);
const imageGallery_lightboxImage = document.getElementById(
  "imageGallery_lightboxImage"
);
const imageGallery_closeBtn = document.querySelector(".imageGallery_close");
const imageGallery_prevBtn = document.getElementById("imageGallery_prevBtn");
const imageGallery_nextBtn = document.getElementById("imageGallery_nextBtn");
const imageGallery_thumbnailGallery = document.querySelector(
  ".imageGallery_thumbnailGallery"
);
let imageGallery_currentImageIndex = 0;

// Function to open lightbox
function imageGallery_openLightbox(index) {
  imageGallery_lightboxModal.style.display = "block";
  imageGallery_lightboxImage.src = imageGallery_galleryImages[index].src;
  imageGallery_currentImageIndex = index;
  imageGallery_displayThumbnails();
}

// Show the previous image
function imageGallery_showPrevImage() {
  imageGallery_currentImageIndex =
    (imageGallery_currentImageIndex - 1 + imageGallery_galleryImages.length) %
    imageGallery_galleryImages.length;
  imageGallery_lightboxImage.src =
    imageGallery_galleryImages[imageGallery_currentImageIndex].src;
}

// Show the next image
function imageGallery_showNextImage() {
  imageGallery_currentImageIndex =
    (imageGallery_currentImageIndex + 1) % imageGallery_galleryImages.length;
  imageGallery_lightboxImage.src =
    imageGallery_galleryImages[imageGallery_currentImageIndex].src;
}

// Function to display thumbnails
function imageGallery_displayThumbnails() {
  imageGallery_thumbnailGallery.innerHTML = "";
  imageGallery_galleryImages.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.classList.add("imageGallery_thumbnail");
    thumbnail.addEventListener("click", () => {
      imageGallery_lightboxImage.src = image.src;
      imageGallery_currentImageIndex = index;
    });
    imageGallery_thumbnailGallery.appendChild(thumbnail);
  });
}

// Auto-play feature (optional)
let imageGallery_autoPlayInterval;
function imageGallery_startAutoPlay() {
  imageGallery_autoPlayInterval = setInterval(imageGallery_showNextImage, 6000);
}

function imageGallery_stopAutoPlay() {
  clearInterval(imageGallery_autoPlayInterval);
}

// Lightbox Event Listeners
imageGallery_galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    imageGallery_openLightbox(index);
    imageGallery_startAutoPlay();
  });
});

imageGallery_closeBtn.addEventListener("click", () => {
  imageGallery_lightboxModal.style.display = "none";
  imageGallery_stopAutoPlay();
});

imageGallery_prevBtn.addEventListener("click", imageGallery_showPrevImage);
imageGallery_nextBtn.addEventListener("click", imageGallery_showNextImage);

// Close lightbox with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    imageGallery_lightboxModal.style.display = "none";
    imageGallery_stopAutoPlay();
  }
});
// Function to check screen width and replace footer text
function updateFooterTextForMobile() {
  const footerText = document.getElementById("footer-text");

  // Check if the screen width is less than or equal to 768px
  if (window.innerWidth <= 1080) {
    footerText.innerHTML = "&copy; 2024 Emberlight | 2024"; // Modify text for mobile
  }
}

// Run on initial load
updateFooterTextForMobile();

// Listen for window resize to handle dynamic screen size changes
window.addEventListener("resize", updateFooterTextForMobile);
let countdownInterval;

// Function to handle text update for mobile and tablet sizes
function handleTextUpdate(days, hours, minutes, seconds) {
  const screenWidth = window.innerWidth;
  const openingText = document.getElementById("grand-opening-date");

  if (screenWidth <= 800) {
    if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) {
      openingText.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds left`;
    } else {
      openingText.innerHTML = "The event has started!";
    }
  }
}

// Function to remove the last two videos for tablets
function removeLastTwoVideos() {
  if (window.innerWidth >= 768 && window.innerWidth <= 1080) {
    const videoContainers = document.querySelectorAll(
      ".video-container, .video-container2"
    );
    videoContainers.forEach((container) => {
      const videos = container.querySelectorAll(".video-box");
      if (videos.length > 3) {
        videos[videos.length - 1].style.display = "none"; // Hide the last video
        videos[videos.length - 2].style.display = "none"; // Hide the second last video
      }
    });
  } else {
    // Show all videos when the screen is outside the range
    const videoContainers = document.querySelectorAll(
      ".video-container, .video-container2"
    );
    videoContainers.forEach((container) => {
      const videos = container.querySelectorAll(".video-box");
      videos.forEach((video) => {
        video.style.display = "block"; // Show all videos
      });
    });
  }
}

// Start the countdown on page load
window.addEventListener("load", () => {
  startCountdown(); // Start the countdown
  removeLastTwoVideos(); // Hide the last two videos on appropriate screen sizes
});

// Recheck on window resize for both the countdown text and video hiding
window.addEventListener("resize", () => {
  removeLastTwoVideos(); // Check video hiding on resize
  handleTextUpdate(); // Re-check for text update on resize
});

const audioPlayer = document.getElementById("audio-player");

// Attempt to play audio on page load
window.addEventListener("load", () => {
  audioPlayer
    .play()
    .then(() => {
      console.log("Audio autoplayed successfully.");
    })
    .catch((error) => {
      console.log("Autoplay prevented. Waiting for user interaction.");
    });
});

// Mute/unmute functionality
function toggleMute() {
  audioPlayer.muted = !audioPlayer.muted;
  document.querySelector("button").innerText = audioPlayer.muted
    ? "Unmute"
    : "Mute";
}
