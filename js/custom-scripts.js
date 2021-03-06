$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    if ($(window).scrollTop() >= 30) {
        $('header[role="banner"]').addClass('fixed');
        if($(window).width() < '1231') {
            $('.sidebar-links').addClass('to-top');
        }

    } else {
        $('header[role="banner"]').removeClass('fixed');
        if($(window).width() < '1231') {
            $('.sidebar-links').removeClass('to-top');
        }
    }
    
    $(window).scroll(function() {

        if ($(window).scrollTop() >= 30) {
            $('header[role="banner"]').addClass('fixed');
            if($(window).width() < '1231') {
                $('.sidebar-links').addClass('to-top');
            }

        } else {
            $('header[role="banner"]').removeClass('fixed');
            if($(window).width() < '1231') {
                $('.sidebar-links').removeClass('to-top');
            }
        }
        
    });
    
    setTimeout(function() {
        $('.slider').animate({opacity: 1});
    }, 500);

    if ($(window).width() < '1231'){
        $('.sign').insertAfter('.burger');
        $('.phones').insertAfter('.burger');
        $('.orders').insertAfter('.burger');
        $('nav').insertAfter('.burger');
        $('.page-restaurant-menu .cards-list').removeClass('menu-list');
    } else {
        $('.sign').prependTo('.header-panel');
        $('.phones').prependTo('.header-panel');
        $('.orders').prependTo('.header-panel');
        $('nav').prependTo('.header-panel');
        $('.page-restaurant-menu .cards-list').addClass('menu-list');
    }

    $(window).resize(function(){
        if ($(window).width() < '1231'){
            $('.sign').insertAfter('.burger');
            $('.phones').insertAfter('.burger');
            $('.orders').insertAfter('.burger');
            $('nav').insertAfter('.burger');
            $('.page-restaurant-menu .cards-list').removeClass('menu-list');
        } else {
            $('.sign').prependTo('.header-panel');
            $('.phones').prependTo('.header-panel');
            $('.orders').prependTo('.header-panel');
            $('nav').prependTo('.header-panel');
            $('.page-restaurant-menu .cards-list').addClass('menu-list');
        }
    });

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.burger').click(function() {
        $(this).parents('.mobile-panel').toggleClass('active');
    });
    $('.burger-sidebar').click(function() {
        $(this).toggleClass('active');
        $('.sidebar-links').toggleClass('active');
    });

    $('.card-dish button').click(function() {
        $('.window-make-order').fadeIn();
    });

    $('.add-review').click(function() {
        $('.window-add-review').fadeIn();
    });

    $('.form-make-order button').click(function() {

        $('.window-make-order').fadeOut();

        $('.cart-message').stop().fadeIn(0);

        $('.header-cart').addClass('active');

        setTimeout(function() {
            $('.cart-message').fadeOut(2000);
            $('.header-cart').removeClass('active');
        }, 3000);

        return false;

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-window')) $('.window').fadeOut();
    });

    $('.list-header .view-filter .filter-choice').click(function() {

        $('.list-header .view-filter .filter-choice').removeClass('active');
        $(this).addClass('active');

        var amountVisible;
        
        if ($(this).hasClass('view-4')) {
            amountVisible = 4;
        } else if ($(this).hasClass('view-8')) {
            amountVisible = 8;
        } else if ($(this).hasClass('view-12')) {
            amountVisible = 12;
        } else {
            amountVisible = 0;
        }

        if (amountVisible == 0) {
            $(this).parents('.list-header').siblings('.cards-list').find('.card').removeClass('hidden');
        } else {

            var array = $(this).parents('.list-header').siblings('.cards-list').find('.card');

            for (var i = 0; i < array.length; i++) {
                if (i > amountVisible - 1) {
                    $(array[i]).addClass('hidden');
                } else {
                    $(array[i]).removeClass('hidden');
                }
            }

        }

    });



    /******************************************************************************************************************
     ******* phones scripts
     ******************************************************************************************************************/

    $('.header-panel .phones .city').hover(function() {
        if ($(window).width() > '1230'){
            $('.header-panel .phones .city ul').stop().slideDown(200);
        }
    },
    function() {
        if ($(window).width() > '1230'){
            $('.header-panel .phones .city ul').stop().slideUp(200);
        }
    });

    $('.header-panel .phones .city').click(function() {
        if ($(window).width() < '1231'){
            $('.header-panel .phones .city ul').stop().slideToggle(200);
        }
    });

    $('.header-panel .phones .city ul li').click(function() {

        var currentIndex = $(this).index();

        $('.current-city').html($(this).html());
        $('.header-panel .phones .tel li.active').removeClass('active');
        $('.header-panel .phones .tel li').eq(currentIndex).addClass('active');

        $('.header-panel .phones .city ul').stop().slideUp(200);

    });

    /******************************************************************************************************************
     ******* counter scripts
     ******************************************************************************************************************/
    
    $('.dishes-counter .control').click(function() {

        var currentAmount = parseInt($(this).siblings('.current-amount').html());
        var startCost = parseInt($(this).parents('li').find('.dish-details').find('.value').html());
        var currentCost = parseInt($(this).parents('li').find('.item-cost').find('.value').html());

        console.log(currentCost);

        if($(this).hasClass('decrease')) {
            if (currentAmount > 1) {
                currentAmount--;
                currentCost -= startCost;
            } else {
                return false;
            }
        } else {
            currentAmount++;
            currentCost += startCost;
        }



        $(this).siblings('.current-amount').html(currentAmount);
        $(this).siblings('label').find('input').attr('value', currentAmount);
        $(this).parents('li').find('.item-cost').find('.value').html(currentCost);

    });

    /******************************************************************************************************************
     ******* filter-cost scripts
     ******************************************************************************************************************/

    var filterCost = $("#filter-cost");

    $("#filter-cost").rangeSlider({
        bounds:{min: 0, max: 5000},
        defaultValues:{min: 500 , max: 2700},
        step: 50
    });

    $("#filter-cost").bind("valuesChanging", function(e, data){
        $( "#min-cost" ).val( data.values.min );
        $( "#max-cost" ).val( data.values.max );
    });

    $( "#min-cost" ).val( $("#filter-cost").rangeSlider('min') );
    $( "#max-cost" ).val( $("#filter-cost").rangeSlider('max') );

});


