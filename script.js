var english_text = document.querySelectorAll('.english');
var portuguese_text = document.querySelectorAll('.portuguese');
var pt_button = document.getElementById("pt");
var en_button = document.getElementById("en");


en_button.addEventListener("click", function(){
	setLanguage("en");
});

pt_button.addEventListener("click", function(){
	setLanguage("pt");
});

var default_language = "pt";

if (sessionStorage.getItem("language")) {

	default_language = sessionStorage.getItem("language");

} 
// sessionStorage.setItem('language', default_language);

function setLanguage(language){

	if(language == "en"){

		for(var i = 0; i < portuguese_text.length; i++){
			portuguese_text[i].style.display = "none";
		}

		for(var i = 0; i < english_text.length; i++){
			english_text[i].style.display = "block";
		}

		sessionStorage.setItem("language", "en");

	} else {

		for(var i = 0; i < portuguese_text.length; i++){
			portuguese_text[i].style.display = "block";
		}

		for(var i = 0; i < english_text.length; i++){
			english_text[i].style.display = "none";
		}
		
		sessionStorage.setItem("language", "pt");

	}
}

if(default_language == "en"){

	setLanguage("en");

} else {

	setLanguage("pt");
}

