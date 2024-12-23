// console.log("Hello world");

// alert("I HAVE ARRIVED");

const new_element = document.querySelector("#\\36 7668b4cb39ca82afeff4e37 > div > div.relative.z-10.container.mx-auto.px-5.md\\:px-6.transition-all.duration-300.pt-20.lg\\:pt-48.pb-20.lg\\:pb-48 > div > div > div.flex.md\\:inline-flex.flex-col.md\\:flex-row.gap-4.w-full.md\\:w-max.mt-4")
if (new_element) {
  // Element was found
  console.log("Element exists! We can manipulate it safely.");
//   new_element.style.backgroundColor = "lightgreen";
  new_element.classList.remove('flex-col');
  new_element.classList.add('flex-row');
} else {
  // Element does not exist
  console.warn("Element not found. Check your selector or ensure the element is in the DOM.");
}

const element_blog = document.querySelector("#page-block-0 > section > div.relative.z-10.container.mx-auto.px-5.md\\:px-6.py-12.lg\\:py-14.xl\\:py-20 > div.flex.flex-col.md\\:flex-row.md\\:items-center.md\\:justify-between.gap-3.lg\\:gap-4.mb-4.lg\\:mb-6 > h2")

if (element_blog) {
    // Element was found
    console.log("Element exists! We can manipulate it safely.");
  //   new_element.style.backgroundColor = "lightgreen";
    element_blog.textContent = "Events"
  } else {
    // Element does not exist
    console.warn("Element not found. Check your selector or ensure the element is in the DOM.");
  }

  window.addEventListener("pageshow", function(event) {
    // If true, the page is coming from the back-forward cache
    if (event.persisted) {
      window.location.reload();
    }
  });