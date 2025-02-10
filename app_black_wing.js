// const new_element = document.querySelector("#\\36 7668b4cb39ca82afeff4e37 > div > div.relative.z-10.container.mx-auto.px-5.md\\:px-6.transition-all.duration-300.pt-20.lg\\:pt-48.pb-20.lg\\:pb-48 > div > div > div.flex.md\\:inline-flex.flex-col.md\\:flex-row.gap-4.w-full.md\\:w-max.mt-4")
const new_element = document.querySelector("#\\36 7a7e71c60843a2b085ae4f7 > div > div.relative.z-10.container.mx-auto.px-5.md\\:px-6.transition-all.duration-300.pt-20.lg\\:pt-48.pb-20.lg\\:pb-48 > div > div > div > div")
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



const services = document.querySelector("#\\36 7a7e6a0fc9ffea2925d2c7c > div.relative.z-10.container.mx-auto.pt-16.lg\\:pt-32.pb-16.lg\\:pb-32 > div > div.flex.flex-col.gap-4.mb-6.items-start > p")
if (services) {
    console.log("Element exists! We can manipulate it safely.");
    services.classList.remove('body-small');
    services.classList.add('body-large');
  } else {
    console.warn("Element not found. Check your selector or ensure the element is in the DOM.");
  }