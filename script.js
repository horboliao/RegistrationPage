document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelectorAll('.error').forEach(function (error) {
        error.textContent = '';
    });

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;

    function showErrorPopup(message) {
        const popup = document.getElementById('error-popup');
        const popupMessage = document.getElementById('popup-message');
        const closePopup = document.getElementById('close-popup');

        popup.style.display = 'block';
        popupMessage.textContent = message;

        closePopup.addEventListener('click', function () {
            popup.style.display = 'none';
        });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        showErrorPopup('Uncorrected email');
        return;
    }

    if (password.length < 8) {
        showErrorPopup('The password length is less than 8 characters');
        return;
    }

    showErrorPopup(`Successful registration!\nEmail: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}`);

    document.getElementById('registration-form').reset();
});
