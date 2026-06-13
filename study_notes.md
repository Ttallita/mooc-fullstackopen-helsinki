> My personal notes from this course.

# Part 1 - Introdução ao React

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

### Materiais de JavaScript

- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://github.com/getify/You-Dont-Know-JS
- https://javascript.info/
- https://eloquentjavascript.net/

## Estado de componente e gerenciadores de eventos

**lifting-state-up:** https://legacy.reactjs.org/docs/lifting-state-up.html

> Nunca tente adivinhar o que o seu código faz. É melhor usar console.log e ver com seus próprios olhos o que ele faz.

## Um estado mais complexo e depuração de aplicações React

**State Updates May Be Asynchronous:** https://legacy.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous


**Comando debugger:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger

**Extensão React developer tools:** https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

### Regras dos Hooks

UseState e useEffect não devem ser chamados dentro de um loop. Hooks só devem ser chamados dentro do escopo de uma função

Exemplos do que NÃO fazer:
```javascript
const App = () => {
  // Desta forma funciona!
  const [idade, setIdade] = useState(0)
  const [nome, setNome] = useState('Juha Tauriainen')

  if ( idade > 10 ) {
    // Desta forma não funciona!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < idade; i++ ) {
    // Não faça deste jeito também!
    const [formaCorreta, setFormaCorreta] = useState(false)
  }

  const bemRuim = () => {
    // Isso também não é permitido!
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```

### Não defina Componentes dentro de Componentes

Isso torna impossível para o React otimizar o componente.


### Leitura Recomendada

- https://reactjs.org/docs/hello-world.html
- https://egghead.io/courses/the-beginner-s-guide-to-react

# Part 2 - Comunicação com o servidor

## Renderização de uma coleção e módulos

...

## Formulários

**Equality comparisons and sameness:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness