> My personal notes from this course.

# Part 1

### JSX

Código JSX:
```
const App = () => {
  const hoje = new Date()
  const a = 10
  const b = 20
  console.log(hoje, a+b)

  return (
    <div>
      <p>Olá, mundo! Hoje é {hoje.toString()}</p>
      <p>
        {a} mais {b} é {a + b}
      </p>
    </div>
  )
}
```

Código JSX compilado em código JS:
```
const App = () => {
  const hoje = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Olá, mundo! Hoje é ', hoje.toString()
    ),
    React.createElement(
      'p', null, a, ' mais ', b, ' é ', a + b
    )
  )
}
```

### Fragmentos

Uso de elementos vazios para criar fragmentos
```
const App = () => {
  const nome = 'Peter'
  const idade = 10

  return (
    <>
      <h1>Olá a todos!</h1>
      <Hello nome='Maya' idade={26 + 10} />
      <Hello nome={nome} idade={idade} />
      <Footer />
    </>
  )
}
```

----

> Em React, elementos individuais renderizadas dentro das chaves devem ser valores primitivos, como números ou strings.