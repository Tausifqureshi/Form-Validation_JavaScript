let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let  password= document.getElementById("password");
let  u_password= document.getElementById("confirm_password");

   
form.addEventListener('submit',(event)=>{
    event.preventDefault();
     validate() //function hai ye?
    })


function sendData(sRate,count){
if (sRate === count) {
    alert("Success full registration");
    location.href =`https://www.amazon.in`;
} }

const successMes =()=>{
let formCon = document.getElementsByClassName("form-control");
let count = formCon.length-1;
for(let i=0; i<formCon.length; i++){
    if(formCon[i].className === 'form-control success'){
        let  sRate = 0 + i;2
        sendData(count,sRate);
}else{
    return false;}
}
}
//more emile function defiend?  
let isEmail = (emailVal) =>{   //parameter hai ye?
    let atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false
    let dot = emailVal.lastIndexOf('.');
    if(dot < atSymbol + 2) return false;  //2 world ke baad hi ana .. dots?
    if(dot === emailVal.length -1) return false;
    return true; //agar sub kuch sahi tu true return hoga?
}


//validate Function Defiend hora hai ye?
let validate = ()=>{
let usernameVal= username.value.trim();
let emailVal = email.value.trim();
let phoneVal = phone.value.trim();
let passwordVal= password.value.trim();
let cPasswordVal= confirm_password.value.trim(); //ye confirm_password id arihai varibal nhi?
//Validate Username
if(usernameVal === ""){
    setErrorMsg(username, 'username cannot be blank')
}else if(usernameVal.length < 2){
    setErrorMsg(username, 'username 3 charchter')

}else{
    setSuccess(username); //success ke liye call hora ye method 

}

 //Validate Email
 if(emailVal === ""){
    setErrorMsg(email, 'Email cannot be blank')
}else if(!isEmail(emailVal)){      //function call hora hai ye us me value passed hori hai?
    setErrorMsg(email, 'Not a valid email')
}else{
    setSuccess(email);
  
}

  //Validation Phone 
if(phoneVal === ""){
    setErrorMsg(phone, 'Enter your number')
}else if(isNaN(phoneVal)){
    setErrorMsg(phone,'only number allow')
}else if(phoneVal.length != 10){        //10 ke baraber nhi tu error?
    setErrorMsg(phone, 'Only 10 digit number')
}else{
    setSuccess(phone);
}


 //Validation password? 
 if(passwordVal === ""){
    setErrorMsg(password, 'Enter your password')
}else if(passwordVal.length <= 5){        //5 ke baraber nhi tu error 6 number lega?
    setErrorMsg(password, 'Minimum six character')
}else{
    setSuccess(password);
}
 //Validation C-Password? 
 if(cPasswordVal === ""){
    setErrorMsg(u_password, 'Enter your Confrim-password')
}else if(passwordVal !== cPasswordVal){        //passwod matching hai ya nhi?
    setErrorMsg(u_password, 'Password dose not match')
}else{
    setSuccess(u_password);
}
successMes()


}



function setErrorMsg(input, errormsg){  //2parameter pass first kon se input field ka hai ka hai 2error ke liye?
    const form = input.parentElement;
    const small = form.querySelector("small")
    form.className = 'form-control error'
    small.innerText = errormsg;
  }

  //Success ke liye function defeind hora ye means green border hoga?
  function setSuccess(el){  //is parameters se jis input ki value right borderColor green hoga?
    const form = el.parentElement;
    form.className = 'form-control success'
  }

