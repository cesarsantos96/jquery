$(document).ready(function () {
    $('#submit-button').click(function (event) {
        event.preventDefault(); // Impede o envio do formulário

        var novaTarefa = $("#nova-tarefa").val();
        if (novaTarefa) {
            var novaTarefaLi = $("<li></li>").text(novaTarefa);
            novaTarefaLi.appendTo("#tarefas");
            $("#nova-tarefa").val("");
            novaTarefaLi.click(function () {
                $(this).toggleClass("done");
            });
        }
    });
});
