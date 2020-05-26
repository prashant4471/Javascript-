function del(btn){
    btn.parentNode.remove();
}


function addele(){
    var x=document.getElementById("new").value;
    document.getElementById("new").value="";
    var a=document.createElement("div");
    a.setAttribute("class","two");
    var b=document.createTextNode(x);
    var c=document.createElement("p");
    c.appendChild(b)
    c.setAttribute("class","add");
    var f=document.createElement("button");
    f.setAttribute("class","ins del");
    f.setAttribute("onclick","del(this)")
    var g=document.createElement("i");
    g.setAttribute("class","fas fa-trash-alt");
    f.appendChild(g);
    a.appendChild(c);
    a.appendChild(f);
    document.getElementById("inp1").appendChild(a);
}
