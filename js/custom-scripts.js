$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider').animate({opacity: 1});
    }, 500);

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.burger').click(function() {
        $(this).siblings('nav ul').slideToggle();
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

    var cities = $('.header-panel .phones .city li');


    $('.header-panel .phones .city li').click(function() {

        var currentIndex = $('.header-panel .phones .city li.active').index();

        $('.header-panel .phones li.active').removeClass('active');

        nextCity(currentIndex);

    });

    $('.header-panel .phones .controls').click(function() {

        var currentIndex = $('.header-panel .phones .city li.active').index();

        $('.header-panel .phones li.active').removeClass('active');

        if($(this).hasClass('control-prev')) {
            prevCity(currentIndex);
        } else {
            nextCity(currentIndex);
        }

    });

    function nextCity(currentIndex) {

        if(currentIndex == cities.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        $('.header-panel .phones .city li').eq(currentIndex).addClass('active');
        $('.header-panel .phones .tel li').eq(currentIndex).addClass('active');

    }

    function prevCity(currentIndex) {

        if(currentIndex == 0) {
            currentIndex = cities.length - 1;
        } else {
            currentIndex--;
        }

        $('.header-panel .phones .city li').eq(currentIndex).addClass('active');
        $('.header-panel .phones .tel li').eq(currentIndex).addClass('active');

    }

});


