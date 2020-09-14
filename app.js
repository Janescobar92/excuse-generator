var who = ["An ufo ","Noa ","A virus ","Lord Vader "];

var action = ["stole ","killed ","kidnapped ","melted "];

var what = ["my cofee ", "a hobbit ","a civilian ", "my neighboors house "];

var when = ["after school. ", "yesterday. ", "this morning. ", "at the ragnarok. "];

function excuseGnerator(){
    var i = Math.floor(Math.random()*4);
    var r = Math.floor(Math.random()*4);
    var e = Math.floor(Math.random()*4);
    var j = Math.floor(Math.random()*4);
    return who[i] + action[e] + what[r] + when[j];  
}
document.write(excuseGnerator());