function load(img) {
  const url = img.getAttribute("lazy-src");
  console.log("🚀 ~ load ~ url:", url)
  if(url) {
    img.setAttribute("src", url);
    img.removeAttribute("lazy-src");
  }
}

function ready() {
  const allImages = document.querySelectorAll("img[lazy-src]");
  if(allImages.length) lazyLoadImage(allImages);
}
function lazyLoadImage(imageEntries) {
  console.log("🚀 ~ file: lazy-load-image.js:14 ~ lazyLoadImage ~ imageEntries:", imageEntries);
  if(imageEntries) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("🚀 ~ entries.forEach ~ entry:", entry.isIntersecting)
        if (entry.isIntersecting) {
          load(entry.target);
        }
      });
    });
    
    imageEntries.forEach((img) => {
      observer.observe(img);
    });
  }
}

document.addEventListener("DOMContentLoaded", ready);
