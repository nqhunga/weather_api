
//init UI
const ui = new UI;
// init localStorage
const storage = new Storage;
// Get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state)
  // get and display weather
  getWeather();

  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
    
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
