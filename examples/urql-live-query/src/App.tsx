import logo from './logo.svg'
import './App.css'
import { useQuery } from 'urql'
import { ExampleQueryDocument } from '../.graphclient'

function App() {
  const [result, reexecuteQuery] = useQuery({
    query: ExampleQueryDocument,
  })

  const { data, fetching, error } = result
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graph Client with Urql Example with @live</p>
        <p>
          <button type="button" onClick={() => reexecuteQuery()} disabled={fetching}>
            Re Execute Query
          </button>
        </p>
        <p>{fetching ? 'Loading...' : 'You can find the result below...'}</p>
        <fieldset>
          {data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
            </form>
          )}
          {error && (
            <form>
              <label>Error</label>
              <br />
              <textarea value={JSON.stringify(error, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset>
      </header>
    </div>
  )
}

export default App
