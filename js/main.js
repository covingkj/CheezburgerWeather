getWeather("./weather.php");

function getWeather(link) {
    $.getJSON(link, function(data){
        var id = data.weather[0].id;
        var icon = data.weather[0].icon;

        $('#weather-id').text(id);
        $('#weather-icon').text(icon);

	var img = document.createElement("img");
	img.setAttribute("src", 'img/kitteh/' + icon + '.png');
        document.getElementById("kitteh-image").appendChild(img);

        var tempCelcius = data.main.temp - 273.15;
        var tempFahrenheit = tempCelcius * 9 / 5 + 32;
        var description = data.weather[0].description;

        $('#weather-desc').text(description);
        $('#location').text(data.name);

        $('#degreesCelsius').text(Math.round(tempCelcius) + "°C");
        $('#degreesFahrenheit').text(Math.round(tempFahrenheit) + "°F");

        $(".ourinfo").show();
    });
}
