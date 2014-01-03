$(document).ready(function(){
    $('#player1up').click(function(){
        var player1Life = Number($('#player1life').text());
        player1Life++;
        $('#player1life').text(player1Life);
    });

    $('#player1down').click(function(){
        var player1Life = Number($('#player1life').text());
        player1Life--;
        $('#player1life').text(player1Life);
    });
});