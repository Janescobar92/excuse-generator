function excuseGnerator(){
    let who = ["An ufo ","Noa ","A virus ","Lord Vader "];
    
    let action = ["stole ","killed ","kidnapped ","melted "];
    
    let what = ["my cofee ", "a hobbit ","a civilian ", "my neighboors house "];
    
    let when = ["after school. ", "yesterday. ", "this morning. ", "at the ragnarok. "];
    
    let indexWho = Math.floor(Math.random()*4);
    let indexAction = Math.floor(Math.random()*4);
    let indexWhat = Math.floor(Math.random()*4);
    let indexWhen = Math.floor(Math.random()*4);
    
    return who[indexWho] + action[indexAction] + what[indexWhat] + when[indexWhen];  
}
document.write(excuseGnerator());