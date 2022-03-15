
let btntop =document.getElementById("btntop");

btntop.addEventListener("click", function(e){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
});