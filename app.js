function excuseGnerator(){
    let who = ["An ufo ","Noa ","A virus ","Lord Vader "];
    
    let action = ["stole ","killed ","kidnapped ","melted "];
    
    let what = ["my cofee ", "a hobbit ","a civilian ", "my neighboors house "];
    
    let when = ["after school. ", "yesterday. ", "this morning. ", "at the ragnarok. "];

    fullExcuse = "";
    
    let indexWho = Math.floor(Math.random()*who.length);
    let indexAction = Math.floor(Math.random()*action.length);
    let indexWhat = Math.floor(Math.random()*what.length);
    let indexWhen = Math.floor(Math.random()*when.length);
    

 return fullExcuse.concat(who[indexWho], action[indexAction], what[indexWhat], when[indexWhen]);
}
document.write(excuseGnerator());