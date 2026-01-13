// EmailJS initialization
(function () {
    emailjs.init('1YakKh986PuNNwEis');
})();

// Configuration for EmailJS
const SERVICE_ID = 'service_jzhe315';
const TEMPLATE_ID = 'template_y8j0oqm';

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const name = feedbackForm.name.value.trim();
            const email = feedbackForm.email.value.trim();
            const subject = feedbackForm.subject.value.trim();
            const message = feedbackForm.message.value.trim();

            // Show sending status
            const submitButton = feedbackForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Send email to owner
            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                to_email: 'your-email@gmail.com', // YOUR EMAIL ADDRESS
                from_name: name,
                user_email: email,
                subject: subject,
                message: message,
            })
                .then(() => {
                    // Send confirmation email to user
                    return emailjs.send(SERVICE_ID, 'template_confirmation', {
                        to_email: email,
                        user_name: name,
                    });
                })
                .then(() => {
                    alert('Thank you for your feedback! We will get back to you soon.');
                    feedbackForm.reset();
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    alert(`Error details: ${error.message || error}`);
                })
                .finally(() => {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }
});
