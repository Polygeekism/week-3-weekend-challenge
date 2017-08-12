

$('document').ready(function(){

    $('#addToList').on('click', function(){
        console.log('add button was clicked');
        $('#toDoRows').append('<tr><td>Get the button to work</td></tr>');
        var toDoText = $('#toDoTask').val();
        $.ajax({
            method: 'POST',
            url: '/toDoListRoute',
            success: function(response){
                console.log('post route hit');
            }
        })
    });
});

function getList(){

}
