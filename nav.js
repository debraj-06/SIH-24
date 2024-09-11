window.onscroll = function() {shrinkNavbar()};

    function shrinkNavbar() {
        const navbar = document.querySelector('.container');
        if (window.scrollY > 50) { /* Shrink when scrolled more than 50px */
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    }

    function toggleMenu() {
        const menu = document.getElementById("sideMenu");
        const icon = document.querySelector('.menu-icon');
        
        menu.classList.toggle("open"); // Toggle the side menu open/close
        icon.classList.toggle("change"); // Toggle the hamburger icon into X and back
    }
    