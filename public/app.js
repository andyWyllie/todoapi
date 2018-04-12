const url = '/api/todos';

$(document).ready(function(){
    // when page loads, we want to get our json api
    $.getJSON(url)
    .then(addTodos)
    .fail(function(err){
        alert("ERROR: " + err)
    });
    $('#todoInput').keypress(function(event){
        if(event.which === 13){
            createTodo();
        }
    });
    
    $('.list').on('click', 'li', function(){
        updateTodo($(this));
    });
    
    $('.list').on('click', 'span', function(e){
        e.stopPropagation();
        removeTodo($(this).parent());
    });
});

// adding all todos on page load
function addTodos(todos){
    // add todos to the page
    todos.forEach(function(todo){
      addTodo(todo);
    }); 
};

// function for showing new created todo in html
function addTodo(todo){
     const newTodo = $('<li class="task">' + todo.name + '<span>x</span>' + '</li>');
        newTodo.data('id', todo._id);
        newTodo.data('completed', todo.completed);
        if(todo.completed){
            todo.addClass('done');
        }
           $('.list').append(newTodo);
    };


function createTodo(data){
    // send post request to api
    var usrInput = $('#todoInput').val();
    $.post('api/todos', {name: usrInput})
     .then(function(newTodo){
         addTodo(newTodo);
        $('#todoInput').val('');
     })
     .catch(function(err){
         console.log(err);
     })
}
function removeTodo(todo){
    let clickedId = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/' + clickedId
    })
    .then(function(data){
        todo.remove();
    })
}

function updateTodo(todo){
    // change status on server
    let isDone = !todo.data('completed');
    let updateData = {completed: !isDone}
    $.ajax({
        method: "PUT",
        url: '/api/todos/' + todo.data('id'),
        data: updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass('done');
        todo.data('completed', isDone);
    })
    // update the view
}