const faqs = document.querySelectorAll(".faq-class");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})