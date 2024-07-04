
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
    window.location.href = 'login.html';
}


// recruiter Js

let slideIndex = 0;
const slides = document.getElementsByClassName("adSlide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides();


// notification
// document.addEventListener('DOMContentLoaded', (event) => {
//     const notificationButton = document.querySelector('.notification button');
//     const notificationBar = document.getElementById('notificationBar');

//     function notificationDisplay() {
//         if (notificationBar.style.display === 'none' || notificationBar.style.display === '') {
//             notificationBar.style.display = 'flex';
//         } else {
//             notificationBar.style.display = 'none';
//         }
//     }

//     function hideNotificationBar(event) {
//         if (!notificationBar.contains(event.target) && !notificationButton.contains(event.target)) {
//             notificationBar.style.display = 'none';
//         }
//     }

//     notificationButton.addEventListener('click', notificationDisplay);
//     document.addEventListener('click', hideNotificationBar);
// });


document.addEventListener('DOMContentLoaded', (event) => {
    const notificationButton = document.querySelector('.notification button');
    const notificationIcon = document.getElementById('notificationIcon');
    const notificationBar = document.getElementById('notificationBar');

    function notificationDisplay() {
        if (notificationBar.style.display === 'none' || notificationBar.style.display === '') {
            notificationBar.style.display = 'flex';
            notificationIcon.classList.add('rotate');
        } else {
            notificationBar.style.display = 'none';
            notificationIcon.classList.remove('rotate');
        }
    }

    function hideNotificationBar(event) {
        if (!notificationBar.contains(event.target) && !notificationButton.contains(event.target)) {
            notificationBar.style.display = 'none';
            notificationIcon.classList.remove('rotate');
        }
    }

    notificationButton.addEventListener('click', notificationDisplay);
    document.addEventListener('click', hideNotificationBar);
});


// page numbers
document.addEventListener('DOMContentLoaded', (event) => {
    let currentPage = 1; // Track current page globally

    // Function to handle previous page navigation
    function previousPage() {
        if (currentPage > 1) {
            currentPage--;
            changePage(currentPage);
        }
    }

    // Function to handle next page navigation
    function nextPage() {
        const totalPage = Math.ceil(document.querySelectorAll('#candidatesContainer .candidatedataRow').length / 8);
        if (currentPage < totalPage) {
            currentPage++;
            changePage(currentPage);
        }
    }

    // Function to change the page based on pageNumber
    function changePage(pageNumber) {
        currentPage = pageNumber; // Update current page globally
        const rowsPerPage = 8;
        const startIndex = (pageNumber - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        const allRows = document.querySelectorAll('#candidatesContainer .candidatedataRow');
        allRows.forEach((row, index) => {
            if (index >= startIndex && index < endIndex) {
                row.style.display = 'flex';
            } else {
                row.style.display = 'none';
            }
        });

        highlightCurrentPage(pageNumber); // Highlight current page number
    }

    // Function to highlight the current page number
    function highlightCurrentPage(pageNumber) {
        const pageButtons = document.querySelectorAll('.pageNumbers button');
        pageButtons.forEach(button => {
            button.classList.remove('active');
        });
        const currentPageButton = document.getElementById(`page${pageNumber}`);
        if (currentPageButton) {
            currentPageButton.classList.add('active');
        }
    }

    // Initial call to display the first page
    changePage(1);
});

// candidates menu

document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menuButton');
    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const popupMenu = button.nextElementSibling;

            // Close all other open menus
            document.querySelectorAll('.popupMenu').forEach(menu => {
                if (menu !== popupMenu) {
                    menu.classList.remove('popupmenushow');
                }
            });

            // Toggle the display of the clicked menu
            const rect = button.getBoundingClientRect();
            popupMenu.style.top = `${rect.bottom + window.scrollY}px`;
            popupMenu.style.left = `${rect.left + window.scrollX}px`;
            popupMenu.classList.toggle('popupmenushow');
        });
    });

    document.addEventListener('click', () => {
        // Hide all menus if clicking outside
        document.querySelectorAll('.popupMenu').forEach(menu => {
            menu.classList.remove('popupmenushow');
        });
    });

    document.querySelectorAll('.popupMenu').forEach(menu => {
        menu.addEventListener('click', (event) => {
            // Prevent click events inside the menu from propagating to the document
            event.stopPropagation();
        });
    });
});

// folder menu

document.addEventListener('DOMContentLoaded', () => {
    const folderMenuButtons = document.querySelectorAll('.folderMenuButton');
    folderMenuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const folderPopupMenu = button.nextElementSibling;

            // Close all other open menus
            document.querySelectorAll('.folderPopupMenu').forEach(menu => {
                if (menu !== folderPopupMenu) {
                    menu.classList.remove('folderPopupMenushow');
                }
            });

            // Toggle the display of the clicked menu
            const rect = button.getBoundingClientRect();
            folderPopupMenu.style.top = `${rect.bottom + window.scrollY}px`;
            folderPopupMenu.style.left = `${rect.left + window.scrollX}px`;
            folderPopupMenu.classList.toggle('folderPopupMenushow');
        });
    });

    document.addEventListener('click', () => {
        // Hide all menus if clicking outside
        document.querySelectorAll('.folderPopupMenu').forEach(menu => {
            menu.classList.remove('folderPopupMenushow');
        });
    });

    document.querySelectorAll('.folderPopupMenu').forEach(menu => {
        menu.addEventListener('click', (event) => {
            // Prevent click events inside the menu from propagating to the document
            event.stopPropagation();
        });
    });
});

// create new folder popup
function openPopup() {
    document.getElementById('popupForm').classList.remove('hidden');
    document.addEventListener('click', closePopupOnClickOutside);
}

function closePopup() {
    document.getElementById('popupForm').classList.add('hidden');
    document.removeEventListener('click', closePopupOnClickOutside);
}

function closePopupOnClickOutside(event) {
    const popupForm = document.getElementById('popupForm');
    const button = document.querySelector('.newJobPost button');

    if (!popupForm.contains(event.target) && !button.contains(event.target)) {
        closePopup();
    }
}