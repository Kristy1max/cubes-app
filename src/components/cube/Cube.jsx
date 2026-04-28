import styles from "./Cube.module.css";
  
function Cube({ color, remove }) {
  const handleRemove = () => {
    remove(color.id);
  }

  return (
    <li className={styles.cube} style={{ background: color.color }}>
      {color.name}
      <button className={styles.btnRemove} type="button" onClick={handleRemove}>X</button>
    </li>
  )
}

export default Cube