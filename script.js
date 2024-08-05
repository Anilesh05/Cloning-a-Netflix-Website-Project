document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion input[type='radio']");
    accordions.forEach(accordion => {
        accordion.addEventListener("change", function() {
            if (this.checked) {
                const allContents = document.querySelectorAll(".accordion .content");
                allContents.forEach(content => content.style.maxHeight = null);
                const content = this.nextElementSibling.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
