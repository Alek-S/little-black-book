$( document ).ready(function(){

    $.get('/api/mates/user', function(mates){
        console.log(mates);

        mates.forEach(function(entry){
            var heart = '&#x2764';

            var div = "<div class='mate' id='" + entry.id + "'>";
            div += "     <div class='mHead new'>";
            div +="        <a href=\"#\">"+entry.firstName + " " + entry.lastName+"</a><p>"+entry.platform+"  |  Avg Rating: <span class='avgRating'>&#x2764; &#x2764;</span></p>"
            div +="    </div>"
            div +=""
            div +="    <div class='events'>"
            div +=""
            div +="        <div class='eventNew'>"
            div +="            <p><a href=\"#\">...add new event</a></p>"
            div +=""
            div +="            <form class='eventForm'>"
            div +="            <label for='What'>What:</label>"
            div +="            <input type=\"text\" id='firstName' placeholder=\"Giacomo\"><br>"
            div +="            <br>"
            div +="            <label for='When'>When:</label>"
            div +="            <input type=\"date\" id='lastName' placeholder=\"Casanova\"><br>"
            div +="            <br>"
            div +="            <label for='where'>Where:</label> "
            div +="            <input type=\"text\" id='lastName'><br>"
            div +=""
            div +="             <button class='submit' id='newEvent' type=\"submit\">Submit</button>"
            div +="         </form>"
            div +="         </div>"
            div +=" </div>"

            $('#mateList').append(div);

        });

        $('.mate .mHead').on('click', function(){
            event.preventDefault();
            var currentMate = $(this).parent().attr('id');
            var url = window.location.origin + '/api/events/' + currentMate;

            if( $(this).hasClass('new') ){ //to check if events have already been pulled
                $(this).removeClass('new')
                $.get(url, function(events){
                    console.log(events);
                    
                    events.forEach(function(entry){
                        divEvent ="<div class='event'>";
                        divEvent +="     <h2 class='what'><strong>Event:</strong> <span>"+ entry.what +"</span></h2>  ";
                        divEvent +="     <p class='when'><strong>When: </strong> "+ entry.when +"</p>";
                        divEvent +="     <p class='where'><strong>Where:</strong>"+ entry.where +"</p>";
                        divEvent +="     <p><strong>Rating:</strong> <span class='rating'>&#x2764; &#x2764; &#x2764;</span></p>";
                        divEvent +="</div> ";

                        $( '#'+currentMate).children('.events').append(divEvent);
                    });
                });
            }


            $( '#'+currentMate).children('.events').slideToggle();
        });

        $('#mNew a').on('click', function(){
            event.preventDefault();
            $(this).siblings('form').slideToggle();
        });

        $('.eventNew').on('click', function(){
            event.preventDefault();
            $(this).children('form').slideToggle();
        });

        $('#newMate').on('click',function(){
            event.preventDefault();

            var firstName = $(this).siblings('#firstName').val();
            var lastName = $(this).siblings('#lastName').val();
            var platform = $(this).siblings('#platform').val();

            console.log(firstName, lastName, platform);

            $.post(window.location.origin + '/api/mate/new', {
                firstName: firstName,
                lastName: lastName,
                platform: platform
            }).done(function(response){
                console.log(response);
                location.reload();
            });
        });

    });
}); //end of .ready()










