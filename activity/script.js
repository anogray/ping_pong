//it represents whole page
let d = document;

const bar1 = d.querySelector("#one");
const bar2 = d.querySelector("#two");
const ball = d.querySelector("#ball");
const body = d.querySelector("body");

body.addEventListener("keyboard", function (e){
//console.log(e);
let bound = body.clientHeight;
let b1top = Number((bar1.style.top.slice(0,-2)));

    if(event.key == "w" && b1top > 0)
{
   bar1.style.top = (b1top - 100) + "px";
}
if(event.key == "s" && b1top < bound-176)
{
    bar1.style.top = (b1top + 100) + "px";
}

//console.log(b1top);
let b2top = Number((bar2.style.top.slice(0,-2)));

    if(event.key == "ArrowUp" && b2top > 0)
{
   bar2.style.top = (b2top - 100) + "px";
}
if(event.key == "ArrowDown" && b2top < bound-176)
{
    bar2.style.top = (b2top + 100) + "px";
}


})


