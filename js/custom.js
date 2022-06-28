/*$(function(){
  $(".nav > li,header > .bg").mouseover(function(){
    $(".sub").css("display","block");
    $("header > .bg").css("display","block");
  });
  $(".nav > li,header > .bg").mouseout(function(){
    $(".sub").css("display","none");
    $("header > .bg").css("display","none");
  });
});
*/

$(function(){
  $(".nav > li,header > .bg").mouseenter(function(){
    $(".sub").stop().slideDown();
    $("header > .bg").stop().slideDown();
  });
  $(".nav > li,header > .bg").mouseleave(function(){
    $(".sub").stop().slideUp();
    $("header > .bg").stop().slideUp();
  });
});
