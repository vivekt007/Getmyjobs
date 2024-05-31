
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements1 = document.querySelectorAll('.hidden1');

hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));


// save image change
// const myImg = document.getElementById("saveImg");
// const myButton = document.getElementById("saveBtn");

// myButton.addEventListener("click", function () {
//     if (myImg.src = "images/BookmarkEmpty.svg") {
//         myImg.src = "images/BookmarkFilled.svg";
//     }

//     else{
//         myImg.src = "images/BookmarkEmpty.svg";
//     }
// });

// const myImg = document.getElementById("saveImg");
// const myButton = document.getElementById("saveBtn");

// myButton.addEventListener("click", function () {
//     if (myImg.src.endsWith("BookmarkEmpty.svg")) {
//         myImg.src = "images/BookmarkFilled.svg";
//     } else {
//         myImg.src = "images/BookmarkEmpty.svg";
//     }
// });

function changeImg(button) {
    const img = button.querySelector("img");
    if (img.src.endsWith("BookmarkEmpty.svg")) {
        img.src = "images/BookmarkFilled.svg";
    } else {
        img.src = "images/BookmarkEmpty.svg";
    }
}

function Signin() {
    window.location.href = 'onboarding1.html';
}