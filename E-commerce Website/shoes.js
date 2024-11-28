const hiddenSec=document.getElementById("hide-sec");
const hamburger=document.getElementById("hamburger");
const hide=document.getElementById("hide");

hiddenSec.style.display="none";

hamburger.addEventListener("click",function(){
    if(hiddenSec.style.display==="none"){
        hamburger.style.display="none";
        hiddenSec.style.display="block";
    }
})

hide.addEventListener("click",function(){
    if(hiddenSec.style.display==="block"){
        hamburger.style.display="block";
        hiddenSec.style.display="none";
    }
})

function funOpen(){
    parent.window.open("index.html" ,"_self"); 
}


function  cosmetic_window(){
    window.open("makeup_frame.html","_self");
}

function add_to_cart(thisObj){
    var sup=parent.index_html.document.getElementById("sup")
    var sup1=document.getElementById("sup")
    sup.innerText=parseInt(sup.innerText)+1
    sup1.innerText=parseInt(sup1.innerText)+1


    // var item=document.createElement("div");
    // item.appendChild( thisObj.parentNode.parentNode.parentNode)
    // var items=parent.cart_html.document.getElementById("items")
    // items.appendChild(item)

    

//    var item= document.createElement( thisObj.parentNode.parentNode.parentNode)
//    var items=parent.cart_html.document.getElementById("items")
//    items.appendChild(item)
//    console.log(items)
}

function buyNow(m_card_img,m_card_title,m_card_text,m_card_price){

}

function buyNowFuntion(){
   parent.window.open("payment.html","_self");
}

function funA(){
   parent.window.open("./about-us.html","_self");

}

function funC()
{
    parent.window.open("./contact.html","_self");
    
}