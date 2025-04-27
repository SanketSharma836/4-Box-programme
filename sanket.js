let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;

})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML = "<h1>1</h1>";
})



let s2 = document.getElementById("sq2");
let clr = "green";
s2.addEventListener("mouseenter",function(){
    if (clr=="green"){
        s2.style.backgroundColor = "green";
        clr="red";
    }
    else if(clr == "red") {
        s2.style.backgroundColor = "red";
        clr ="blue";
    }

    else {
        s2.style.backgroundColor = "blue";
        clr="green"
    }
    

})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor = "white";

})


let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    s3.style.backgroundColor = `rgb(${a},${b},${c})`
    

})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor = "white";
    
})



let s4 = document.getElementById("sq4");
s4.addEventListener("mouseover",function(){
    this.innerHTML = "Well Done"
}) 



    