const App = () => {

  const exercises = [
    { name: 'Fundamentos da biblioteca React', quant: 10 },
    { name: 'Usando props para passar dados', quant: 7 },
    { name: 'Estado de um componente', quant: 14 },
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
        {props.name} {props.quant}
      </p>
    )
  }

  const Content = () => {
    console.log(exercises)
    return (
      <>
        <Part name={exercises[0].name} quant={exercises[0].quant} />
        <Part name={exercises[1].name} quant={exercises[1].quant} />
        <Part name={exercises[2].name} quant={exercises[2].quant} />
      </>
    )
  }

  const Total = () => {
    console.log(exercises)
    return (
      <p>Number of exercises {exercises[0].quant + exercises[1].quant + exercises[2].quant}</p>
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