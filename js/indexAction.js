function imageEnlarge(small, large) {
	document.getElementById('largeImg').src = small;
    showPanel();
    hideAfterClick();
    setTimeout(function() {
        document.getElementById('largeImg').src = large;
    }, 1)
}

function showPanel() {
	document.getElementById('enlargedPanel').style.display = 'block';
}

function hideAfterClick() {
	if(document.selection)
        document.selection.empty();
    if(window.getSelection)
        window.getSelection().removeAllRanges();
}

function submissionValidation() {
	var firstName = document.getElementById('firstname').value;
	var lastName = document.getElementById('lastname').value;
	var location = document.getElementById('Location').value;

	if (firstName == "")
    {
    	window.alert("please put in a first name!");
    	
    }
    else if (lastName == "")
    {
    	window.alert("Please put in a last name!");
    	
    }
    else if (location == "")
    {
    	window.alert("Please put in a location!");
    	
    }
    else 
    {
    	submissionAction();
    }
}

function submissionAction() {
	var firstName = document.getElementById('firstname').value;
	var lastName = document.getElementById('lastname').value;
	var location = document.getElementById('Location').value;
	alert(firstName + " " + lastName + ", you have successfully submitted your picture you shoot at " + location + "! \nThank you very much!");
}

