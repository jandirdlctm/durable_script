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
    element_blog.textContent = "Upcoming Events"
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

// CODE TO RELOAD PAGE EVERYTIME WE HIT THE LOGO BUTTON
var logo_link = document.querySelector("#website-header > div > div.col-span-2.lg\\:col-span-1 > a")
logo_link.addEventListener('click', function(event) {
// Prevent the browser from using the current href
event.preventDefault();

// Force navigation to the same URL every time
window.location.href = 'https://thebeardedagents.durablesites.com/';
});

const about_us_button = document.querySelector("#\\36 766912daa11ffe6a93f4745 > div.relative.z-10.container.mx-auto.pt-8.lg\\:pt-12.pb-8.lg\\:pb-12 > div > div.flex-1.flex.flex-col.max-w-240.items-start > button")
if (about_us_button) {
  // Element was found
  console.log("Element exists! We can manipulate it safely.");
//   new_element.style.backgroundColor = "lightgreen";
  about_us_button.classList.remove('w-full');
  about_us_button.classList.add('w-32');
} else {
  // Element does not exist
  console.warn("Element not found. Check your selector or ensure the element is in the DOM.");
}