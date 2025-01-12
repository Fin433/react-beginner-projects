import {useState} from 'react'
import './index.scss'

function App() {
	const [count, setCount] = useState(0)
	const incrCount = () => {
		setCount(count + 1)
	}
	const decrCount = () => {
		setCount(count - 1)
	}
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={decrCount} className="minus">- Минус</button>
        <button onClick={incrCount} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
