$( document ).ready(function(){

    var h1 = '&#x2764';
    var h2 = '&#x2764 &#x2764';
    var h3 = '&#x2764 &#x2764 &#x2764';
    var h4 = '&#x2764 &#x2764 &#x2764 &#x2764';
    var h5 = '&#x2764 &#x2764 &#x2764 &#x2764 &#x2764';

    $.get(window.location.origin + '/api/mates/user', function(mates){
        console.log(mates);

        mates.forEach(function(entry){
            
            getAvg(entry.id);
            var div = "<div class='mate' id='" + entry.id + "'>";
            div += "     <div class='mHead new'>";
            div +="        <a href=\"#\">"+entry.firstName + " " + entry.lastName+"</a><p>"+entry.platform+"  |  Avg Rating: <span class='avgRating avgRating"+entry.id+"'></span></p>"
            div +="    </div>"
            div +=""
            div +="    <div class='events'>"
            div +=""
            div +="        <div class='eventNew'>"
            div +="            <a class='toggleForm' href=\"#\">...add new event</a>"
            div +=""
            div +="            <form class='eventForm'>"
            div +="            <label for='What'>What:</label>"
            div +="            <input type=\"text\" id='what' placeholder=\"Dinner\"><br>"
            div +="            <br>"
            div +="            <label for='When'>When:</label>"
            div +="            <input type=\"date\" id='when'><br>"
            div +="            <br>"
            div +="            <label for='where'>Where:</label> "
            div +="            <input type=\"text\" id='where'><br>"
            div +="            <br>"
            div +="            <label for='eventRating'>Rating:</label> "
            div +="            <select id='eventRating' name='eventRating'>"
            div +="                 <option value='1'>1</option>"
            div +="                 <option value='2'>2</option>"
            div +="                 <option value='3'>3</option>"
            div +="                 <option value='4'>4</option>"
            div +="                 <option value='5'>5</option>"
            div +="             </select><br><br>"
            div +="             <button value='" + entry.id + "' class='submit' id='newEvent' type=\"submit\">Submit</button>"
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
                    
                    var averagRatingArr = [];

                    events.forEach(function(entry){
                        var currentRating = undefined;
                        averagRatingArr.push(entry.rating);

                        if(entry.rating === 1){
                            currentRating = h1;
                        } else if(entry.rating === 2){
                            currentRating = h2;
                        } else if(entry.rating === 3){
                            currentRating = h3;
                        }else if(entry.rating === 4){
                            currentRating = h4;
                        }else if(entry.rating === 5){
                            currentRating = h5;
                        }

                        divEvent ="<div class='event'>";
                        divEvent +="     <h2 class='what'><strong>Event:</strong> <span>"+ entry.what +"</span></h2>  ";
                        divEvent +="     <p class='when'><strong>When: </strong> "+ entry.when +"</p>";
                        divEvent +="     <p class='where'><strong>Where:</strong>"+ entry.where +"</p>";
                        divEvent +="     <p><strong>Rating:</strong> <span class='rating'>"+ currentRating +"</span></p>";
                        divEvent +="</div> ";

                        $( '#'+currentMate).children('.events').append(divEvent);
                    });

                    var averagRating = _.mean(averagRatingArr);
                    console.log( averagRating);
                    $(this).closest('.avgRating').html('alek');
                });
            }


            $( '#'+currentMate).children('.events').slideToggle();
        });

        $('#mNew a').on('click', function(){
            event.preventDefault();
            $(this).siblings('form').slideToggle();
        });

        //show add event form
        $('.eventNew').children('.toggleForm').on('click', function(){
            event.preventDefault();
            $(this).siblings('.eventForm').slideToggle();
        });

        //submit new event
        $('.eventForm button').on('click', function(){
            event.preventDefault();
            var what = $(this).siblings('#what').val();
            var when = $(this).siblings('#when').val();
            var where = $(this).siblings('#where').val();
            var rating = $(this).siblings('#eventRating').val();
            var eventMate = $(this).val();

            console.log('what',what);
            console.log('when',when);
            console.log('where',where);
            console.log('rating',rating);
            console.log('eventMate', eventMate);

            $.post(window.location.origin + '/api/event/new',{
                what: what,
                when: when,
                where: where,
                rating: rating,
                mateId: eventMate

            }).done(function(response){
                location.reload();
            });
        });

        //Add a new mate
        $('#newMate').on('click',function(){
            event.preventDefault();

            var firstName = $(this).siblings('#firstName').val();
            var lastName = $(this).siblings('#lastName').val();
            var platform = $(this).siblings('#platform').val();

            $.post(window.location.origin + '/api/mate/new', {
                firstName: firstName,
                lastName: lastName,
                platform: platform
            }).done(function(response){
                location.reload();
            });
        });

        function getAvg(mateId){
            $.get(window.location.origin + '/api/rating/' + mateId, function(ratingRes){
                console.log('Rating',ratingRes[0].avg);
                var currentRating = undefined;

                if( parseInt(ratingRes[0].avg) === 1){
                    currentRating = h1;
                } else if(parseInt(ratingRes[0].avg) === 2){
                    currentRating = h2;
                } else if(parseInt(ratingRes[0].avg) === 3){
                    currentRating = h3;
                }else if(parseInt(ratingRes[0].avg) === 4){
                    currentRating = h4;
                }else if(parseInt(ratingRes[0].avg) === 5){
                    currentRating = h5;
                } else{
                    currentRating = 'N/A'
                }
                console.log('.avgRating' + mateId);
                $('.avgRating' + mateId).html(currentRating);
            });
        }//end of function
    });

}); //end of .ready()










