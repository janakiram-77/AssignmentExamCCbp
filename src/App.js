import react, {useState} from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

const App = () => (
  <div>
    <SearchBar />
    <WeatherCard />
  </div>
)

export default App
