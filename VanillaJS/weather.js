const COORDS = 'coords';
const API_KEY = "coords";


function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lng) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).
  then(function(json) {
    console.log(json)

  });
}
function handleGeoSucces(position){
  const latitude = position.coords.latitud;
  const longitude = position.coords.longitude;
  const coordsObj =  {
    latitud: latitude,
    longitude:longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude)
}

function handleGeoError() {
  console.log('Cant access geo location')
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null){
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);

  }
}

function init() {
  loadCoords();
}
init();
