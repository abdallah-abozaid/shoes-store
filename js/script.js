    document.querySelector(".navbar-toggler").onclick = function () {
        document.querySelector(".navbar-toggler span.sec-p").classList.toggle("open")
    }
let myheader=document.querySelector(".myhaeder");
let myfooter=document.querySelector(".myfooter");
let mymain1=document.querySelector(".main1");
let abd=document.querySelector(".abd");

let header_height=myheader.offsetHeight 
mymain1.style.height=window.innerHeight - header_height +"px"
myfooter.style.height=window.innerHeight - header_height +"px"



console.log(abd.offsetHeight);
abd.style.height = myheader.offsetHeight + "px"
console.log(abd.offsetHeight);



// smooth scrooll
var main2=document.querySelector(".main2");
var scrolling=document.querySelector(".main1 > i");
scrolling.onclick=function(){
scrolling.scrollIntoView({
    behavior:"smooth"
})
}

//loader
var loader = document.querySelector(".loader");
window.onload=function(){
    loader.classList.toggle("hide")
}
