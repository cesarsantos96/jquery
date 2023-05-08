$(document).ready(function () {
    $('#adicionar-tarefa').click(function () {
        var novaTarefa = $("#nova-tarefa").val();
        var novaTarefaLi = $("<li>");
        var novaTarefaSpan = $("<span>").text(novaTarefa);
        novaTarefa.append(novaTarefaSpan);
        $("#tarefas").append(novaTarefaSpan);
        $("#nova-tarefa").val(" ");
        novaTarefaSpan.click(function () {
            $(this).toogleClass("done");
        });
    });
});
