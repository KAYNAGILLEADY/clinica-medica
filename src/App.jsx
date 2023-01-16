import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { FetchProvider } from './context/fetch.jsx'

const App = () => {
  return (
    <div id="App">
      <Header />
      <FetchProvider>
        <Main />
      </FetchProvider>
    </div>
  )
}

export default App