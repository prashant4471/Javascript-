function del(btn){
    btn.parentNode.remove();
}

function addnew(two){
    two.removeAttribute("class");
    two.setAttribute("class","fas fa-check-circle");
    two.removeAttribute("onclick");
    two.setAttribute("onclick","change(this)")
    two.parentNode.removeAttribute("class");
    two.parentNode.setAttribute("class","ins checked")
    var n=two.parentNode.parentNode;
    document.getElementById("inp2").appendChild(n);
}

function change(three){
    three.removeAttribute("class");
    three.setAttribute("class","fas fa-check");
    three.removeAttribute("onclick");
    three.setAttribute("onlick","addnew(this)")
    three.parentNode.removeAttribute("class");
    three.parentNode.setAttribute("class","ins check")
    var n=three.parentNode.parentNode;
    document.getElementById("inp1").appendChild(n);
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
    var d=document.createElement("button");
    d.setAttribute("class","ins check");
    var e=document.createElement("i");
    e.setAttribute("class","fas fa-check");
    e.setAttribute("onlclick","addnew(this)");
    var f=document.createElement("button");
    f.setAttribute("class","ins del");
    f.setAttribute("onclick","del(this)")
    var g=document.createElement("i");
    g.setAttribute("class","fas fa-trash-alt");
    f.appendChild(g);
    d.appendChild(e);
    a.appendChild(c);
    a.appendChild(d);
    a.appendChild(f);
    document.getElementById("inp1").appendChild(a);
}
