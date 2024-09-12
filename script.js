//Prevent resubmit on refresh and back button
	if(window.history.replaceState){
		window.history.replaceState(null,null,window.location.href);
	}

	let fname=document.getElementById('firstname');
	let lname=document.getElementById('lastname');
	let email=document.getElementById('email');
	let mob=document.getElementById('mob');
	let dob=document.getElementById('dob');
	let password=document.getElementById('password');
	let state=document.getElementById('state');
	let experience=document.getElementById('exp');
	let gender=document.querySelector('input[name="gender"]:checked');
	let intAreas=document.querySelectorAll('input[name="area of interest"]:checked');
	let interestedAreas=document.querySelectorAll('input[name="interest"]');
	let qual=document.getElementById('qualifications');

	let imgError=document.getElementById('img-error');
	let fnameError=document.getElementById('fname-error');
	let lnameError=document.getElementById('lname-error');
	let emailError=document.getElementById('email-error');
	let mobError=document.getElementById('mob-error');
	let dobError=document.getElementById('dob-error');
	let passwordError=document.getElementById('password-error'); 
	let stateError=document.getElementById('state-error');
	let expError=document.getElementById('exp-error');
	let genderError=document.getElementById('gender-error');
	let fieldError=document.getElementById('int-area-error');
	let qualError=document.getElementById('qual-error');	
	let submitError=document.getElementById('submit-error');
//Check form empty fields and Input patterns
	function validateFname(){
		if(fname.value.length===0){
			fnameError.innerHTML="*Please enter your first name";
			event.preventDefault();
		}
		else if(!fname.value.match(/^[A-Za-z]+(\s[A-Za-z]+)?$/)){
			fnameError.innerHTML="*Please enter a valid firstname";
			event.preventDefault();
		}
		else{
			fnameError.innerHTML="";
		}
	}
	function validateLname(){
		if(lname.value.length===0){
			lnameError.innerHTML="*Please enter your last name";
			event.preventDefault();
		}
		else if(!lname.value.match(/^[A-Za-z]+(\s[A-Za-z]+)?$/)){
			lnameError.innerHTML="*Please enter a valid last name";
			event.preventDefault();
		}
		else{
			lnameError.innerHTML="";
		}
	
	}
	function validateEmail(){
		if(email.value.length===0){
			emailError.innerHTML="*Please enter your email";
			event.preventDefault();
		}
		else if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
			emailError.innerHTML="*Please enter a valid email";
			event.preventDefault();
		}
		else{
			emailError.innerHTML="";
		}	
	}	
	function validateMob(){
  		if(mob.value.length===0){
			mobError.innerHTML="Please enter your mobile number";
			event.preventDefault();
		}
		else if(!mob.value.match(/^[6-9]\d{9}$/)){
			mobError.innerHTML="Please enter a valid mobile number";
			event.preventDefault();
		}
		else{
			mobError.innerHTML="";
		}
	}
	function validateDob(){
		let date=dob.value.split('-').reverse().join('-');
		if(dob.value.length===0){
			dobError.innerHTML="*Please enter your date of birth";
			event.preventDefault();
		}
		else if(!date.match(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/)){
			dobError.innerHTML="Please enter a valid date of birth";
			event.preventDefault();
		}
		else{
			mobError.innerHTML="";
		}	
	}
	function validatePassword(){
		if(password.value.length===0){
			passwordError.innerHTML="*Please enter your password";
			event.preventDefault();
		}
		else if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
			passwordError.innerHTML="*Please enter a valid password";
			event.preventDefault();
		}
		else{
			passwordError.innerHTML="";
		}
	}
	function validateState(){
		if(state.value.length===0){
			stateError.innerHTML="*Please enter your state";
			event.preventDefault();
		}
		else{
			stateError.innerHTML="";	
		}
	}
	function validateExp() {
		const experience = exp.value;
		if (experience.length === 0) {
			expError.innerHTML = "*Please enter your experience in years";
			event.preventDefault();
		} 
		else if (isNaN(experience) || experience < 0 || !Number.isInteger(Number(experience))) {
			expError.innerHTML = "*Please enter a valid number for years of experience";
			event.preventDefault();
		} 
		else {
			expError.innerHTML = "";
		}
	}
	function validateGender() {
		let male = document.getElementById("male");
		let female = document.getElementById("female");
		if (male.checked) {
		  genderError.innerHTML = "";
		} else if (female.checked) {
		  genderError.innerHTML = "";
		} else {
		  genderError.innerHTML = "Gender Should be specified";
		  errorElement(genderError);
		  return false;
		}
	  }
	  function validateIntArea(){
		let isChecked =false;
		for(let i=0;i<intAreas.length;i++){
			if(intAreas[i].checked){
				isChecked=true;
				break;
			}
		}
		if(!isChecked){
			fieldError.innerHTML="*Please select your interested areas";
		}
		else{
			fieldError.innerHTML="";
		}
	  }
	  function validateQual(){
			if(qual.value.length===0){
				qualError.innerHTML="*Please enter your qualifications";
				
			}
			else{
				qualError.innerHTML="";
				
			}
	  }








	
	