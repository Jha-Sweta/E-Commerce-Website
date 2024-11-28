var lo_btn=document.getElementById("lo-btn");
lo_btn.addEventListener("click",function(){
    window.open("index1.html","_self")
})

jQuery(document).ready(function($) {

    //Count nr. of square classes
    var countSquare = $('.square').length;
  
    //For each Square found add BG image
    for (i = 0; i < countSquare; i++) {
      var firstImage = $('.square').eq([i]);
      var secondImage = $('.square2').eq([i]);
  
      var getImage = firstImage.attr('data-image')
      var getImage2 = secondImage.attr('data-image');
  
      firstImage.css('background-image', 'url(' + getImage + ')');
      secondImage.css('background-image', 'url(' + getImage2 + ')');
    }
  
  });

var c2_b=document.getElementById("c2_b");
c2_b.addEventListener("click",function(){
    window.open("makeup_frame.html","_self");
})

var c3_b=document.getElementById("c3_b")
c3_b.addEventListener("click",function(){
  window.open("watch_frame.html","_self");
  
})

function phoneF(){
  window.open("phone_frame.html","_self");

}

function purseF(){
  window.open("purse_frame.html","_self");

}

function shoesF(){
  window.open("shoes_frame.html","_self");

}

function dressF(){
  window.open("dress_frame.html","_self");

}

function makeupF(){
  window.open("makeup_frame.html","_self");

}

function watchF(){
  window.open("watch_frame.html","_self");

}

function furnitureF(){
  window.open("furniture_frame.html","_self");

}

function tvF(){
  window.open("tv_frame.html","_self");

}

function washingF(){
  window.open("washing_frame.html","_self");

}

function headF(){
  window.open("head_frame.html","_self");

}