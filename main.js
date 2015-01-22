$(document).ready( function() {
   var $main = $('nav a').eq(0);
   var $City = $('nav a').eq(1);
   var $Abstract = $('nav a').eq(2);
   var $Food = $('nav a').eq(3);
   var $Nightlife = $('nav a').eq(4);
   var $Animals = $('nav a').eq(5);
   var $Nature = $('nav a').eq(6);


   $main.click(function (event) {
     event.preventDefault();
     var $myLi = $(this).closest("li");
     var $mySiblings = $myLi.siblings();

     $mySiblings.removeClass("activeNav");
     $myLi.addClass("activeNav");

     $('.main').siblings().removeClass("active");
     $('.main').addClass("active");

   });

   $City.click(function (event) {
     event.preventDefault();
     var $myLi = $(this).closest("li");
     var $mySiblings = $myLi.siblings();

     $mySiblings.removeClass("activeNav");
     $myLi.addClass("activeNav");

     $('.City').siblings().removeClass("active");
     $('.City').addClass("active");

   });

     $Abstract.click(function (event) {
     event.preventDefault();

     $(this).closest("li").siblings().removeClass("activeNav");
     $(this).closest("li").addClass("activeNav");
     $('.Abstract').siblings().removeClass("active");
     $('.Abstract').addClass("active");

   });

   $Food.click(function (event) {
     event.preventDefault();

     $(this).closest("li").siblings().removeClass("activeNav");
     $(this).closest("li").addClass("activeNav");
     $('.Food').siblings().removeClass("active");
     $('.Food').addClass("active");

  });

  $Nightlife.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.Nightlife').siblings().removeClass("active");
    $('.Nightlife').addClass("active");

  });

  $Animals.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.Animals').siblings().removeClass("active");
    $('.Animals').addClass("active");

  });

  $Nature.click(function (event) {
    event.preventDefault();

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $('.Nature').siblings().removeClass("active");
    $('.Nature').addClass('active');

  });

  $('.City li').click(function (event){
    event.preventDefault();

    $(this).closest("li").siblings().addClass("unchosen");
    $(this).closest("li").siblings().removeClass("chosen");
    $(this).closest("li").addClass("chosen");
    $(this).closest("li").removeClass("unchosen");
    $('aside').addClass("unchosen");

  });

  $('.Abstract li').click(function (event){
    event.preventDefault();

    $(this).closest("li").siblings().addClass("unchosen");
    $(this).closest("li").siblings().removeClass("chosen");
    $(this).closest("li").addClass("chosen");
    $(this).closest("li").removeClass("unchosen");
    $('aside').addClass("unchosen");

  });

  $('.Food li').click(function (event){
    event.preventDefault();

    $(this).closest("li").siblings().addClass("unchosen");
    $(this).closest("li").siblings().removeClass("chosen");
    $(this).closest("li").addClass("chosen");
    $(this).closest("li").removeClass("unchosen");
    $('aside').addClass("unchosen");

  });

  $('.Nightlife li').click(function (event){
    event.preventDefault();

    $(this).closest("li").siblings().addClass("unchosen");
    $(this).closest("li").siblings().removeClass("chosen");
    $(this).closest("li").addClass("chosen");
    $(this).closest("li").removeClass("unchosen");
    $('aside').addClass("unchosen");

  });

  $('.Animals li').click(function (event){
    event.preventDefault();

    $(this).closest("li").siblings().addClass("unchosen");
    $(this).closest("li").siblings().removeClass("chosen");
    $(this).closest("li").addClass("chosen");
    $(this).closest("li").removeClass("unchosen");
    $('aside').addClass("unchosen");

  });

  $('.Nature li').click(function (event){
    event.preventDefault();

    $(this).closest("li").siblings().addClass("unchosen");
    $(this).closest("li").siblings().removeClass("chosen");
    $(this).closest("li").addClass("chosen");
    $(this).closest("li").removeClass("unchosen");
    $('aside').addClass("unchosen");

    /*$('.Nature li').click(function (event){
      event.preventDefault();

      $(this).closest("li").siblings().removeClass("unchosen");
      $(this).closest("li").removeClass("chosen");
      $('aside').removeClass("unchosen");
    });*/

  });





});
