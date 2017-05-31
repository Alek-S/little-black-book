$( document ).ready(function(){

    $('.mate .mHead').on('click', function(){
        event.preventDefault();
        $(this).siblings('.events').slideToggle();
    });

    $('#mNew a').on('click', function(){
        event.preventDefault();
        $(this).siblings('form').slideToggle();
    });


}); //end of .ready()