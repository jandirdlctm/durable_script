// HERO SECTION BUTTONS TO BE NEXT TO EACH OTHER ON MOBILE
const element = document.querySelector('.flex.md\\:inline-flex.flex-col.md\\:flex-row.gap-4.w-full.md\\:w-max.mt-2.lg\\:mt-4');
                    
if (element) {
  // Element was found
  console.log("Element exists! We can manipulate it safely.");
//   new_element.style.backgroundColor = "lightgreen";
  element.classList.remove('flex-col');
  element.classList.add('flex-row');
} else {
  // Element does not exist
  console.warn("Element not found. Check your selector or ensure the element is in the DOM.");
}