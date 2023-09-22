import React from "react";
import { forecastType } from "../types";
type Props = { data: forecastType}
const Forecast = ({data}: Props): JSX.Element => {
  const today = data.list[0]
return (
  <div>
    <div>
      <section>
        <h2 className="text-2xl font-black">{data.name}, <span className="font-thin">{data.country}</span></h2>
        <h1 className="text-4xl font-extrabold"> {Math.round(today.main.temp)}</h1>
      </section>
    </div>
  </div>
)
}
export default Forecast
