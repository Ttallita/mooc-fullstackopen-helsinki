import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
        setPersonsToShow(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (persons.some(person => person.name === newName)) {
      if (!window.confirm(`Deseja atualizar número da pessoa ${newName}?`)) {
        setNewName('')
        setNewNumber('')
        return
      }

      let idPersonToUpdate = persons.find(person => person.name === newName).id

      personsService
        .update(idPersonToUpdate, newPerson)
        .then((returnedPerson) => {
          let newPersonsToShow = persons.map(person => person.name !== newName ? person : returnedPerson);
          setPersons(newPersonsToShow)
          setPersonsToShow(newPersonsToShow)
          setNewName('')
          setNewNumber('')
        })

      return
    }

    personsService
      .create(newPerson)
      .then((returnedPerson) => {
        let newPersonsToShow = persons.concat(returnedPerson)
        setPersons(newPersonsToShow)
        setPersonsToShow(newPersonsToShow)
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (id) => {
    if (!window.confirm('Deletar pessoa?'))
      return

    personsService
      .deletePerson(id)
      .then((personDeleted) => {
        let newPersonsToShow = persons.filter(person => person.id !== personDeleted.id);
        setPersons(newPersonsToShow)
        setPersonsToShow(newPersonsToShow)
      })
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

      <Persons persons={personsToShow} onClickDelete={deletePerson} />

    </div>
  )
}

export default App