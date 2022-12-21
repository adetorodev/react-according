// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <div className="App">
      <div className="accordion">
        {data.map((item, i) => (
          <div className='item' key={item.id}>
            <div className='title' onClick={() => toggle(i)}>
              <h1>{item.title}</h1>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'info show' : 'info'}>{item.info}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
