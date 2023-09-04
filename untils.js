document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const newsletterForm = document.getElementById("newsletterForm");
    const confirmation = document.getElementById("confirmation");
    const newsletterConfirmation = document.getElementById("newsletterConfirmation");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // You can perform form validation and submit data to a server here if needed.

        // For demonstration purposes, we'll just show a confirmation message.
        contactForm.reset(); // Clear the form
        confirmation.style.display = "block";
    });

    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const newsletterEmail = document.getElementById("newsletterEmail").value;

        // You can perform validation and subscribe the user to your newsletter here if needed.

        // For demonstration purposes, we'll just show a confirmation message.
        newsletterForm.reset(); // Clear the form
        newsletterConfirmation.style.display = "block";
    });
});
