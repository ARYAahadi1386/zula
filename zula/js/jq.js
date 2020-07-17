$(document).ready(function () {
    $(window).scroll(function(){
        if($(window).scrollTop()>300) {
            $("#backtotop").show();
        } else {
            $("#backtotop").hide();
        }
    })
    $("#backtotop").click(function(e){
        $('html,body').animate({scrollTop: 0});
    })
    
    
        
        
    
    
        
      
        $(".btnToggleMenu").click(function(){
            if($("li").css("display")=="none"){
                $("li").first().fadeIn(200,function next(){
                    $(this).next("li").fadeIn(200,next)
                })
            }else{
                $("li:last-child").fadeOut(200,function prev(){
                    $(this).prev("li").fadeOut(200,prev)

                });
            }
        });
});


