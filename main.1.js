$(document).ready(function () {
    $('button[type="sub"]').click(function () {
        var novaTarefa = $("#nova-tarefa");
        var novaTarefaLi = $("<li>");
        var novaTarefaSpan = $("<span>").text(novaTarefa.val());
        novaTarefaLi.append(novaTarefaSpan);
        $("#tarefas").append(novaTarefaLi);
        $("#nova-tarefa").val("");
        novaTarefaSpan.click(function () {
            $(this).toggleClass("done");
        });
    });
});
