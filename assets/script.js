

fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=libra&day=today", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
	}
})
.then(response => {

    var something = response.json()
    .then(function (something){
        console.log(something.color)
    })
    console.log(something)
})
.catch(err => {
	console.error(err);
});

// mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr

// test

var name = 'Michael Jordan'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
    headers: { 'X-Api-Key': 'mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});