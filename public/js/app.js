
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



        })
    })
}