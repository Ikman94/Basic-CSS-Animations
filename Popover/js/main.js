$(document).ready(function () {
    $('#nameCard').hide();
    $('#aboutCard').hide();
    $('#futureCard').hide();
    $('#contactCard').hide();
    
    $("#arrowUp").click(function () {
        $('#nameCard').fadeToggle();
    });
    $("#arrowRight").click(function () {
        $('#aboutCard').fadeToggle();
    });
    $("#arrowDown").click(function () {
        $('#futureCard').fadeToggle();
    });
    $("#arrowLeft").click(function () {
        $('#contactCard').fadeToggle();
    });
})