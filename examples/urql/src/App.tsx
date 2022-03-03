import logo from './logo.svg'
import './App.css'
import { useQuery } from 'urql'

const ExampleQuery = /* GraphQL */ `
  query ExampleQuery {
    # this one is coming from compound-v2
    markets(first: 7) {
      borrowRate
      cash
      collateralFactor
    }
    # this one is coming from uniswap-v2
    pair(id: "0x00004ee988665cdda9a1080d5792cecd16dc1220") {
      id
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
  }
`

function App() {
  const [result, reexecuteQuery] = useQuery({
    query: ExampleQuery,
  })

  const { data, fetching, error } = result
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Graph Client with Urql Example</p>
        <p>
          <button type="button" onClick={() => reexecuteQuery()} disabled={fetching}>
            Re Execute Query
          </button>
        </p>
        {fetching && <p>Loading...</p>}
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
              <textarea value={JSON.stringify(error, null, 2)} readOnly />
            </form>
          )}
        </fieldset>
      </header>
    </div>
  )
}

export default App
