
    const form = document.getElementById("contact-form");
    const toast = document.getElementById("toast");

    function showToast(message, isError = false) {
        toast.textContent = message;
        toast.className = "toast" + (isError ? " error" : "");
        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 4000);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                showToast("Message sent successfully!");
                form.reset();
            } else {
                showToast("Failed to send message. Please try again.", true);
            }
        }).catch(error => {
            showToast("Error: " + error.message, true);
        });
    });
