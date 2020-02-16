let name,age;
let defaultname = '', defaultage = '';
name = prompt("What's your name",defaultname);
while(name==null||name==''||isNaN(name)==false){
    if(isNaN(name)==false||name==null||name==''){
    defaultname = name;
    
    name = prompt('You must enter the valid name!',defaultname);
    }
}
 age = prompt('age', defaultage);
while(age==null||age==''||isNaN(Number(age))){
   
    if(age==null || age=='' || isNaN(Number(age))){
    defaultage = age;
    age = prompt('You must enter your age again, it was not accepted, please write a number!', defaultage);
    }
}

if(age<18){
    alert(`You are not allowed to visit this website`);

}
else if(age>=18 && age<=22){
    let question = confirm(`Are you sure you want to continue?`);
    if(question == true){
        alert('Welcome, ' + name);
    }
    else{
        alert(`You are not allowed to visit this website`);
    }
}
else{
    alert('Welcome, ' + name);
}