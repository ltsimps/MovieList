
import './App.css'

function App() {

  return (
    <>
      <Text text="Engineer" />
      <Text text="Lamar" />
    </>
  )
}

function Text({text}) {
  return <h1>Hello {text}</h1>
}

export default App
