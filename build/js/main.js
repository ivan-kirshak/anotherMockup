let introBox=document.querySelector(".intro-box"),flickityOne=new Flickity(introBox,{prevNextButtons:!1,freeScroll:!0,cellSelector:".intro-box-item"}),blogItmes=document.querySelector(".blog-items"),flickityTwo=new Flickity(blogItmes,{draggable:!0,freeScroll:!0,cellAlign:"center",cellSelector:".blog-item"}),quotes=document.querySelector(".quotes-right"),flickityThree=new Flickity(quotes,{prevNextButtons:!1,draggable:!0,freeScroll:!0,cellSelector:".card"});