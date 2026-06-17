import { useState, useEffect } from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

import personsService from './services/persons'

import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
        setPersonsToShow(initialPersons)
      })
  }, [])

  const showMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const cleanForm = () => {
    setNewName('')
    setNewNumber('')
  }

  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (persons.some(person => person.name === newName)) {
      if (!window.confirm(`Deseja atualizar número da pessoa ${newName}?`)) {
        cleanForm()
        return
      }

      let idPersonToUpdate = persons.find(person => person.name === newName).id

      personsService
        .update(idPersonToUpdate, newPerson)
        .then((returnedPerson) => {
          let newPersonsToShow = persons.map(person => person.name !== newName ? person : returnedPerson);
          setPersons(newPersonsToShow)
          setPersonsToShow(newPersonsToShow)
          cleanForm()

          showMessage({ content: `Número da pessoa com nome ${newName} foi atualizado com sucesso`, isSuccess: true })
        })
        .catch((error) => {
          let newPersonsToShow = persons.filter(person => person.id !== idPersonToUpdate);
          setPersons(newPersonsToShow)
          setPersonsToShow(newPersonsToShow)
          showMessage({ content: `Não foi possível atualizar o usuário ${newName} pois ele foi removido`, isSuccess: false })
        })

      return
    }

    personsService
      .create(newPerson)
      .then((returnedPerson) => {
        let newPersonsToShow = persons.concat(returnedPerson)
        setPersons(newPersonsToShow)
        setPersonsToShow(newPersonsToShow)
        cleanForm()

        showMessage({ content: `Nova pessoa com nome ${newName} foi inserida com sucesso`, isSuccess: true })
      })
  }

  const deletePerson = (personToDelete) => {
    if (!window.confirm('Deletar pessoa?'))
      return

    personsService
      .deletePerson(personToDelete.id)
      .then((personDeleted) => {
        let newPersonsToShow = persons.filter(person => person.id !== personDeleted.id);
        setPersons(newPersonsToShow)
        setPersonsToShow(newPersonsToShow)
        showMessage({ content: `Registro de ${personToDelete.name} foi deletado com sucesso`, isSuccess: true })
      })
      .catch((error) => {
        let newPersonsToShow = persons.filter(person => person.id !== personToDelete.id);
        setPersons(newPersonsToShow)
        setPersonsToShow(newPersonsToShow)
        showMessage({ content: `Registro de ${personToDelete.name} já tinha sido deletado anteriormente`, isSuccess: false })
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

      <Notification message={message} />

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