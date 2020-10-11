function excuseGnerator(){
    let who = ["An ufo ","Noa ","A virus ","Lord Vader "];
    
    let action = ["stole ","killed ","kidnapped ","melted "];
    
    let what = ["my cofee ", "a hobbit ","a civilian ", "my neighboors house "];
    
    let when = ["after school. ", "yesterday. ", "this morning. ", "at the ragnarok. "];
    
    let i = Math.floor(Math.random()*4);
    let r = Math.floor(Math.random()*4);
    let e = Math.floor(Math.random()*4);
    let j = Math.floor(Math.random()*4);
    
    return who[i] + action[e] + what[r] + when[j];  
}
document.write(excuseGnerator());