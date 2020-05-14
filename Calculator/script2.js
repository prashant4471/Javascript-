function final(){
    document.getElementById("final-value").innerHTML=0;
    num1="";
    num2="";
    res="";
    count=0;
}

function output(){
    document.getElementById("output-value").innerHTML=0;
}

function resul(num){
    document.getElementById("output-value").innerHTML=num;
}

function finres(result){
    document.getElementById("final-value").innerHTML=result;
}

var count=0;
var res="";
var num1="";
var num2="";

function add(i){
    var n=document.getElementById(i).innerText;
    if(count==0){
    res+=n;
    num1+=n;
    }
    else{
        res+=n;
        num2+=n;
    }
   resul(res);
}

var operator;

function oper(op){
    operator=op;
    res+=operator;
    count=1;
    resul(res);
}

var result;
var temp;

function finresult(){
    if((num1!=""&&num2!="")||(num1==0)){
        num1=Number(num1);
        num2=Number(num2);
        switch (operator) {
            case "%": result=num1%num2;
                      break;
            case "/": result=num1/num2;
                      break;
            case "+": result=num1+num2;
                      break; 
            case "-": result=num1-num2;
                      break;
            case "*": result=num1*num2;
                      break;
        }
}
    else{
        alert("one of the parameters is missing");
    }
    num1=result;
    temp=num2;
    num2="";
 
    finres(result);
}

// function cut(){
//     if(count==0){
//         res=res.slice(0,-1);
//         num1=num1.slice(0,-1);
//         resul(res);
//     }
//     else{
//         if(temp==""&&num2==""){
//             res=res.slice(0,-1);
//             count=0;
//             resul(res);
            
//         }
//         else{
//             res=res.slice(0,-1);
//             if(num2.length>1){
//                 num2=num2.slice(0,-1);
//             }
//             else{
//                 num2="";
//             }
            
//             resul(res);
//         }
//     }
// }

