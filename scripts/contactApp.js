// VALIDATING CONTACT US FORM

document.getElementById("submit-message").addEventListener("click", () => {
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let message = document.getElementById("message").value;   // storing the values of inputs into variables

    if (!name || !email || !message) {
        window.alert("Insert all required data!") // if the required fields are not filled in, then the window will alert
    } // else, which means data are inserted properly, relevant action can be done
});