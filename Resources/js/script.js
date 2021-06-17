$(document).ready(function () {
    /* ------- STICKY NAVIGATION -------*/
    var currentWidth = window.innerWidth;
    if (currentWidth > 480) {
        $('.section-services').waypoint(
            function (direction) {
                if (direction == 'down') {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            },
            {
                offset: '60px;',
            }
        );
    } else {
        $('nav').removeClass('sticky');
    }

    window.addEventListener('resize', function (e) {
        var currentWidth = window.innerWidth;
        if (currentWidth > 480) {
            $('.section-services').waypoint(
                function (direction) {
                    if (direction == 'down') {
                        $('nav').addClass('sticky');
                    } else {
                        $('nav').removeClass('sticky');
                    }
                },
                {
                    offset: '60px;',
                }
            );
        }
    });

    /*--------SCROLL ON BUTTON----------*/
    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate(
            { scrollTop: $('.section-form').offset().top },
            1000
        );
    });
    /*--------SCROLL ON NAVIGATION------*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (
                location.pathname.replace(/^\//, '') ==
                    this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        1000
                    );
                    return false;
                }
            }
        });
    });
    /*---------MOBILE NAVIGATION--------*/
    $('.mobile-nav-icon').click(function () {
        let nav = $('.main-nav');
        let icon = $('.mobile-nav-icon ion-icon');
        nav.slideToggle(200);

        if (icon.attr('name') === 'grid-outline') {
            icon.attr('name', 'close-outline');
        } else {
            icon.attr('name', 'grid-outline');
        }
    });
});
