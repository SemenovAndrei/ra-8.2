import './App.css'
import TestData from './components/TestData/TestData'
import TestError from './components/TestError/TestError'
import TestLoading from './components/TestLoading/TestLoading'

function App() {
  return (
    <div className="App">
      <TestData />
      <TestError />
      <TestLoading />
    </div>
  )
}

export default App
