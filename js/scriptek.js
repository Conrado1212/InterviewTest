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
    qes = btnId;
    for(var i=0;i<4;i++){
        if(document.forms[btnId].elements[i].checked){
            corJava[btnId]=i;
        }
    }
    block = "correct" + btnId;
    if(corJava[btnId] == correctJava[btnId]){
        score++;
        document.getElementById(block).style.visibility ="visible";
        document.getElementById(block).innerHTML = "Correct !!!";
    }else{
        document.getElementById(block).style.visibility ="visible";
        document.getElementById(block).innerHTML = "Wrong !!!";
    }

    document.getElementById(btnId).value = "Next";
    document.getElementById(btnId).setAttribute("onclick","next()");
}

function next(){
    var nowQuestion = "question" + qes;
    document.getElementById(block).style.visibility = "hidden";
    if(qes == 2){
        document.getElementById(nowQuestion).style.display = "none";
        finalScore();
    }else{
        document.getElementById(nowQuestion).style.display = "none";
        qes++;
        var newQuestion = "question" + qes;
        document.getElementById(newQuestion).style.display = "block";
    }
}


function finalScore(){
    document.getElementById("correct").style.display = "block";
    document.getElementById("correct").innerHTML = "Your scored: " + score + "/3";
}