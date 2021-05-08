
var wb = 0;

$(document).ready(function () { //this function active and deactive the button group.
    $('#button1').addClass("active");
    Set_the_hoverimages("games");
    wb = 1;
    $('#button1').click(function () {
        Set_the_hoverimages("games");
        $('#button1').addClass("active");
        $('#button2').removeClass("active");
        $('#button3').removeClass("active");
        wb = 1;
    });
    $('#button2').click(function () {
        Set_the_hoverimages("application");
        $('#button1').removeClass("active");
        $('#button2').addClass("active");
        $('#button3').removeClass("active");
        wb = 2;
    });
    $('#button3').click(function () {
        Set_the_hoverimages("desktop");
        $('#button1').removeClass("active");
        $('#button2').removeClass("active");
        $('#button3').addClass("active");
        wb = 3;
    });
});


function Set_the_hoverimages(whichbutton) {
    if (whichbutton == "games") {
        $('#he6').show();
        $('#he5').show();
        $('#he4').show();
        $('#he3').show();
        $('#he2').show();
        $('#he1').show();
    }
    else if (whichbutton == "application") {
        $('#he6').hide();
        $('#he5').hide();
        $('#he4').hide();
        $('#he3').show();
        $('#he2').show();
        $('#he1').show();
    }
    else if (whichbutton == "desktop") {
        $('#he6').hide();
        $('#he5').hide();
        $('#he4').hide();
        $('#he3').hide();
        $('#he2').show();
        $('#img2').attr("src","sitefiles/images/Edit-Me_2.png");
        $('#he1').show();
        $('#img1').attr("src","sitefiles/images/Edit-Me_3.png");
    }
}


$(document).ready(function () {
    $('#viewall').click(function () {
        switch (wb) {
            case 1:
                window.open("sitefiles/games.php","_self");
                break;
            case 2:
                    window.open("sitefiles/application.php","_self");
                break;
            case 3:
                    window.open("sitefiles/desktop.php","_self");
                break;
        }
    });
});
