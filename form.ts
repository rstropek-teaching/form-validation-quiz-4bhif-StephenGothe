var input: HTMLElement = document.getElementById("firstName");
var mandatory: HTMLElement = document.getElementById("firstNameMandatory");

Check();

input = document.getElementById("lastName"); 
mandatory = document.getElementById("lastNameMandatory");

Check();

input = document.getElementById("email"); 
mandatory = document.getElementById("emailMandatory");

Check();

function Check()
{
    if(input.textContent === "")
        mandatory.hidden = false;
    else
        mandatory.hidden = true;
}

$("#firstName").on("change keyup paste", function(){

    input = document.getElementById("firstName");
    mandatory = document.getElementById("firstNameMandatory");
    
    Check();

});

$("#lastName").on("change keyup paste", function(){
    
    input = document.getElementById("lastName"); 
    mandatory = document.getElementById("lastNameMandatory");
    
    Check();
    
});

$("#email").on("change keyup paste", function(){
        
    input = document.getElementById("email"); 
    mandatory = document.getElementById("emailMandatory");
    
    Check();
        
});