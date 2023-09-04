document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const confirmation = document.getElementById("confirmation");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Perform form validation here if needed

        // Simulate form submission success (replace with actual submission logic)
        setTimeout(function () {
            contactForm.reset(); // Clear the form
            confirmation.style.display = "block"; // Show confirmation message
        }, 1000); // Simulated delay for demonstration
    });
});
