// CHECKING WHETHER SIGNED IN OR NOT

let isSigned = true;  // CAN BE RESET TO TRUE WHEN USER SIGNS IN. RESET TO TRUE TO ENABLE THE PROFILE PAGE

if (isSigned) {
    document.getElementById("sign").style.display = "none";
    document.getElementById("user").style.display = "block";
    // if the user has signed-in, then only user-icon will be present
} else {
    document.getElementById("sign").style.display = "block";
    document.getElementById("user").style.display = "none";
    // if the user has not signed-in, then sign-up button will be present
}


// RESPONSIVE NAVIGATION BAR

document.getElementById("menu-button").addEventListener("click", () => {
    document.getElementById("nav-bar").classList.toggle("is-visible");  // making nav-bar window visible by adding "is-visible" class
    document.getElementById("menu-icon").classList.toggle("is-white");  // changing the color of menu-icon
    document.getElementById("sign").querySelector(".btn").classList.toggle("dark");  // changing the color of button
    document.getElementById("sign").querySelector(".btn").classList.toggle("light");
});
