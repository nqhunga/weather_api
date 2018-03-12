class Weather {
  constructor(city, state) {
    this.apikey = 'dfc098dd945edb09';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(`https://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}