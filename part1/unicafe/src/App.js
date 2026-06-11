import { useState } from 'react'

  const StatisticLine = ({ text, value }) => {

    return (
        <p>{text} {value}</p>
    )
  }

  const Statistics = ({ good, neutral, bad }) => {

    if (good == 0 && neutral == 0 && bad == 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }

    const calculateAverage = (good, neutral, bad) => {
      return ((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad);
    };

    const calculatePercentagePositive = (good, neutral, bad) => {
      return (good / (good + neutral + bad)) * 100.0;
    };

    return (
      <div>
        <h1>statistics</h1>

        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />

        <p>all {good + neutral + bad}</p>
        <p>average {calculateAverage(good, neutral, bad)}</p>
        <p>positive {calculatePercentagePositive(good, neutral, bad)} %</p>
      </div>
    )
}

const Button = ({ text, onClick }) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {

  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClickGood = () => {
    const count = good + 1;
    setGood(count)
    console.log(count)
  };

  const onClickNeutral = () => {
    const count = neutral + 1;
    setNeutral(count)
    console.log(count)
  };

  const onClickBad = () => {
    const count = bad + 1;
    setBad(count)
    console.log(count)
  };

  return (
    <div>
      
      <h1>give feedback</h1>

      <Button text="good" onClick={onClickGood} />
      <Button text="neutral" onClick={onClickNeutral} />
      <Button text="bad" onClick={onClickBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App