var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var siteNameupdate=document.getElementById("siteNameupdate");
var siteUrlupdate=document.getElementById("siteUrlupdate");
var nameError=document.getElementById("nameError");
var urlError=document.getElementById("urlError");
var nameErrorupdate=document.getElementById("nameErrorupdate");
var urlErrorupdate=document.getElementById("urlErrorupdate");
var bookMarkContainer;
if (localStorage.getItem("bookMarkList") == null) {
    bookMarkContainer = [];
}
else {
    bookMarkContainer = JSON.parse(localStorage.getItem("bookMarkList"));
    displayBookMark();
}
function addBookMark() {
if(checkInputs()==true){
if(siteNameInput.value==""){
    nameError.style.display="block";
    nameError.textContent="Name is requried";
}
if(siteUrlInput.value==""){
    urlError.style.display="block";
    urlError.textContent="url is requried";
}
}
 else if(checkInputsEuality()==true){
    nameError.style.display="block";
    nameError.textContent="this name is already exit";
}
else if(validateUrl()==false){
    urlError.style.display="block";
    urlError.textContent="it is not a url";
}
 else{
   
      
            var bookMark = {
                name: siteNameInput.value,
                url: siteUrlInput.value
            }
            bookMarkContainer.push(bookMark);

            localStorage.setItem("bookMarkList", JSON.stringify(bookMarkContainer));
            clearForm();
            displayBookMark();

        }
    }
    siteNameInput.addEventListener("keydown",function(){
        nameError.style.display="none";
    })
    siteUrlInput.addEventListener("keydown",function(){
        urlError.style.display="none";
    })
      


    function checkInputs(){
        if(siteNameInput.value=="" || siteUrlInput.value==""){
            return true;
        }
        else{
            return false;
        }
    }
function checkInputsEuality(){
    for(var i=0;i<bookMarkContainer.length;i++){
        if(bookMarkContainer[i].name==siteNameInput.value){
            return true;
        }
        else{
            return false;
        }
    }
}
function validateUrl(){
   
    var regex=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
       if(regex.test(siteUrlInput.value)==true){
           return true;
       }
     else{
    return false;
    }
    }

function clearForm() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
}
function displayBookMark() {
    var cartoona = ``;
    for (var i = 0; i < bookMarkContainer.length; i++) {
        cartoona += `<div class=" row bookMark-list mx-auto"> 
        <div col-3>
        <h3 class="pt-5 px-5">${bookMarkContainer[i].name}</h3>
        </div>
       
        <a class="btn btn-primary my-5 mr-3 px-3 py-2" href="${bookMarkContainer[i].url}" target="_blank">visit</a>
        <button onclick="deleteBookMark(${i}) " class="btn btn-danger btndelete my-5">Delete</button>
         <button onclick="update(${i})" class="btn btn-warning my-5 ml-3" data-toggle="modal" data-target="#exampleModal">
        update
      </button>
     
      </div>
    `     
;
    }
    document.getElementById("bookMark").innerHTML = cartoona;
}
function deleteBookMark(index) {
    bookMarkContainer.splice(index, 1);
    displayBookMark();
    localStorage.setItem("bookMarkList", JSON.stringify(bookMarkContainer));
}

var indexUpdate;
function update(index) {

siteNameupdate.value=bookMarkContainer[index].name;
siteUrlupdate.value=bookMarkContainer[index].url;
indexUpdate=index;
}
function  addupdateMark(){
    if(checkInputsupdate()==true){
        if(siteNameupdate.value==""){
            nameErrorupdate.style.display="block";
            nameErrorupdate.textContent="Name is requried";
        }
        if(siteUrlupdate.value==""){
            urlErrorupdate.style.display="block";
            urlErrorupdate.textContent="url is requried";
        }
        
         if(validateUrlupdate()==false){
            urlErrorupdate.style.display="block";
            urlErrorupdate.textContent="it is not a url";
        }
    }
        else{
    var bookMarkModel={
        name:siteNameupdate.value,
        url:siteUrlInput.value
    }
    bookMarkContainer.splice(indexUpdate,1,bookMarkModel);
    localStorage.setItem("bookMarkList", JSON.stringify(bookMarkContainer));
            clearForm();
            displayBookMark();
}
}


siteNameupdate.addEventListener("keydown",function(){
    nameErrorupdate.style.display="none";
})
siteUrlupdate.addEventListener("keydown",function(){
    urlErrorupdate.style.display="none";
})
function validateUrlupdate(){
   
var regex=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
   if(regex.test(siteUrlupdate.value)==true){
       return true;
   }
 else{
return false;
}
}








