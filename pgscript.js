//on the click of start_ups nav link, display the section of portfolio; same for about_olivia nav link

$(document).ready(function(){
    
$("#nav-startup").click(function(){
    $(".portfolio-stack").show();
    $(".about-wrapper").hide();
    $("#hero").hide();
   });

$("#nav-about").click(function(){
    $(".about-wrapper").show();
    $(".portfolio-stack").hide();
    $("#hero").hide();
   });

       
$("#nav-home").click(function(){
    $(".portfolio-stack").hide();
    $(".about-wrapper").hide();
    $("#hero").show();

   });

/*  To expan the portfolio detail info upon clicking the title. there is a better way to structure this but due to time constrain, I will settle with this for now. The better way is to put the details in another div that is hidden and toggle it upon clicking the title*/

$(".portfolio-title:nth-child(1)").css("cursor","pointer"); //cursor on text turn to pointer for better UX

$(".portfolio-title:nth-child(1)").click(function(){
    $(this).parent().css({height:"150vh", position:"absolute",top:"8vh","z-index":99, opacity:1},2000);
    $(this).css({"padding-top":0,"margin-top":0},2000);
})


$(".btn").click(function(){
    $(".portfolio").css({height:"25vh", position:"relative",top:0,"z-index":1, opacity:0.8},5000)
    $(".portfolio-title").css({"padding-top":"10vh","margin-top":"10vh"},5000);
})


});

// function to use random number generator to select through word and quote array and set time interval to run this function

let focusWords = [`an entre-preneur`,`an environ-mentalist`,`a mother`,`an explorer`,`a full-stack developer`,`a learner`,`a social innovator`]

let changeText = function(){
    let num = Math.floor(Math.random()*6);
   $(".focus").find("strong").fadeIn(1000).text(focusWords[num]);
}

setInterval(changeText,4000);


// animation on the self description on the about me section: selecting phrases with span for effects 

$(".text-container").mouseenter(function(){
    $(this).find("span").animate({color:"#636866",
    "font-size": 35 + "px",
    "font-family":"Playfair+Display", "padding-left":10+"px", "padding-right":10+"px"},1000)    });  
$(".text-container").mouseleave(function(){
    $(this).find("span").animate({color:"#55ebd2",
        "font-size": 1.1 + "rem", "font-family":"Niramit", "padding-left":0, "padding-right":0}, 500)
   
});



