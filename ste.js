document.addEventListener("DOMContentLoaded", function () {
    const serviceElements = document.querySelectorAll(".service");

    // Add click event listeners to each service element
    serviceElements.forEach(function (service) {
        const title = service.querySelector("h2");
        const description = service.querySelector("p");

        title.addEventListener("click", function () {
            // Toggle the visibility of the description when the title is clicked
            description.classList.toggle("hidden");
        });
    });
});
