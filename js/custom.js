/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT

    http://opensource.org/licenses/MIT

    100% Free To use For Personal And Commercial Use.

    IN EXCHANGE JUST TELL PEOPLE ABOUT THIS WEBSITE
   
========================================================  */           

$(document).ready(function () {
    
    /*====================================
           METIS MENU 
     ======================================*/

    $('#main-menu').metisMenu();

    /*======================================
    LOAD APPROPRIATE MENU BAR ON SIZE SCREEN
    ========================================*/

    $(window).bind("load resize", function () {
        if ($(this).width() < 768){ 
            $('div.sidebar-collapse').addClass('collapse');
	    $('nav#sidebar-opc').removeClass('sidebar');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
	    $('nav#sidebar-opc').addClass('sidebar');
        }
    });
    /*======================================
   WRITE YOUR SCRIPTS BELOW
   ========================================*/
   
   

});
      