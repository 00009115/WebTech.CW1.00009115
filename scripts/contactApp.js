// VALIDATING CONTACT US FORM

document.getElementById("submit-message").addEventListener("click", () => {
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        window.alert("Insert all required data!")
    } // else, which means data are inserted, action can be done
});