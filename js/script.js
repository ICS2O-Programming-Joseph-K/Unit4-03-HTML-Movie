"use strict"

// See which movie rating catagory the user belongs in by age
function enterClicked () {
  	// initialize variables
	let Output = ""
  
	// get user input
	let age = parseInt(document.getElementById('age').value)

  	// if the user inputs their age as 118 (oldest person on Earth)
	if (age == 118) {
		Output = "Hello, Lucile Randon!"
	} 

  	// if user input is 17 or higher
	else if (age >= 17) {
		Output = "You can watch R rated films."
	} 

  // else if the user input is 13 or higher
	else if (age >= 13) {
		Output = "You can watch PG13 films."
	}

   // else if the user input is 10 or higher 
	else if (age >= 10) {
		Output = "You can watch G rated films."
	}
    
	// else, if any other value
	else {
		Output = "You cannot go to the theates alone."
	}
	
  // display the results
  document.getElementById('user-info').innerHTML = Output                                                                                                                                                                               
}
