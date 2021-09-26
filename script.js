$(document).ready(function (){
  $(Window).scroll(function (){
    if (this.scrollY > 30) {
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  });
  $('menu-btn').onclick(function(){
    $('.navbar .menu').toggleClass("active")
  })
});

