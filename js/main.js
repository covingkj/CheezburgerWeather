getWeather("./weather.php" + window.location.search);

function getWeather(link) {
    $.getJSON(link, function(data){
        var id = data.weather[0].id;
        var icon = data.weather[0].icon;

		var img = document.createElement("img");
		img.setAttribute("src", 'img/kitteh/' + icon + '.png');
		document.getElementById("kitteh-image").appendChild(img);
        
		var skaiUrl = 'img/skai/' + icon + '.png';
        document.getElementById("main").style.backgroundImage = "url("+skaiUrl+")";
        
        $('#weather-id').text(id);
        $('#weather-icon').text(icon);
        
        var tempCelcius = data.main.temp - 273.15;
        var tempFahrenheit = tempCelcius * 9 / 5 + 32;
        tempCelcius = Math.round(tempCelcius) + "°C";
        tempFahrenheit = Math.round(tempFahrenheit) + "°F";
        
        var description = data.weather[0].description;
        var location    = data.name;

        $('#weather-desc').text(tempCelcius + " " +
        						tempFahrenheit + ", " +
        						description + ", " +
        						"in " + location + "?");
        $('#weather-reaction').text("I can has");

        $(".ourinfo").show();
    });
}
