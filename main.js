$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
        console.log("anjas");

      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });


$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);




// var i = 1;


// $("#btn").on("click", function() {
//     showImg(i+1);
// })


// function showImg(n) {
//     if(n > 3) n = 1;
//     if(n < 1) n = 3;

//     var currActive = $(".active");
//     currActive.removeClass("active");

//     var newActive = $(".slide-img").eq(n-1);
//     newActive.addClass("active");

//     i = n;
// }
  