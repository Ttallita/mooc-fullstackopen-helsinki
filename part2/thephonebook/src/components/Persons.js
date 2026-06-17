const Person = ({ person, onClickDelete }) => {

  return (
    <p>
      {person.name} {person.number}
      <button onClick={() => onClickDelete(person.id)}>
        Delete
      </button>
    </p>
  )
}

const Persons = ({ persons, onClickDelete }) => {
  return (
    <>
      {persons.map(person =>
        <div key={person.id}>
          <Person person={person} onClickDelete={onClickDelete}/>
        </div>
      )}
    </>
  )
}

export default Persons