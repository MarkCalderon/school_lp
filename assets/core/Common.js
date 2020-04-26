import SmoothScroll from "smoothscroll"

/* ---------------------------------------
MULTI MENU FUNCTION 
---------
TO USE:
Add attribute data-menu="#anchorname" to button.
Add attribute class=".menu__container" to object/content to allow closing.
Add attribute id=#anchorname" to object/content to allow opening.
----------------------------------------*/
function menu() {
    let link = document.querySelectorAll('[data-menu^="#"]');
    let menuitem = document.querySelectorAll('.menu__container');

    for(let i=0;i<link.length;i++) {
        link[i].addEventListener('mouseover', function(e) {
        	this.classList.add('is__open');
            let value = this.getAttribute('data-menu');
            let target = document.getElementById(value);
            target.classList.add('is__active');
        });

        link[i].addEventListener('mouseleave', function(e) {
        	this.classList.remove('is__open');
        	for(let i=0;i<menuitem.length;i++) {
		        menuitem[i].classList.remove('is__active');
        	}
        });
    }
}

/* ---------------------------------------
SP MULTI MENU FUNCTION 
---------
TO USE:
Add attribute data-menu="#anchorname" to button.
Add attribute class=".menu__container" to object/content to allow closing.
Add attribute id=#anchorname" to object/content to allow opening.
----------------------------------------*/
function spmenu() {
    let link = document.querySelectorAll('[data-spmenu^="#"]');

    for(let i=0;i<link.length;i++) {
        link[i].addEventListener('click', function(e) {
            this.classList.toggle('is__open');
            let value = this.getAttribute('data-spmenu');
            let target = document.getElementById(value);
            target.classList.toggle('is__active');
        });
    }
}

/* ---------------------------------------
SCROLL TO FUNCTION 
---------
TO USE:
Add attribute data-scroll="#anchorname" to button.
Add attribute id=#anchorname" to object/content to scroll to.
----------------------------------------*/
function scroll() {
    onLoadScroll();

    let link = document.querySelectorAll('[data-scroll^="#"]');
    
    for(var i=0;i<link.length;i++) {
        link[i].addEventListener('click', function(e) {
            let redirectValue = 0;
            let value = this.getAttribute('data-scroll');
            let target = document.getElementById(value);

            if(this.getAttribute('data-redirect') != null) {
                redirectValue = this.getAttribute('data-redirect');
            }

            if(redirectValue != 0) {
                window.location.href = redirectValue;
            }
            else {
                e.preventDefault();
                if(target != null) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

/* ---------------------------------------
ON LOAD SCROLL TO FUNCTION 
---------
TO USE:
Add attribute data-redirect="../#id" to button.
----------------------------------------*/
function onLoadScroll() {
    // If there is # in URL, loads
    if(window.location.href.indexOf("#") > -1) {
        let value = window.location.href, scrollValue, target;
        // Splits the URL and take the characters after #.
        scrollValue = '#' + value.split('#')[1];
        target = document.getElementById(scrollValue);

        if(target != null) {
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove hash value without load.
            let newURL = value.substring(0, value.indexOf('#'));
            history.pushState({}, null, newURL);
        }

    }
}

function modal() {
    let link = document.querySelectorAll('[data-modal^="#"]');
    let modal = document.getElementById('modal');
    let close = document.getElementById('close');

    for(let i=0;i<link.length;i++) {
        link[i].addEventListener('click', function(e) {
            modal.classList.add('is__active');
            let value = this.getAttribute('data-modal');
            let target = document.getElementById(value);
            target.classList.add('is__active');
        });
    }

    close.addEventListener('click', function() {
        modal.classList.remove('is__active');
        for(let i=0;i<link.length;i++) {
            link[i].classList.remove('is__active');
        }
    });
}

function scrollUp() {
    window.addEventListener('scroll', function(e){
        let bodyRect = document.body.getBoundingClientRect();
        let scrollButton = document.getElementById('scrollUp');
        // console.log('Top Line is ' + bodyRect.top + ' vertical pixels from root.');

        if(bodyRect.top < -50) {
            scrollButton.classList.add('is__active');
        }
        else {
            scrollButton.classList.remove('is__active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // loadSwiper();
    scroll();
    menu();
    spmenu();
    scrollUp();
    // modal();
});