var inputEl = document.querySelector('#month1')
var input = inputEl.value

// User Details
var userDetailsUL = document.querySelector('#userDetails')
var userColorLI = document.querySelector('#color')
var userCompLI = document.querySelector('#compatibility')
var userDescLI = document.querySelector('#description')
var luckyNumLI = document.querySelector('#lucky_number')
var luckyTimeLI = document.querySelector('#lucky_time')
var moodLi = document.querySelector('#mood')
var Aries =["Emma Watson", "Paul Rudd"]
var Taurus =["Kelly Clarkson", "George Klooney"]
var Gemini =["Venus Williams", "Johnny Depp"]
var Cancer =["Selena Gomez", "Chris Pratt"]
var Leo =["Chris Hemsworth", "Jennifer Lawrence"]
var Virgo =["Beyonce", "Prince Harry"]
var Libra =["Kim Kardashian", "Lil Wayne"]
var Scorpio =["Leonardo DiCaprio", "Katy Perry"]
var Sagittarius =["Britney Spears", "Brad Pitt"]
var Capricorn =["Lin-Manuel Miranda", "Kate Middleton"]
var Aquarius =["Shakira", "Harry Styles"]
var Pisces =["Justin Bieber", "Olivia Rodrigo"]

// var month = localStorage.getItem
function zodiac(day, month){
    // returns the zodiac sign according to day and month ( https://coursesweb.net/ )
    var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month];
   }
   
   var z_sign = zodiac(01, 09); // 15 - October
   
//    userDetails.write(z_sign); // Libra
//    userDetails.innerText = z_sign

   fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=libra&${input}`, {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "e62a7796a3msh0623a8dce54fae1p10c5c9jsn4bfcafdb2b2b"
	}

})
.then(response => {

    var horoscopeData = response.json()
    .then(function (horoscopeData){
        console.log(horoscopeData)
        console.log(horoscopeData)
        console.log("color: " + horoscopeData.color)
        console.log("compatibility: is " + horoscopeData.compatibility)
        console.log("Description: " + horoscopeData.description)
        console.log("Lucky Number: " + horoscopeData.lucky_number)
        console.log("Lucky Time: " + horoscopeData.lucky_time)
        console.log("Mood: " + horoscopeData.mood)
        userColorLI.innerHTML="Color:  " + horoscopeData.color
        userCompLI.innerHTML="Compatibility:  " + horoscopeData.compatibility
        userDescLI.innerHTML="Description:  " + horoscopeData.description
        luckyNumLI.innerHTML="Lucky Number:  " + horoscopeData.lucky_number
        luckyTimeLI.innerHTML="Lucky Time:  " + horoscopeData.lucky_time
        moodLi.innerHTML="Mood:  " + horoscopeData.mood

    })
    // console.log(something)
})
.catch(err => {
	console.error(err);
});

var name = 'Michael Jordan'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
    headers: { 'X-Api-Key': 'mM3hOIKpYsVAmBopD3qVFA==mPctNJmaPTOScjRr'},
    contentType: 'application/json',
    success: function(result) {
        // console.log(result);
		var celebBDay = result[0].birthdy
		// console.log(celebBDay)
		// console.log(celebBDay.slice(5))
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

$( function() {
    $( "#datepicker" ).datepicker();
  } );


