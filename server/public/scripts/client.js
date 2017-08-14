

$('document').ready(function () {
    getList();
    $('#listOfTasks').on('click', 'tr', function(){
        $(this).toggleClass('true false');
    });
    $('#addToList').on('click', function () {
        console.log('add button was clicked');
        //$('#toDoRows').append('<tr><td>Get the button to work</td></tr>');//testing first button click
        var toDoText = {
            task: $('#toDoTask').val()
        }

        $.ajax({
            method: 'POST',
            url: '/toDoListRoute',
            data: toDoText,
            success: function (response) {
                console.log('post route hit');
                getList();
            }
        })
    });
    $('#listOfTasks').on('click', '.deleteButton', function(){
        var taskId = $(this).closest('tr').data().id;
        console.log(taskId);
        $.ajax({
            method: 'DELETE',
            url: '/toDoListRoute/' + taskId,
            success: function(response){
                console.log(response);
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
    $('#listOfTasks').empty();
    for (var i = 0; i < dataRows.length; i++) {
        var task = dataRows[i];
        var complete = task.task_complete;
       
        var $taskRow = '<td>' + task.task_description + '</td><td>' + task.task_complete + '</td>' ;
        if (complete === true){
            $taskRow = '<tr class="true">' + $taskRow;
        } else{
            $taskRow = '<tr class="false">' + $taskRow;
        }
        $taskRow += '<td><button class="deleteButton">Delete</button></td></tr>';
        $taskRow = $($taskRow);
        console.log($taskRow);
        console.log(task.id);
        $taskRow.data('id', task.id);
        console.log('data for taskId is ', $taskRow.data('id'));
        $('#listOfTasks').append($taskRow);
    }
}
// for (var i = 0; i < koalas.length; i++) {
//     var koala = koalas[i];
//     var $koalaRow = '<tr><td>' + koala.name + '</td><td>' + koala.age + '</td><td>' + koala.gender + '</td><td>' + koala.ready_for_transfer + '</td><td>' + koala.notes + '</td><td><button class = "deleteKoala">Delete</button></td></tr>';
//     $koalaRow = $($koalaRow);
//     console.log($koalaRow);
//     console.log(koala.id);
//     $koalaRow.data('id', koala.id);
//     console.log('data for koala ID is', $koalaRow.data('id'));
//     $('#viewKoalas').append($koalaRow);
//   }
