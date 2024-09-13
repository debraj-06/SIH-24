window.onscroll = function() {shrinkNavbar()};

    function shrinkNavbar() {
        const navbar = document.querySelector('.container');
        if (window.scrollY > 50) { /* Shrink when scrolled more than 50px */
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    }
// 3line menubar
    function toggleMenu() {
        const menu = document.getElementById("sideMenu");
        const icon = document.querySelector('.menu-icon');
        
        menu.classList.toggle("open"); // Toggle the side menu open/close
        icon.classList.toggle("change"); // Toggle the hamburger icon into X and back
    }

    function toggleMenu() {
        var menu = document.getElementById("sideMenu");
        menu.classList.toggle("open");
    
        var bars = document.querySelectorAll('.menu-icon div');
        bars.forEach(function(bar) {
            bar.classList.toggle('change');
        });
    }
    
    // function changeActive(selectedLink) {
    //     // Remove 'active' class from all links
    //     var links = document.querySelectorAll('.menu-link');
    //     links.forEach(function(link) {
    //         link.classList.remove('active');
    //     });
    
    //     // Add 'active' class to the clicked link
    //     selectedLink.classList.add('active');
    // }
    function toggleMenu(icon) {
        var menu = document.getElementById("sideMenu");
        menu.classList.toggle("open");
        
        // Toggle the change class for the menu icon animation
        icon.classList.toggle('change');
    }
    
    function changeActive(selectedLink) {
        // Remove 'active' class from all links
        var links = document.querySelectorAll('.menu-link');
        links.forEach(function(link) {
            link.classList.remove('active');
        });
    
        // Add 'active' class to the clicked link
        selectedLink.classList.add('active');
    }
        