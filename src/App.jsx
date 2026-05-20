import { useEffect, useState } from "react";
import { colors } from "./data.js"
import "./styles.css";
import Cube from "./components/cube/Cube.jsx";
import Checkbox from './components/checkbox/checkbox.jsx'

function App() {
  const [colorsState, updateColors] = useState(colors);
  // const nameNewColor = useRef();
  // const hexNewColor = useRef();
  // const tempNewColor = useRef();

  // TODO: Create own hook:
  // * has to create state
  // * return
  // * clean state

  
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [temperature, setTemperature] = useState("");

  const handleRemoveCube = (id) => {
    updateColors((current) => current.filter((item) => item.id !== id))
  }

  const handleNameChange = (evt) => {
    setName(() => evt.target.value)
  }

  const handleColorChange = (evt) => {
    setColor(() => evt.target.value)
  }
  
  const handleTempChange = (evt) => {
    setTemperature(() => evt.target.value)
  }

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    // updateColors((current) => {
    //   return [
    //     {
    //       id: Date.now(),
    //       name: nameNewColor.current.value,
    //       color: hexNewColor.current.value,
    //       temperature: tempNewColor.current.value
    //     },
    //     ...current
    //   ]
    // })

    // TODO: BUG! need to update after color created, not together
    // const updateNameInput = nameNewColor.current.value = "";
    // updateNameInput();

    // 👑 Controlled form, best way.
    updateColors((current) => (
      [
        {
          id: Date.now(),
          name,
          color,
          temperature
        },
        ...current
      ]
    ));
    // setName("");
    // setColor("");
    // setTemperature("")
  }

  // TODO: How to make happen only on remove, not on render.
  // 1. Option to make a Modal - can change into it
  // useEffect(() => {
  //   alert("Element is about to be deleted!")  
  // }, [colorsState])

  if (!colorsState.length) {
    return (
      <div>No more cubes left...</div>
    )
  }

  return (
    <div>
      {/* <Filter /> */}
      <h1>Colors</h1>
      <p>Lorem ipsum....</p>
      {/* <Form /> */}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
        /> 
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        {/* TODO: default set how? */}
        <select 
          value={temperature}
          onChange={handleTempChange}
        >
          <option value="cold">Cold</option>
          <option value="warm">Warm</option>
        </select>
        <button>Create Color</button>
      </form>

      {/* <List /> */}
      <ul className="list">
        {colorsState.map((color) => (
          <Cube key={color.id} color={color} remove={handleRemoveCube}/>
        )
        )}
      </ul>

      <div>
        <h2>Checkbox</h2>
        <Checkbox /> 
      </div>  
    </div>
  )
}

export default App
