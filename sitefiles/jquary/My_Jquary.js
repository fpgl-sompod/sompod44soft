//Bellow code for static nav-bar
//..............................

$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $('#header1').innerHeight();
        if ($(window).scrollTop() > navHeight) {
            $('.navbar1').addClass('navbar-fixed-top');
            my(true);
        }
        else {
            $('.navbar1').removeClass('navbar-fixed-top');
            my(false);
        }
    });
});
//..............................


//Bellow code for set current year
//..............................
$(document).ready(function () {
    var d = new Date();
    var n = d.getFullYear();
    $('#cp').text("© "+n+" Copyright:");
});
//..............................


//Bellow code for increasing the margin of Game maker cover picture.
function my(v) {
    if (v == true) {
        $('.bb').css("margin-top", "75px");
    } else {
        $('.bb').css("margin-top", "0px");
    }
}

$(document).ready(function(){
    $('#g1').click(function(){
        
    });
});
