// Demonstrate understanding of DOM manipulation and events. Build familiarity with JS syntax.

function myfunc(){
    var output="I am right";
    document.getElementById("wrapper").innerHTML=output;
}
function func2(){
    document.getElementById("wrapper").innerHTML="No I am right";
}
function hoverOver(){
   // document.getElementbyId("element")
    alert("Hey, I told you not to hover over me!")
}

function validForm(e){
    //preventDefault

    let num=12345678;
    let passwd=document.getElementById("password").value;

   // let message="valid password";
    if(passwd==num){
       document.getElementById("text").innerHTML="valid password";
    }
    else
        alert("wrong password");
}

