var score = parseInt(0);
var question = parseInt(0);
var block;
var correctJava =[1,1,1];
var corJava = [];
var qes;



function start(){
    document.getElementById("start-btn").style.display ="none";
    document.getElementById("question0").style.display ="block";
}

function check(btnId){
    for(var i=0;i<4;i++){
        if(document.forms[btnId].elements[i].checked){
            corJava[btnId]=i;
        }
    }
    block = "correct" + btnId;
    if(corJava[btnId] == correctJava[btnId]){
        document.getElementById(correct).style.visibility ="visibile";
        document.getElementById(correct).innerHTML = "Correct !!!";
    }else{
        document.getElementById(correct).innerHTML = "Wrong !!!";
    }
}

function checkSQL(btnId){
    for(var i=0;i<4;i++){
        if(document.forms[btnId].elements[i].checked){
            corJava[btnId]=i;
        }
    }
    block = "correct" + btnId;
    if(corJava[btnId] == correctJava[btnId]){
        document.getElementById(correct).style.visibility ="visibile";
        document.getElementById(correct).innerHTML = "Correct !!!";
    }else{
        document.getElementById(correct).innerHTML = "Wrong !!!";
    }
}
function checkSoftware(btnId){
    for(var i=0;i<4;i++){
        if(document.forms[btnId].elements[i].checked){
            corJava[btnId]=i;
        }
    }
    block = "correct" + btnId;
    if(corJava[btnId] == correctJava[btnId]){
        document.getElementById(correct).style.visibility ="visibile";
        document.getElementById(correct).innerHTML = "Correct !!!";
    }else{
        document.getElementById(correct).innerHTML = "Wrong !!!";
    }
}


function checkEnglish(btnId){
    for(var i=0;i<4;i++){
        if(document.forms[btnId].elements[i].checked){
            corJava[btnId]=i;
        }
    }
    block = "correct" + btnId;
    if(corJava[btnId] == correctJava[btnId]){
        document.getElementById(correct).style.visibility ="visibile";
        document.getElementById(correct).innerHTML = "Correct !!!";
    }else{
        document.getElementById(correct).innerHTML = "Wrong !!!";
    }
}