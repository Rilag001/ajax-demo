// JavaScript med AJAX (Asynchronous JavaScript med XML)
// Vi ska använda AJAX för att hämta innehållet på en hemsida

// Påbörja en hämtning
var request = new XMLHRequest();

request.onreadystatechange = function() {
	consolelog("Någonting händer");
}

request.open('GET',"http://google.com");
request.send();

