// JavaScript med AJAX (Asynchronous JavaScript med XML)
// Vi ska använda AJAX för att hämta innehållet på en hemsida

// Påbörja en hämtning
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
	console.log("Någonting händer");
    
    if(request.readyState == 4 && request.status == 200){
    	// I var res (response) finns det information
    	console.log("Svaret (response) är " + request.responseText);
    }
    
}

request.open("GET","http://mardby.se/AJK15G/lorem_text.php");
request.send();

