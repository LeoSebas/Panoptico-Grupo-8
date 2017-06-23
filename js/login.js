$( document ).ready(function () {
   $( "#email-login" ).autocomplete({
        minLength:0,
        position: { my : "left top", at: "left bottom", within:"#email-login"},
        source: ["cliente@mail.com","tecnico@mail.com", "at-cliente@mail.com" ]    
    });
    
    
   $("#login").click(function(){
       var user = $("#email-login").val();
       var pass = $("#pass-login").val();
       if (user === pass){ 
           switch (user) {
           case "cliente@mail.com":
               dir = "cliente/index.html"; $("#err-pass").css("display", "none"); $("#err-user").css("display", "none"); break;
           case "tecnico@mail.com":
               dir="tecnica/tecnico/index.html";$("#err-pass").css("display","none"); $("#err-user").css("display","none");break;
           case "jefe-tecnico@mail.com":    
               dir="tecnica/Jefe-area-tecnica/index.html";    $("#err-pass").css("display","none"); $("#err-user").css("display","none"); break;
           case "admin@mail.com":           
               dir="administracion/administrador/index.html";    $("#err-pass").css("display","none"); $("#err-user").css("display","none"); break;
           case "jefe-admin@mail.com":      
               dir="administracion/jefe-administracion/index.html";    $("#err-pass").css("display","none"); $("#err-user").css("display","none"); break;
           case "at-cliente@mail.com":      
               dir="comercializacion/at-cliente/index.html";    $("#err-pass").css("display","none"); $("#err-user").css("display","none"); break;
           case "jefe-at-cliente@mail.com": 
               dir="comercializacion/jefe-at-cliente/index.html";    $("#err-pass").css("display","none"); $("#err-user").css("display","none"); break;
           case "gerente@mail.com":         
               dir="gerente/index.html";    $("#err-pass").css("display","none"); $("#err-user").css("display","none"); break;
           default:
           $("#err-user").css("display","block"); 
       }
       }else{
           $("#err-pass").css("display","block");
           dir="#";
       }
       $("#login").attr("href",dir);
   });

});