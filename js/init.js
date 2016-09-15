$(document).ready(function() {
    $('ul.tabs').tabs();
    $(".button-collapse").sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50});
    $('.modal-trigger').leanModal();
});

$('.trotzdem').click( function() {
    $("#table").toggleClass("hide-on-small-and-down");
} );
