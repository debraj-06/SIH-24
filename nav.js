window.onscroll = function() {shrinkNavbar()};

    function shrinkNavbar() {
        const navbar = document.querySelector('.container');
        if (window.scrollY > 50) { /* Shrink when scrolled more than 50px */
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    }


