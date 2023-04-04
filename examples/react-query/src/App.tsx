import logo from './logo.svg'
import './App.css'
import { getBuiltGraphSDK } from '../.graphclient'
import { useQuery } from '@tanstack/react-query'

const sdk = getBuiltGraphSDK()

function App() {
  const result = useQuery({ queryKey: ['ExampleQuery'], queryFn: () => sdk.ExampleQuery() })

  const { data, isLoading, error, refetch } = result
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graph Client with React Query Example</p>
        <p>
          <button type="button" onClick={() => refetch()} disabled={isLoading}>
            Re Execute Query
          </button>
        </p>
        <p>{isLoading ? 'Loading...' : 'You can find the result below...'}</p>
        <fieldset>
          {data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
            </form>
          )}
          {error ? (
            <form>
              <label>Error</label>
              <br />
              <textarea value={JSON.stringify(error, null, 2)} readOnly rows={25} />
            </form>
          ) : null}
        </fieldset>
      </header>
    </div>
  )
}

export default App
