var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';


var temp = '';
var tempDiv = document.getElementById('temperature');

if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function(position) {
        $.getJSON(openWeatherMap, {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            units: 'metric',
            APPID: '77e3f79318523ba3313aabea60688d8f'
        }).done(function(data) {
            console.log(data);

            document.getElementById('city').innerText = data.name;

            selectBackground(data.weather[0].id);

            temp =  data.main.temp;
            document.getElementById('temperature').innerText = temp;

            var desc = data.weather[0].description;
            document.getElementById('description').innerText = desc[0].toUpperCase() + desc.slice(1);

            selectIcon(data.weather[0].icon);



        })
    })
}


function selectBackground(code) {

    var result;

    if (code === 800 || (code < 958 && code >= 951)) {
        result = "clear";
    }
    else if (code >= 300 && code < 600) {
        result = "rain";
    }
    else if (code >= 900 && code < 907) {
        result = "extreme";
    }
    else if (code >= 701 && code < 782) {
        result = "fog";
    }
    else if (code >= 600 && code < 623) {
        result = "snow";
    }
    else if (code >=200 && code < 300) {
        result = "storm"
    }

    else if (code >= 800 && code < 805) {
        result = "clouds"
    }

    var background = document.querySelector('body');
    background.classList.add(result);

}

function selectIcon(icon) {

    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + icon + ".png";

}


document.getElementById('degree').addEventListener('click', function () {

    if (!this.classList.contains('farenheit')) {

        this.classList.add('farenheit');
        this.innerHTML = '&deg;F';
        temp = (temp * 9)/5 + 32;
        tempDiv.innerHTML = temp;

    } else {

        this.classList.remove('farenheit');
        this.innerHTML = '&deg;C';
        temp = (temp - 32) * 5/9;
        tempDiv.innerHTML = temp;
    }

});


