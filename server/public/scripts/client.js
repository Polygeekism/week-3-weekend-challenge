

$('document').ready(function () {
    getList();
    $('#addToList').on('click', function () {
        console.log('add button was clicked');
        //$('#toDoRows').append('<tr><td>Get the button to work</td></tr>');//testing first button click
        var toDoText = $('#toDoTask').val();
        $.ajax({
            method: 'POST',
            url: '/toDoListRoute',
            success: function (response) {
                console.log('post route hit');
                getList();
            }
        })
    });
});

function getList() {
    $.ajax({
        type: 'GET',
        url: '/toDoListRoute',
        success: function getSuccessCallback(response) {
            console.log(response);
            printList(response);
        }
    })
}

function printList(dataRows) {
    for (var i = 0; i < dataRows.length; i++) {
        var task = dataRows[i];
        $('#listOfTasks').prepend('<tr><td>' + task.task_description + '</td><td>' + task.task_complete + '</td></tr>');
    }
}

