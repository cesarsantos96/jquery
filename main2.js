$(document).ready(function () {
    $('#submit-button').click(function () {
        var novaTarefa = $("#nova-tarefa").val();
        if (novaTarefa) {
            var novaTarefaLi = $("<li></li>").text(novaTarefa);
            $("#tarefas").appendTo(novaTarefaLi);
            $("#nova-tarefa").val("");
            novaTarefaLi.click(function () {
                $(this).toggleClass("done");
            });
        }
    });
});
