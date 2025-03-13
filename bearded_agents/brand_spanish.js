// DESKTOP NAV TRANSLATION
const nav_home = document.querySelector("#website-header > div > div.hidden.lg\\:flex.item-center.justify-end.gap-10.lg\\:col-span-2 > ul.hidden.items-center.flex-wrap.lg\\:flex.justify-end.gap-x-6 > li:nth-child(1) > a")
if (nav_home) {
    nav_home.textContent = "Inicio";
    nav_home.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "/home-spanish"; // Redirect
    });
}
else{
    console.log("Element does not exist")
}


const nav_services = document.querySelector("#website-header > div > div.hidden.lg\\:flex.item-center.justify-end.gap-10.lg\\:col-span-2 > ul.hidden.items-center.flex-wrap.lg\\:flex.justify-end.gap-x-6 > li:nth-child(2) > a")
if (nav_services) {
    console.log("Element exists!");
    // CHANGE THE TEXT
    nav_services.textContent = "Servicios";
    // CHANGE HREF
    nav_services.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "/services-spanish"; // Redirect
    });
}
else{
    console.log("Element does not exist")
}

const nav_about_us = document.querySelector("#website-header > div > div.hidden.lg\\:flex.item-center.justify-end.gap-10.lg\\:col-span-2 > ul.hidden.items-center.flex-wrap.lg\\:flex.justify-end.gap-x-6 > li:nth-child(3) > a");
if (nav_about_us) {
    console.log("Element exists!");
    // CHANGE THE TEXT
    nav_about_us.textContent = "Sobre Nosotros";
    // CHANGE HREF
    nav_about_us.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "/about-us-spanish"; // Redirect
    });
}
else{
    console.log("Element does not exist")
}

const nav_events = document.querySelector("#website-header > div > div.hidden.lg\\:flex.item-center.justify-end.gap-10.lg\\:col-span-2 > ul.hidden.items-center.flex-wrap.lg\\:flex.justify-end.gap-x-6 > li:nth-child(4) > a")
if (nav_events) {
    console.log("Element exists!");
    // CHANGE THE TEXT
    nav_events.textContent = "Eventos";
}
else{
    console.log("Element does not exist")
}

const nav_testimonials = document.querySelector("#website-header > div > div.hidden.lg\\:flex.item-center.justify-end.gap-10.lg\\:col-span-2 > ul.hidden.items-center.flex-wrap.lg\\:flex.justify-end.gap-x-6 > li:nth-child(5) > a");
if (nav_testimonials) {
    console.log("Element exists!");
    // CHANGE THE TEXT
    nav_testimonials.textContent = "Testimonios";
    // CHANGE HREF
    nav_testimonials.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "/testimonials-spanish"; // Redirect
    });
}
else{
    console.log("Element does not exist")
}

const nav_contact_us = document.querySelector("#website-header > div > div.hidden.lg\\:flex.item-center.justify-end.gap-10.lg\\:col-span-2 > ul.hidden.items-center.flex-wrap.lg\\:flex.justify-end.gap-x-6 > li:nth-child(6) > a");
if (nav_contact_us) {
    console.log("Element exists!");
    // CHANGE THE TEXT
    nav_contact_us.textContent = "Contactenos";
    // CHANGE HREF
    nav_contact_us.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "/contact-spanish"; // Redirect
    });
}
else{
    console.log("Element does not exist")
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
            var events_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(4) > a')
            var testimonials_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(5) > a');
            var contact_us_btn = document.querySelector(':is([id^="headlessui-dialog-panel-"]) > div > div.flex-1.py-6.overflow-auto > div > ul > li:nth-child(6) > a');
            
            home_btn.textContent = "Inicio";
            services_btn.textContent = "Servicios";
            about_us_btn.textContent = "Sobre Nosotros";
            events_btn.textContent = "Eventos";
            testimonials_btn.textContent = "Testimonios"
            contact_us_btn.textContent = "Contactenos"

            home_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/home-spanish"; // Redirect
            });
            services_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/services-spanish"; // Redirect
            });
            about_us_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/about-us-spanish"; // Redirect
            });
            testimonials_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/testimonials-spanish"; // Redirect
            });
            contact_us_btn.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = "/contact-spanish"; // Redirect
            });
        } else {
            console.error("❌ Element not found in the DOM.");
        }
    }, 600); // Adjust delay if necessary
};