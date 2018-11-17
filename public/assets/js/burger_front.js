/*Burger front controls all of the front-end
ajax requests to add/devour burgers*/
$(function() {
    //update status
    $(".devour").on('click', function(event){
        var id = $(this).data('id');
        console.log('ID: ',id);
        $.ajax('/api/burger/'+ id, {
            type: "PUT",
            data: {devoured: true}
        }).then(function() {
            console.log('Devoured');
            location.reload();
        });
    });

    //adds new burger to database
    $(".create-form").on('submit', function(event){
        event.preventDefault();
        var newBurger = {
            name: $('#bur').val().trim(),
            devoured: 0
        };

        $.post('/api/burger', newBurger,)
        .then(function(){
            console.log('Burger Added!');
            location.reload();
        });
    })


});

