
/* Web Programming Final Course Project;
Name: Abubakar Siddique;
Matriculation Number: 68225;
Email: absmizi@live.com;
HsKA Webmail:siab1012@hs-karlsruhe.de;
Instructor: Sybil Adams */



/*Domino's Pizza Store */

$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});