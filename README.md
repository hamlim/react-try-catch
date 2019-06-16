# `@matthamlin/react-try-catch`

A React component for try-catch based control flow.

Note: This is not yet published to NPM.

## Example

```jsx
import TryCatch from '@matthamlin/react-try-catch'

function App(props) {
  function someFunctionThatMightThrow() {
    return props.foo.bar.value
  }
  return <TryCatch attempt={someFunctionThatMightThrow} fallback={null} />
}
```

## API

- `attempt` : Function - A function that might throw an error, otherwise will return the thing to be rendered
- `fallback` : Node - A thing to render if the attempt fails
