const services_image_1 = document.querySelector("#\\36 76dbb0e53a30563c988dbc3 > div.relative.z-10.container.mx-auto.pt-12.lg\\:pt-20.pb-12.lg\\:pb-20 > div > div > div:nth-child(1) > div > div > div > div.flex-shrink-0.relative.overflow-hidden.aspect-w-1.aspect-h-1.rounded-2xl.md\\:rounded-3xl.lg\\:rounded-4xl > span > img")
if (services_image_1) {
  // Element was found
  console.log("Element exists! We can manipulate it safely.");
//   new_element.style.backgroundColor = "lightgreen";
  // new_element.classList.remove('flex-col');
  services_image_1.style.backgroundColor = "Black";
} else {
  // Element does not exist
  console.warn("Servuces Element1 not found. Check your selector or ensure the element is in the DOM.");
}

const services_image_2 = document.querySelector("#\\36 76dbb0e53a30563c988dbc3 > div.relative.z-10.container.mx-auto.pt-12.lg\\:pt-20.pb-12.lg\\:pb-20 > div > div > div:nth-child(2) > div > div > div > div.flex-shrink-0.relative.overflow-hidden.aspect-w-1.aspect-h-1.rounded-2xl.md\\:rounded-3xl.lg\\:rounded-4xl > span > img")
if (services_image_2) {
  console.log("Element exists! We can manipulate it safely.");
  services_image_2.style.backgroundColor = "Black";
} else {
  console.warn("Servuces Element2 not found. Check your selector or ensure the element is in the DOM.");
}

const services_image_3 = document.querySelector("#\\36 76dbb0e53a30563c988dbc3 > div.relative.z-10.container.mx-auto.pt-12.lg\\:pt-20.pb-12.lg\\:pb-20 > div > div > div:nth-child(3) > div > div > div > div.flex-shrink-0.relative.overflow-hidden.aspect-w-1.aspect-h-1.rounded-2xl.md\\:rounded-3xl.lg\\:rounded-4xl > span > img")
if (services_image_3) {
  console.log("Element exists! We can manipulate it safely.");
  services_image_3.style.backgroundColor = "Black";
} else {
  console.warn("Servuces Element3 not found. Check your selector or ensure the element is in the DOM.");
}



// MOBILE
var new_btn = document.querySelector("#website-header > div > div.ml-auto.lg\\:hidden > button");

new_btn.onclick = function() {
    setTimeout(() => { // Delay to allow potential dynamic elements to load
        var targetElement = document.querySelector('[id^="headlessui-dialog-panel-"] > div > div.flex-1.py-6.overflow-auto > div > ul');

        if (targetElement) {  
            console.log("✅ Element is in the DOM!");
            var home_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(1) > a');
            var services_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(2) > a');
            var about_us_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(3) > a');
            var events_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(4) > a');
            var testimonials_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(5) > a');
            var contact_us_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(6) > a');
            
            home_btn.textContent = "Home";
            services_btn.textContent = "Services";
            about_us_btn.textContent = "About Us";
            events_btn.textContent = "Events";
            testimonials_btn.textContent = "Testimonials"
            contact_us_btn.textContent = "Contact Us"

            home_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/"; // Redirect
            });
            services_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/services"; // Redirect
            });
            about_us_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/about-us"; // Redirect
            });
            testimonials_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/testimonials"; // Redirect
            });
            contact_us_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/contact"; // Redirect
            });
        } else {
            console.error("❌ Element not found in the DOM.");
        }
    }, 600); // Adjust delay if necessary
};