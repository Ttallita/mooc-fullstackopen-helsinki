const App = () => {

  const exercises = [
    { part: 'Fundamentos da biblioteca React', exercise: 10 },
    { part: 'Usando props para passar dados', exercise: 7 },
    { part: 'Estado de um componente', exercise: 14 },
  ]

  const course = 'Desenvolvimento de aplicação Half Stack'

  const Header = (props) => {
    console.log(props)
    return (
      <h1>{props.course}</h1>
    )
  }

  const Part = (props) => {
    console.log(props)
    return (
      <p>
        {exercises[0].part} {exercises[0].exercise}
      </p>
    )
  }

  const Content = () => {
    console.log(exercises)
    return (
      <>
        <Part part={exercises[0].part} quant={exercises[0].part} />
        <Part part={exercises[1].part} quant={exercises[1].part} />
        <Part part={exercises[2].part} quant={exercises[2].part} />
      </>
    )
  }

  const Total = () => {
    console.log(exercises)
    return (
      <p>Number of exercises {exercises[0].exercise + exercises[1].exercise + exercises[2].exercise}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App