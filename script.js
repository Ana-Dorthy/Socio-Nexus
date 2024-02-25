// Define the animation timeline
const tl = gsap
    .timeline({ repeat: 10, repeatDelay: 1 })
    .from(".mask div", {
        xPercent: gsap.utils.wrap([100, -100]),
        stagger: 0.4,
        opacity: 0,
        ease: "circ.inOut"
    })
    .to(
        ".mask div",
        {
            opacity: 0,
            yPercent: gsap.utils.wrap([-100, 100]),
            duration: 1,
            ease: "none"
        },
        ">0.5"
    );

// Animation for the bar
gsap.fromTo(".bar", { x: -200 }, { x: 200, duration: 20, ease: "none", repeat: 3, yoyo: true });

// Adding event listeners to the register and login buttons
let register = document.querySelector(".register");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSelection = document.querySelector(".l-form");
let lbox = document.querySelector(".lbox");
let sbox = document.querySelector(".sbox");


register.addEventListener("click", () => {
    console.log("Register button clicked");
    slider.classList.add("moveslider");
    formSelection.classList.add("l-form-move");
    sbox.style.display = 'block';
    lbox.style.display = 'none'; // Hide the login form when registering
});

// Adding event listener to the login button
login.addEventListener("click", () => {
    console.log("Login button clicked");
    slider.classList.remove("moveslider");
    formSelection.classList.remove("l-form-move");
    lbox.style.display = 'block';
    sbox.style.display = 'none'; // Hide the registration form when logging in
});

// Hide the registration form initially
sbox.style.display = 'none';

// Function to toggle content
// Function to toggle content
function toggleLoginSection() {
    var mainContent = document.querySelector('.mainContent');
    var clickButton = document.querySelector('.button');
    var loginSection = document.querySelector('.log');

    // Hide main content and click button
    mainContent.style.display = 'none';
    clickButton.style.display = 'none';

    // Display login section
    loginSection.style.display = 'block';
}

