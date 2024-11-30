import react, {useState} from 'react'
import SavedCities from "./SavedCities"
import unitToggle from "./UnitToggle"

const apiKey = '2807ea3595754ca8af550740243011'

const WeatherCard =
  const [Temperature, tempValue] = useState[Temperature]
  const [Humidity, humidityValue] = useState[Humidity]
  const [ WindSpeed, winSpeedVal] = useState[WindSpeed]
  const [WeatherConditions, consitionVal]= useState[WeatherConditions]

  const apiValue = try {
    const fetchData = fetch(apiKey, )
    if (response.ok === true) {
      let data = response.json()

    }
  } except(error) {
      let errorMsg = response.error;
  }

  let errorDisplay = errorMsg? true : false;

  return (
    <div class="weathercard">
      <div>
         <div class="tempcard">
        <h1 class="heading">{Temperature}</h1>
        <p class="para">Current temperature</p>
      </div>
      <div class="humiditycard">
        <h1 class="heading">{Humidity}</h1>
        <p class="para">Current humidity</p>
      </div>
      <div class="windspeedcard">
        <h1 class="heading">{WindSpeed}</h1>
        <p class="para">Current windspeed</p>
      </div>
      <div class="weathercondicard">
        <h1 class="heading">{WeatherConditions}</h1>
        <p class="para">Current weathe condition</p>
      </div>
      </div>
      <div>
        <unitToggle />
      </div>
      <div>
        <SavedCities />
      </div>
      if errorDisplay {
        <div>
          <p class="error">"city not found or API failure"</p>
        </div>
      }
    </div>
  )


export default WeatherCard
