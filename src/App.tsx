// import logo from './logo.svg';
import React from "react"
import Forecast from "./Forecast"
import "../src/styles.css"
import Search from "./Search"
import useForecast from "../src/hooks/useForecast"
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
const App = (): JSX.Element => {
const {

  term, options, forecast,onInputChange, onOptionSelect, onSubmit
}  = useForecast()

  return (
     <main className="flex justify-center items-center bg-gradient-to-br from-sky-300 via-rose-300 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
