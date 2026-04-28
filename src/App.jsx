import { useState } from "react";
import { colors } from "./data.js"
import "./styles.css";
import Cube from "./components/cube/Cube.jsx";

function App() {
  const [colorsState, updateColors] = useState(colors);

  const handleRemoveCube = (id) => {
    updateColors((current) => current.filter((item) => item.id !== id ))
  }

  if (!colorsState.length) {
    return (
      <div>No more cubes left...</div>
    )
  }
  
  return (
    <div>
      <h1>Colors</h1>
      <p>Lorem ipsum....</p>
      {/* 
      Next time:
        * Add form 
        * Uncontrolled => controlled element
        * Add more hooks (including own one)
        * Voting for each cube
      */}
      <form>
        
      </form>
      <ul className="list">
        {colorsState.map((color) => (
          <Cube key={color.id} color={color} remove={handleRemoveCube}/>
        )
        )}
      </ul>
    </div>
  )
}

export default App
