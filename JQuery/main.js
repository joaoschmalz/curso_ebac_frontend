let countTask = 0;

$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const newTask = $('input').val();

        const newLine = $(`<li id="task-${countTask}" onClick="done(id)" style="display: none">${newTask}</li>`);
        $(newLine).appendTo('ul');
        $(newLine).fadeIn(500);

        $('input').val(' ');
        countTask ++;      
    })
})

function done(elem){
    document.getElementById(elem).classList.add('done');
}