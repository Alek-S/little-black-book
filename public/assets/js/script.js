$( document ).ready(function(){

    $('.mate .mHead').on('click', function(){
        event.preventDefault();
        $(this).siblings('.events').slideToggle();
    });
});