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

## Obtendo dados do servidor

> Atualmente, os motores JavaScript são single-threaded (linha de execução única), o que significa que não podem executar código em paralelo. Como resultado, na prática, é uma exigência usar um modelo não-bloqueante para a execução de operações IO. Caso contrário, o navegador "congelaria" durante a busca de dados em um servidor, por exemplo.

[What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

> É possível executar código paralelizado nos navegadores de hoje em dia com a ajuda dos chamados web workers. No entanto, o loop de eventos de uma única janela do navegador ainda é realizado como single thread.

### Axios e promessas (promises)

Uma promessa pode ter três estados distintos:
1. A promessa está pendente (pending): significa que o valor final (uma das operações seguintes) ainda não está disponível.
2. A promessa está realizada (fulfilled): significa que a operação foi concluída e o valor final está disponível, o que geralmente é uma operação bem-sucedida. Este estado às vezes também é chamado de resolvido(a) (resolved).
3. A promessa está rejeitada (rejected): significa que um erro impediu que o valor final fosse determinado, o que geralmente representa uma operação falha.

### Effect-hooks

> O Effect Hook (Hook de Efeito) te permite executar efeitos colaterais em componentes funcionais > Buscar dados, configurar uma subscription (assinatura), e mudar o DOM manualmente dentro dos componentes React são exemplos de efeitos colaterais.

> Por padrão, useEffect roda depois da primeira renderização e depois de toda atualização, mas é possível escolher rodá-lo somente quando determinados valores tenham mudado.

## Alterando dados no servidor

> ... o método then de uma promessa também retorna uma promessa.

[Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
[Promises chaining](https://javascript.info/promise-chaining)
[You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md)

