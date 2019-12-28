let menu = document.querySelector('.menu'),
    btn = document.querySelector('.menu-btn'),
    main = document.getElementById('main'),
    input = document.getElementById('input'),
    cloudsInfo = document.getElementById('cloud'),
    snowInfo = document.getElementById('snow'),
    dop = document.getElementById('dop'),
    clickMe = document.getElementById('clickMe');
    menuBtn = document.querySelector('.menu-btn');


input.onchange = function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=07fddcccc402652ae71885b49cbc557e`)
    .then(function(resp) { return resp.json()})
    .then(function(data) {
        console.log(data);
        if(data.clouds.all > 75 && data.clouds.all <= 100) {
            clickMe.style.display = 'none';
            document.body.style.backgroundColor = '#333';
            menuBtn.style.backgroundColor = '#ECF0F1';
            cloudsInfo.textContent = 'In ' + input.value +' today was cloudy: ' + data.clouds.all + '% of clouds';
            dop.textContent = 'More info: ';
            snowInfo.textContent = data.weather[0].description;
            // snowInfo.textContent = data.weather.
        } else if(data.clouds.all > 50 && data.clouds.all <= 75) {
            document.body.style.backgroundColor = '#B4C2B4';
            menuBtn.style.backgroundColor = '#333';
            document.body.style.color = '#333';
            cloudsInfo.textContent = 'In ' + input.value +' today was cloudy: ' + data.clouds.all + '% of clouds';
            dop.textContent = 'More info: ';
            snowInfo.textContent = data.weather[0].description;
        }
    })
}

btn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('menu-active');
    main.classList.toggle('main-active');
});