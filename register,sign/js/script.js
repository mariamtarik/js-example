var signInEmail=document.getElementById("signInEmail");
var signInPassword=document.getElementById("signInPassword");
var signUpUsername=document.getElementById("signUpUsername");
var signUpEmail =document.getElementById("signUpEmail");
var signUpPassword=document.getElementById("signUpPassword");
var out=document.getElementById("out");
var signOut=document.getElementById("signOut");
var usersContainer=[];
if (localStorage.getItem("usersList") == null) {
   usersContainer = [];
}
else {
   usersContainer = JSON.parse(localStorage.getItem("usersList"));
  
}

function addUsers(){
   if(checkInputs()==true){
      out.textContent="All inputs is required";
      out.style.color="red";
   }
   else if(checkInputs()==false){
      out.textContent="complete your data";
      out.style.color="red";
   }
else if(checkEmailEuality()==true){
      out.textContent="email already exists"; 
      out.style.color="red";
 }
 else if(validateEmail()==false){
    out.textContent="It is not an Email";
    out.style.color="red";
 }
else{
    var userData={
        name:signUpUsername.value ,
         Email:signUpEmail.value,
         password:signUpPassword.value
    }
   usersContainer.push(userData);
localStorage.setItem("usersList", JSON.stringify(usersContainer));
   out.textContent="Success";
out.style.color="green";
}
}
function checkInputs(){
   if(signUpUsername.value=="" && signUpEmail.value=="" && signUpPassword.value==""){
       return true;
   }
   else if(signUpUsername.value=="" || signUpEmail.value=="" || signUpPassword.value=="") {
       return false;
   }
}
function validateEmail(){
   var regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(signUpEmail.value)==true){
          return true;
      }
    else{
   return false;
   }
   }
  
function checkEmailEuality(){
   var x=false;
for(var i=0;i<usersContainer.length;i++){
   if(signUpEmail.value==usersContainer[i].Email){
      x=true;
      break;
   }
}
return x;
}

function loginIn(){

   for(var i=0;i<usersContainer.length;i++){
      if(signInEmail.value=="" && signInPassword.value==""){
         signOut.textContent="All inputs is required";
      }
      else if(signInEmail.value==""){
         signOut.textContent="your Email is required";
      }
      else if(signInPassword.value==""){
         signOut.textContent="your password is required";
      }
     else if(signInEmail.value==usersContainer[i].Email && signInPassword.value==usersContainer[i].password ){
         localStorage.setItem("userEnter", usersContainer[i].name);
         location.replace("home.html");
         break;
      }
      else {
         signOut.textContent="incorrect email or password";
      }
     
   }
}
var username = localStorage.getItem("userEnter");
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username;
}

function removeUser(){
   localStorage.removeItem("userEnter");

}












