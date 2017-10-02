var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';
if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON(openWeatherMap, {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            units: 'metric',
            APPID: '77e3f79318523ba3313aabea60688d8f'
        }).done(function(data) {
            console.log(data);

            selectBackground(data.weather[0].id);
            document.getElementById('city').innerText = data.name;


        })
    })
}


function selectBackground(code) {

    var result;

    if (code === 800 || (code < 958 && code >= 951)) {
        result = "clear";
    }
      else if (code >= 500 && code < 600) {
        result = "rain";
    }

    console.log(result);

    var background = document.querySelector('body');
    background.classList.add(result);

}

