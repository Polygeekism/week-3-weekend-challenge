

$('document').ready(function(){

    $('#addToList').on('click', function(){
        console.log('add button was clicked');
        //$('#toDoRows').append('<tr><td>Get the button to work</td></tr>');//testing first button click
        var toDoText = $('#toDoTask').val();
        $.ajax({
            method: 'POST',
            url: '/toDoListRoute',
            success: function(response){
                console.log('post route hit');
                getList();
            }
        })
    });
});

function getList(){
    $.ajax({
        type: 'GET',
        url: '/toDoListRoute',
        success: function getSuccessCallback(response){
            console.log(response);
        }
    })
}
