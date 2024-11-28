var login_btn=document.getElementById("login-btn");
login_btn.addEventListener("click",function(){
  window.open("login.html","_self");

})

jQuery(document).ready(function($) {

    //Count nr. of square classes
    var countSquare = $('.square').length;
  
    //For each Square found add BG image
    for (i = 0; i < countSquare; i++) {
      var firstImage = $('.square').eq([i]);
      var secondImage = $('.square2').eq([i]);
  
      var getImage = firstImage.attr('data-image');
      var getImage2 = secondImage.attr('data-image');
  
      firstImage.css('background-image', 'url(' + getImage + ')');
      secondImage.css('background-image', 'url(' + getImage2 + ')');
    }
  
  });


  
  var sn_btn=document.getElementById("sn-btn");
  sn_btn.addEventListener("click",function(){
    window.open("login.html","_self");
  })