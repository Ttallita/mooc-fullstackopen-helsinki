> My personal notes from this course.

# Part 1

## Introdução à biblioteca React

### JSX

Código JSX:
```jsx
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
```javascript
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
```javascript
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

----

## JavaScript

### Destructuring assignment example:

```javascript
const t = [1, 2, 3, 4, 5]

const [primeiro, segundo, ...resto] = t

console.log(primeiro, segundo)  // 1 2 é impresso
console.log(resto)          // [3, 4, 5] é impresso
```

## Estado de componente e gerenciadores de eventos