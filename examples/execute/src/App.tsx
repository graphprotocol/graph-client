import logo from './logo.svg'
import './App.css'
import { ExampleQueryDocument, ExampleQueryQuery, execute } from '../.graphclient'
import React, { useEffect } from 'react'
import { ExecutionResult } from 'graphql'

function App() {
  const [result, setResult] = React.useState<ExecutionResult<ExampleQueryQuery>>()

  useEffect(() => {
    execute(ExampleQueryDocument, {}).then((result) => {
      setResult(result)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graph Client Example</p>
        <fieldset>
          {result?.data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(result.data, null, 2)} readOnly rows={25} />
            </form>
          )}
          {result?.errors && (
            <form>
              <label>Error</label>
              <br />
              <textarea value={JSON.stringify(result.errors, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset>
      </header>
    </div>
  )
}

export default App
