import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect (efeito)')
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled (promessa resolvida)')
      setPersons(response.data)
      setPersonsToShow(response.data)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.some(person => person.name === newName)) {
      setNewName('')
      setNewNumber('')
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersons = persons.concat(newPerson);
    setPersons(newPersons)
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)

    setPersonsToShow(persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      person.number.toLowerCase().includes(event.target.value.toLowerCase())
    ))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} onChange={handleFilterChange} />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={addName}
        onChangeNumber={handleNumberChange}
        onChangeName={handleNameChange} />

      <h2>Numbers</h2>

      <Persons persons={personsToShow} />

    </div>
  )
}

export default App