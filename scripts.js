function bookNow() {
    window.location.href = "https://www.facebook.com/TigertoursinCavite";
}

function viewDetails(destination) {
    alert("Viewing details for: " + destination);
}

// Sticky Navbar Transition
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("opaque");
    } else {
        navbar.classList.remove("opaque");
    }
};
