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