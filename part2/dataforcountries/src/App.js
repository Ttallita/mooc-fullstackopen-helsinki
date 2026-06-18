import { useEffect, useState } from "react";

import countriesService from "./services/countries";
import Countries from "./components/Countries";

import axios from 'axios'
import AlertMessage from "./components/AlertMessage";

function App() {

  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  const [filter, setFilter] = useState('')
  const [alertMessage, setAlertMessage] = useState(null)

  useEffect(() => {
    countriesService.getAll()
      .then((initialCountries) => {
        setCountries(initialCountries)
        setCountriesToShow([])
      })

  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

    if (event.target.value === ''){
      setAlertMessage(null)
      setCountriesToShow(null)
      return
    }

    const contriesFiltered = countries.filter(country => {
      return country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    })

    if (contriesFiltered.length === 0){
      setAlertMessage('No countries founded')
      setCountriesToShow(null)
      return
    }

    if (contriesFiltered.length > 10){
      setAlertMessage('Too many matches, specify another filter')
      setCountriesToShow(null)
      return
    }

    setAlertMessage(null)
    setCountriesToShow(contriesFiltered)
  }

  return (
    <div>
      <input value={filter} onChange={handleFilterChange} />
      <AlertMessage message={alertMessage}/>
      <Countries value={countriesToShow} />
    </div>
  );
}

export default App;
