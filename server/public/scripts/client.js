

$('document').ready(function () {
    getList();
    $('#listOfTasks').on('click', 'input', function(){
        var taskId = $(this).closest('tr').data().id;
        var complete = $(this).closest('tr').data().complete;
        var updateObject = {
            taskId: taskId,
            booleanValue: complete
        }
        $.ajax({
            method: 'PUT',
            url: '/toDoListRoute',
            data: updateObject,
            success: function(response){
                getList();
            }
        })

        //$(this).toggleClass('true false');
        
    });
    $('#addToList').on('click', function () {
        //console.log('add button was clicked');
        //$('#toDoRows').append('<tr><td>Get the button to work</td></tr>');//testing first button click
        var toDoText = {
            task: $('#toDoTask').val()
        }

        $.ajax({
            method: 'POST',
            url: '/toDoListRoute',
            data: toDoText,
            success: function (response) {
                //console.log('post route hit');
                getList();
            }
        })
    });
    $('#listOfTasks').on('click', '.deleteButton', function(){
        var taskId = $(this).closest('tr').data().id;
        //console.log(taskId);
        $.ajax({
            method: 'DELETE',
            url: '/toDoListRoute/' + taskId,
            success: function(response){
                //console.log(response);
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
            //console.log(response);
            printList(response);
        }
    })
}

function printList(dataRows) {
    $('#listOfTasks').empty();
    for (var i = 0; i < dataRows.length; i++) {
        var task = dataRows[i];
        var complete = task.task_complete;
       
        var $taskRow = '<td>' + task.task_description + '</td>';
        if (complete === true){
            $taskRow = '<tr class="true">' + $taskRow + '<td><input type="checkbox" checked =true></td>';
        } else{
            $taskRow = '<tr class="false">' + $taskRow + '<td><input type="checkbox"></td>';
        }
        $taskRow += '<td><button class="deleteButton">Delete</button></td></tr>';
        $taskRow = $($taskRow);
        //console.log($taskRow);
        //console.log(task.id);
        $taskRow.data('id', task.id);
        $taskRow.data('complete', task.task_complete);
        //console.log('data for complete is ', $taskRow.data('complete'));
        $('#listOfTasks').append($taskRow);
    }
}

