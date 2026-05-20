import { useReducer } from 'react';

export default function Checkbox() {
  // const [checked, setChecked] = useState(false);
  // const [checked, setChecked] = useReducer((current) => !current, false);

  function commitAction(current, action) {
    switch (action.type) {
      case "TOGGLE_ACTIVE":
        return {
          ...current,
          isActive: !current.isActive
        };
      case "CHANGE_AGE":
        return {
          ...current,
          age: action.payload
        }
      case "CHANGE_HEIGHT":
        return {
          ...current,
          height: action.payload
        }
    }
  }

  const [person, dispatcher] = useReducer(commitAction,
    { name: "Ammy", age: 8, height: 100, isActive: false }
  );

  const handleAge = ({ target }) => {
    dispatcher({
      type: "CHANGE_AGE",
      payload: target.value
      })
  }

  const handleActivation = () => {
    dispatcher({
      type: "TOGGLE_ACTIVE",
      payload: !person.isActive
    })
  }

  const handleHeight = ({target}) => {
    dispatcher({
      type: "CHANGE_HEIGHT",
      payload: target.value
    })
  }

  return( 
    <>
      <input type="checkbox" checked={person.isActive} onChange={handleActivation} />
      <p>Person name: {person.name}, active: {person.isActive}</p>
      <h2>Age: {person.age}</h2>
      <input type="number" value={person.age} onChange={handleAge} />
      <h2>Height: {person.height}</h2>
      <input type="number" value={person.height} onChange={handleHeight} />
    </>
  )
}
