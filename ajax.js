// JavaScript med AJAX (Asynchronous JavaScript med XML)
// Vi ska använda AJAX för att hämta innehållet på en hemsida

// Påbörja en hämtning
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
	consolelog("Någonting händer");
}

request.open("GET","http://mardby.se/AJK15G/lorem_text.php");
request.send();

