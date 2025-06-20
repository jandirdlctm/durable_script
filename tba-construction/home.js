// HERO SECTION BUTTONS TO BE NEXT TO EACH OTHER ON MOBILE
const new_element = document.querySelector("#\\36 8235520296cd92ac3b63ac9 > div > div.flex-1.relative > div.transition-all.transition-all.ease-in-out.duration-500.opacity-100.translate-y-0.relative.z-10.w-full.h-full > div > div > div")
                    
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