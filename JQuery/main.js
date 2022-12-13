$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const newTask = $('input').val();

        const newLine = $(`<li>${newTask}</li>`);
        $(newLine).appendTo('ul');
        $(newLine).fadeIn(500);

        $('input').val(' ');
    })

    $(document).on('click', 'li', function () {
        if ($(this).css('text-decoration') === 'none solid rgb(0, 0, 0)') {
            $(this).css('text-decoration', 'line-through');
        } else {
            $(this).css('text-decoration', 'none solid rgb(0, 0, 0)');
        }
    })
})