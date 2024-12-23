// console.log("Hello world");

// alert("I HAVE ARRIVED");

const element = document.querySelector("#page-block-0 > section > div > div > div.relative.z-10.container.mx-auto.px-5.md\\:px-6.transition-all.duration-300.pt-20.lg\\:pt-48.pb-20.lg\\:pb-48 > div > div > div.flex.md\\:inline-flex.flex-col.md\\:flex-row.gap-4.w-full.md\\:w-max.mt-4");

if (element) {
  // Element was found
  console.log("Element exists! We can manipulate it safely.");
  element.style.backgroundColor = "lightgreen";
} else {
  // Element does not exist
  console.warn("Element not found. Check your selector or ensure the element is in the DOM.");
}