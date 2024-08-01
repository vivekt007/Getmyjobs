// nav animations
function openNav() {
    document.getElementById("myNav").style.width = "20%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//slide in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElements1 = document.querySelectorAll(".hidden1");

hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));

// image slider

function changeImg(button) {
    const img = button.querySelector("img");
    if (img.src.endsWith("BookmarkEmpty.svg")) {
        img.src = "images/BookmarkFilled.svg";
    } else {
        img.src = "images/BookmarkEmpty.svg";
    }
}

function Signin() {
    window.location.href = "login.html";
}
