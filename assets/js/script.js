$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

//  ================ -menu-click-start- ================

$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }

    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});

//  ================ -menu-click-end- ================

$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();

});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.forgot-password').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.vxod-site').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close__mods').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});

$(document).ready(function () {

    $('.increment').on('click', incrementsVal);
    $('.decrement').on('click', decrementVal);

    function incrementsVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val++;
        $(parent_val).find('input[type=text]').val(input_val)
    }

    function decrementVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val--;
        if (input_val <= 1) {
            $(parent_val).find('input[type=text]').val('1')
        } else {
            $(parent_val).find('input[type=text]').val(input_val)

        }
    }

});

$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

var swiper = new Swiper(".reviews__slider", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1199': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '310': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});

$('.choose-plan__href').on('click',function () {
    $('.choose-plan__href').removeClass('choose-plan__active');
    $(this).addClass('choose-plan__active');

});


$('.open-aside').on('click',function (e) {
    $('.sticker__left').toggleClass('sticker-menu__open');
    e.stopPropagation()
});
$('.close__menu').on('click',function (e) {
    $('.sticker__left').removeClass('sticker-menu__open');
    e.stopPropagation()
});
$('.sticker__left').on('click',function (e) {
    e.stopPropagation()
});

$(window).on('click', function (e) {
    let menuSort = $('.sticker__left');
    if (e.target !== menuSort) {
        menuSort.removeClass('sticker-menu__open')
    }
});