let introBox=document.querySelector(".intro-box"),flickityOne=new Flickity(introBox,{prevNextButtons:!1,freeScroll:!0,cellSelector:".intro-box-item"}),blogItmes=document.querySelector(".blog-items"),flickityTwo=new Flickity(blogItmes,{draggable:!0,freeScroll:!0,cellAlign:"center",cellSelector:".blog-item"}),quotes=document.querySelector(".quotes-right"),flickityThree=new Flickity(quotes,{prevNextButtons:!1,draggable:!0,freeScroll:!0,cellSelector:".card"}),collapseClick=document.getElementsByClassName("question-heading");function handleClick(){let e=this.nextElementSibling;console.log(this.firstElementChild.src),"flex"===e.style.display?(e.style.display="none",this.firstElementChild.src="./images/open.svg"):(e.style.display="flex",this.firstElementChild.src="./images/close.svg")}for(let e=0;e<collapseClick.length;e++)collapseClick[e].addEventListener("click",handleClick,!1);