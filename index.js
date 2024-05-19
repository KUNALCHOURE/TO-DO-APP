let btn=document.querySelector("button")
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let inp=document.querySelector("input");

    let li=document.createElement("li");
    li.innerText=inp.value;
    ul.appendChild(li);

    let delbtn=document.createElement("button")
    delbtn.innerText="DELETE";
    delbtn.classList.add("deleltebtn");
    li.appendChild(delbtn);
     inp.value="";
    console.log("clicked");

})



