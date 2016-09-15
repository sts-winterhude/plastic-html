$(document).ready(function() {
    $('ul.tabs').tabs();
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50});
    $('.modal-trigger').leanModal();
});

$('.trotzdem').click( function() {
    $("#table").toggleClass("hide-on-small-and-down");
} );
