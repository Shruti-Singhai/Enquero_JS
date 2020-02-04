var todo =[];
var c=0;
ht=""
for(i=1;i<=localStorage.length;i++){
    var task = localStorage.getItem(i)
    console.log(task)
    ht+=`<li>`+task+`<button onclick=list(i)>Remove</button></li>`
}
function Sbmt(){
    var ele =document.getElementById("ip");
    c=localStorage.length+1;
    localStorage.setItem(c,ele.value);
        var task = localStorage.getItem(i)
        console.log(task)
        if(task==ele.value)
            ht+=`<li>`+task+`<button onclick=list(i)>Remove</button></li>`
        ele.value=""
    console.log(ht)
    document.getElementById("ul").innerHTML = ht
}
function list(i){
    ht=""
    localStorage.removeItem(i);
    for(i=1;i<=localStorage.length;i++){

        var task = localStorage.getItem(i)
        console.log(task)
        if(task!=null)
            ht+=`<li>`+task+`<button onclick=list(i)>Remove</button></li>`
    }
    document.getElementById("ul").innerHTML = ht
}


