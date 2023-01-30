import { useEffect, useState } from "react";
import './App.css';

const snacks = ['x-tudo', 'mac-sujeira', 'x-podrão']

function App() {

  const [hello, setHello] = useState();

  useEffect(() => { 
    fetch("http://localhost/api/hello", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => { 
        setHello(data)
        console.log(data)
      })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Lanchão</h1>
        <ul>
          { snacks.map((value, id) => (<li key={id}>
            {value}
          </li>))}
        </ul>
        <ul>
          {hello?.users?.map(v => (
            <li key={ v.id}>{v.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
