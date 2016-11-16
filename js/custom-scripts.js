$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    if ($(window).scrollTop() >= 30) {
        $('header[role="banner"]').addClass('fixed');
    } else {
        $('header[role="banner"]').removeClass('fixed');
    }
    
    $(window).scroll(function() {

        if ($(window).scrollTop() >= 30) {
            $('header[role="banner"]').addClass('fixed');
        } else {
            $('header[role="banner"]').removeClass('fixed');
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
    } else {
        $('.sign').prependTo('.header-panel');
        $('.phones').prependTo('.header-panel');
        $('.orders').prependTo('.header-panel');
        $('nav').prependTo('.header-panel');
    }

    $(window).resize(function(){
        if ($(window).width() < '1231'){
            $('.sign').insertAfter('.burger');
            $('.phones').insertAfter('.burger');
            $('.orders').insertAfter('.burger');
            $('nav').insertAfter('.burger');
        } else {
            $('.sign').prependTo('.header-panel');
            $('.phones').prependTo('.header-panel');
            $('.orders').prependTo('.header-panel');
            $('nav').prependTo('.header-panel');
        }
    });

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.burger').click(function() {
        $(this).parents('.mobile-panel').toggleClass('active');
    });

    $('.card-dish button').click(function() {
        $('.window-make-order').fadeIn();
    });

    $('.form-make-order button').click(function() {

        $('.window-make-order').fadeOut();

        $('.cart-message').stop().fadeIn(0);

        setTimeout(function() {
            $('.cart-message').fadeOut(2000);
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

        if($(this).hasClass('increase')) {
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

});


