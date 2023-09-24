// import logo from './logo.svg';
import "../src/styles.css"
import Suggestions from "./Suggestions"
import React from "react"
import { optionType } from "../types"
import { ChangeEvent } from "react"
type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:mx-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 1g:p-24 h-full 1g:h[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>
        <div className=" relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={term}
            className="px-2 py-1 rounded-1-md border-2 border-white"
            onChange={onInputChange}
          ></input>
          <Suggestions options={options} onSelect={onOptionSelect} />

          {/* <ul className="absolute top-9 bg-white m1-1 rounded-b-md">
          {options.map((option: optionType, index: number) => (
            <li key={option.name + "-" + index}>
          <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>{option.name}</button>
          </li>
            ) )}
            </ul> */}
          <button
            className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
