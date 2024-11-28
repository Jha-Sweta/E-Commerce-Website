const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function signIn(){
var email=document.getElementById('email').value
var password=document.getElementById('password').value

username="swera@123gmail.com";
Pass=/\W/g;
if(email !==""){
	window.alert("Please enter a valid e-mail address.");
}
else if(email==username){
	window.alert("Successfully Login..!")
}
else if(email != username){
	window.alert("Invalid email..!")
}
else if(password == ""|| !Pass.test(password)) {
	alert("Please enter your password");
    return false;
   }
else if(password.length <6){
	alert("Password should be atleast 6 character long");
	// password.focus();
	// return false;
	}
else{
	window.open("index.html","_self")
}

}
function signUp(){
	var name=document.getElementById('name').value
	var email=document.getElementById('email').value
	var password=document.getElementById('password').value
	var regname=/\d+$/g;
	var regemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	var regpass=/\W/
	if(name == "" || regname.test(name)){
	window.alert("Please enter your name properly.");
    name.focus();
    return false;
	}
	if (email == "" || !regemail.test(email)) {
	     window.alert("Please enter a valid e-mail address.");
	     email.focus();
         return false;
	}
		if (password == ""|| !regpass.test(password)) {
		alert("Please enter your password");
	    password.focus();
	   return false;
	   }
		if(password.length <6){
		alert("Password should be atleast 6 character long");
	    password.focus();
	    return false;
		}

	

	
    
}